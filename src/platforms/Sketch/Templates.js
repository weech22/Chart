import React from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import store from '@app/configureStore'
import Templates from '@app/screens/Templates'
import { standartTheme } from '@app/styles'

const TemplatesScreen = () => (
  <Provider store={store}>
    <ThemeProvider theme={standartTheme}>
      <Templates />
    </ThemeProvider>
  </Provider>
)

ReactDOM.render(<TemplatesScreen />, document.getElementById('root'))
