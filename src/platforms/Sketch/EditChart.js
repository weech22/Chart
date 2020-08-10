import React from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import store from '@app/configureStore'
import EditChart from '@app/screens/EditChart'
import { standartTheme } from '@app/styles'

const EditChartScreen = () => (
  <Provider store={store}>
    <ThemeProvider theme={standartTheme}>
      <EditChart />
    </ThemeProvider>
  </Provider>
)

ReactDOM.render(<EditChartScreen />, document.getElementById('root'))
