import React from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import store from '../../configureStore'
import EditChart from '../../screens/EditChart'
import { standartTheme } from '../../styles'

const EditChartScreen = () =>
  console.log('render') || (
    <Provider store={store}>
      <ThemeProvider theme={standartTheme}>
        <EditChart />
      </ThemeProvider>
    </Provider>
  )

ReactDOM.render(<EditChartScreen />, document.getElementById('root'))
