import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'
import * as R from 'ramda'
import { CSSTransitionGroup } from 'react-transition-group'

import { Title, Footer } from '@components/common'
import { hideColorPicker, getCurrentlyEditedColor } from '@modules/createChart'
import ColorPicker from './ColorPicker'
import { isAdobe, afs } from '@app/utils'

const Backdrop = styled.div`
  position: absolute;
  right: ${afs('34px', '0', '0')};
  top: ${afs('35px', '0', '0')};
  bottom: ${afs('44px', '-57px', '-57px')};
  left: ${afs('36px', '-87px', '-88px')};
  overflow: hidden;
  background: rgba(0, 0, 0, 0.8);
  z-index: 5;
`

const slide = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-100%);
}
`

const Root = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  width: 50%;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  z-index: 6;
`

const StyledTitle = styled(Title)`
  font-size: 14px;
  font-weight: bold;
  padding: ${isAdobe ? '8px 7px 0 16px' : '16px 16px 4px 16px'};
`

const ColorPickerModalDumb = ({
  className,
  hideColorPicker,
  currentlyEditedColor: { color, onSaveColor },
}) => {
  const [currentColor, pickColor] = useState({})

  useEffect(() => {
    pickColor(color)
  }, [color])

  useEffect(() => {}, [currentColor])

  const handleChange = ({ hsl }) => {
    pickColor(hsl)
  }

  const handleSave = () => {
    onSaveColor(currentColor)
    hideColorPicker()
  }

  const footerControls = {
    mainButton: {
      onClick: handleSave,
      caption: 'Save color',
    },
  }

  return (
    <Backdrop className={className}>
      <Root>
        <StyledTitle onClose={hideColorPicker}>Color</StyledTitle>
        <ColorPicker color={currentColor} onChange={handleChange} />
        <Footer controls={footerControls} />
      </Root>
    </Backdrop>
  )
}

const ColorPickerModal = connect(
  R.applySpec({ currentlyEditedColor: getCurrentlyEditedColor }),
  { hideColorPicker }
)(ColorPickerModalDumb)

export default ColorPickerModal
