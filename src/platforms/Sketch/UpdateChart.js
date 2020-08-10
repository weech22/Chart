import React from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import store from '@app/configureStore'
import UpdateChart from '@app/screens/UpdateChart'
import { standartTheme } from '@app/styles'

const UpdateChartScreen = () => (
  <Provider store={store}>
    <ThemeProvider theme={standartTheme}>
      <UpdateChart />
    </ThemeProvider>
  </Provider>
)

ReactDOM.render(<UpdateChartScreen />, document.getElementById('root'))
