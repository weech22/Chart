import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { uiScreens } from './constants'
import {
  CreateChart,
  UpdateChart,
  EditChart,
  Templates,
  MyAccount,
} from '@app/screens'

const Navigator = ({ currentUIScreen }) => {
  switch (currentUIScreen) {
    case uiScreens.CREATE_CHART:
      return <CreateChart />
    case uiScreens.UPDATE_CHART:
      return <UpdateChart />
    case uiScreens.EDIT_CHART:
      return <EditChart />
    case uiScreens.TEMPLATES:
      return <Templates />
    case uiScreens.MY_ACCOUNT:
      return <MyAccount />
    default:
      return <div /> // TODO: Preloader
  }
}

const mapStateToProps = (state) => ({
  currentUIScreen: state.figma.currentUIScreen,
})

export default connect(mapStateToProps)(Navigator)
