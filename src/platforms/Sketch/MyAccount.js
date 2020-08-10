import React from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import store from '@app/configureStore'
import MyAccount from '@app/screens/MyAccount'
import { standartTheme } from '@app/styles'

const MyAccountScreen = () => (
  <Provider store={store}>
    <ThemeProvider theme={standartTheme}>
      <MyAccount />
    </ThemeProvider>
  </Provider>
)

ReactDOM.render(<MyAccountScreen />, document.getElementById('root'))
