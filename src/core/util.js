import React, {Component} from 'react'

import majors from './majors'

export function getMajorFromPath() {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname.split('/')[1]

    if (majors.indexOf(path) > -1) {
      return path
    }
  }
}

export function getStepFromPath() {
  if (typeof window !== 'undefined') {
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
