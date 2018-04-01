import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import App from './components/App'

import analytics from './core/analytics'

function errorHandler(error) {
  if (window.Raven) {
    window.Raven.captureException(error)
  }
}

function initialize() {
  if (typeof document !== 'undefined') {
    analytics()

    window.addEventListener('error', errorHandler)
    window.addEventListener('unhandledrejection', errorHandler)

    const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate

    const render = Component => {
      renderMethod(
        <AppContainer>
          <Component />
        </AppContainer>,
        document.getElementById('root'),
      )
    }

    render(App)

    if (module.hot) {
      module.hot.accept('./components/App', () => {
        render(require('./components/App').default)
      })
    }
  }
}

initialize()

export default App
