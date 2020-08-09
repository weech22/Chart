import React from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import store from '../../configureStore'
import Templates from '../../screens/Templates'
import { standartTheme } from '../../styles'

const TemplatesScreen = () =>
  console.log('render') || (
    <Provider store={store}>
      <ThemeProvider theme={standartTheme}>
        <Templates />
      </ThemeProvider>
    </Provider>
  )

ReactDOM.render(<TemplatesScreen />, document.getElementById('root'))
