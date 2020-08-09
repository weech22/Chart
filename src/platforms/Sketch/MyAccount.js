import React from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import store from '../../configureStore'
import MyAccount from '../../screens/MyAccount'
import { standartTheme } from '../../styles'

const MyAccountScreen = () =>
  console.log('render') || (
    <Provider store={store}>
      <ThemeProvider theme={standartTheme}>
        <MyAccount />
      </ThemeProvider>
    </Provider>
  )

ReactDOM.render(<MyAccountScreen />, document.getElementById('root'))
