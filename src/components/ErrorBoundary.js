import React, {Component} from 'react'

import logger from '../core/log'

export class ErrorBoundary extends Component {
  componentDidCatch(error, errorInfo) {
    logger.warn('Exception caught in React error boundary!', error)

    if (window.Raven) {
      window.Raven.captureException(error, {extra: errorInfo})
    }
  }

  render = () => this.props.children
}

const withError = Component => props => (
  <ErrorBoundary>
    <Component {...props} />
  </ErrorBoundary>
)

export default withError
