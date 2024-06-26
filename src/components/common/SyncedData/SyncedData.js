import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import * as R from 'ramda'

import Link from '../Link'
import Multiselect from '../Multiselect'
import Dropdown from '../Dropdown'
import SyncedHeader from './SyncedHeader'
import { getSyncedData, discardSyncedData } from '@modules/createChart'
import { isFigma } from '@app/utils'
import { forms, syncDataTypes } from '@app/constants'

const Root = styled.div`
  flex: 1;
  flex-basis: 100%;
`

const StyledMultiselect = styled(Multiselect)`
  flex-basis: 50%;
`

const StyledDropdown = styled(Dropdown)`
  flex-basis: 100%;
  width: 100%;
`

const StyledLink = styled(Link)`
  position: relative;
  top: ${isFigma ? '20' : '0'}px;
`

const FieldBlock = styled.div`
  display: flex;
  margin-top: 24px;
  max-height: ${isFigma ? '158' : '136'}px;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 4px;
  margin-right: 4px;
  flex: 1;
  flex-basis: 50%;
`

// TODO: use text constants config
const helpLinks = {
  [syncDataTypes.API]: {
    link: '',
    label: 'How to use data from API?',
  },
  [syncDataTypes.GS]: {
    link: '',
    label: 'How to use data from GS?',
  },
  [syncDataTypes.CSV]: {
    link: '',
    label: 'How to use data from CSV?',
  },
  [syncDataTypes.JSON]: {
    link: '',
    label: 'How to use data from JSON?',
  },
}

const SyncedDataDumb = ({
  discardSyncedData,
  discardable,
  syncedData: { data = [], type, source },
}) => {
  let options
  switch (type) {
    case syncDataTypes.GS:
      options = data[0]

      break
    case syncDataTypes.API:
      options = Object.keys(data[0])

      break
    case syncDataTypes.CSV:
      options = data[0]

      break
    case syncDataTypes.JSON:
      options = Object.keys(data[0])
      break
    default:
      options = []
  }

  return (
    <Root>
      <SyncedHeader
        source={source}
        onClose={discardSyncedData}
        discardable={discardable}
        type={type}
      />
      <FieldBlock>
        <Col>
          <Field
            name='labels'
            component={StyledDropdown}
            options={options.map((option) => ({
              value: option,
              label: option,
            }))}
            label='Labels'
          />
          <StyledLink>{helpLinks[type].label}</StyledLink>
        </Col>
        <Field
          name='dataColumns'
          component={StyledMultiselect}
          options={options}
          label='Data columns'
        />
      </FieldBlock>
    </Root>
  )
}

const SyncedData = R.compose(
  connect(R.applySpec({ syncedData: getSyncedData }), {
    discardSyncedData,
  }),
  reduxForm({
    form: forms.SYNCED_DATA,
    enableReinitialize: true,
  })
)(SyncedDataDumb)

export default SyncedData
