import React from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import store from '@app/configureStore'
import CreateChart from '@app/screens/CreateChart'
import { standartTheme } from '@app/styles'
import { interceptClickEvent } from './utils'

// listen for link click events at the document level
document.addEventListener('click', interceptClickEvent)

const CreateChartScreen = () => (
  <Provider store={store}>
    <ThemeProvider theme={standartTheme}>
      <CreateChart />
    </ThemeProvider>
  </Provider>
)

ReactDOM.render(<CreateChartScreen />, document.getElementById('root'))
