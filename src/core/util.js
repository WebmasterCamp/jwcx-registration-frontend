import React, {Component} from 'react'

import majors from './majors'

const isClient = typeof window !== 'undefined'

export function getMajorFromPath(pathname) {
  if (!pathname) {
    pathname = isClient ? window.location.pathname : '/'
  }

  const path = pathname.split('/')[1]

  if (majors.indexOf(path) > -1) {
    return path
  }
}

export function getStepFromPath() {
  if (isClient) {
    const [_, major, step] = window.location.pathname.match(/\/(\w+)\/step(\d)/)

    if (majors.indexOf(major) > -1) {
      return {major, step: parseInt(step)}
    }
  }
}

export const withFocus = Base =>
  class WrappedInput extends Component {
    focus = () => {
      this.input.focus()
    }

    render() {
      return <Base innerRef={el => (this.input = el)} {...this.props} />
    }
  }
