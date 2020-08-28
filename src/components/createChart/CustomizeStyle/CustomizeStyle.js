import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

import TabMenu from './TabMenu'
import { Title, Dropdown, Footer, Link } from '@components/common'
import { charts, forms } from '@app/constants'
import { isAdobe, afs } from '@app/utils'
import {
  getCurrentChart,
  stopCustomizeStyle,
  getIsColorPickerShowing,
} from '@modules/createChart'

import { fetchTemplatesRequest } from '@modules/templates'

import { getTemplateList } from '@modules/templates'
import { ColorPickerModal } from '@components/common/ColorList'

const Root = styled.div`
  background: ${({ theme: { white } }) => white};
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

const Container = styled.div`
  flex: 1;
  height: ${afs('auto', 'auto', '85%')};
`

const StyledDropdown = styled(Dropdown)`
  margin: 24px 0 16px 16px;
  width: 50%;
`

const StyledTitle = styled(Title)`
  font-size: 20px;
  padding: ${isAdobe ? '10px 7px 0 16px' : '16px 16px 0 16px'};
`

// TODO: Move all text to config
const message =
  'Template is an easy way to save styles of your charts once and use it everywhere. '

const howTo = 'How to use style template?'

const message2 = 'To edit styles of this specific chart, select an option '

const MessageBlock = styled.div`
  margin-top: 16px;
  font-size: 14px;
  padding: 0 16px;
`

const Bold = styled.span`
  font-weight: bold;
`

const CustomizeStyleDumb = ({
  currentChart,
  stopCustomizeStyle,
  templates,
  isColorPickerShowing,
  fetchTemplatesRequest,
  submitForm,
}) => {
  const [currentTemplateId, chooseTemplate] = useState(0)

  useEffect(() => {
    fetchTemplatesRequest()
  }, [])

  const footerControls = {
    mainButton: {
      onClick: stopCustomizeStyle, // TODO: submitForm,
      caption: 'Use this style',
    },
  }

  const handleChange = (templateId) => {
    if (templateId) {
      chooseTemplate(+templateId)
    } else {
      chooseTemplate(templateId)
    }
  }

  return (
    <Root>
      <Container>
        {isColorPickerShowing && <ColorPickerModal />}
        <StyledTitle onClose={stopCustomizeStyle}>
          Style: {charts[currentChart].title}
        </StyledTitle>
        <StyledDropdown
          label='Style template'
          options={[...templates, { label: 'Without template', value: -1 }]}
          input={{
            onChange: handleChange,
            value: currentTemplateId,
          }}
        />
        {currentTemplateId === -1 ? (
          <TabMenu />
        ) : (
          <Fragment>
            <MessageBlock>
              {message}
              <Link>{howTo}</Link>
            </MessageBlock>
            <MessageBlock>
              {message2}
              <Bold>without template</Bold>.
            </MessageBlock>
          </Fragment>
        )}
      </Container>
      <Footer controls={footerControls} />
    </Root>
  )
}

const CustomizeStyle = connect(
  R.applySpec({
    currentChart: getCurrentChart,
    templates: getTemplateList,
    isColorPickerShowing: getIsColorPickerShowing,
  }),
  {
    stopCustomizeStyle,
    fetchTemplatesRequest,
    submitForm: () => submit(forms.CUSTOM_STYLE),
  }
)(CustomizeStyleDumb)

export default CustomizeStyle
