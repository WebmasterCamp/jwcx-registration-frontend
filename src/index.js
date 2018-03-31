import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import App from './components/App'

import analytics from './core/analytics'

if (typeof document !== 'undefined') {
  analytics()

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

export default App
