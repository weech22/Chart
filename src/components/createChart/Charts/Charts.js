import React, { memo } from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import { connect } from 'react-redux'

import { selectChartTabRequest, getCurrentChart } from '@modules/createChart'
import { getIsPro } from '@modules/account'
import { navigationTabs } from '@app/constants'
import TabButton from './TabButton'
import { isAdobe, isChartDisabled } from '@app/utils'

const Root = styled.div`
  padding: 8px;
  background: ${({ theme: { grey } }) => grey};
  height: 100vh;
  flex-basis: 88px;
  min-width: ${isAdobe ? '88px' : '0'};
`

const TabContainer = styled.div`
  display: flex;
  height: 100%;
  max-height: 320px;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-between;
`

const ChartsDumb = memo(({ selectChartTab, currentChart, isPro }) => {
  return (
    <Root>
      <TabContainer>
        {navigationTabs.map(({ type, icon }) => (
          <TabButton
            icon={icon}
            type={type}
            key={type}
            isActive={currentChart === type}
            isDisabled={isChartDisabled(isPro, type)}
            selectChartTab={selectChartTab}
          />
        ))}
      </TabContainer>
    </Root>
  )
})

const Charts = connect(
  R.applySpec({ currentChart: getCurrentChart, isPro: getIsPro }),
  {
    selectChartTab: selectChartTabRequest,
  }
)(ChartsDumb)

export default Charts
