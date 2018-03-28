import React, { Component } from 'react'
import styled from 'styled-components'

import Step1 from './register-steps/Step1'
import Step2 from './register-steps/Step2'
import Step3 from './register-steps/Step3'

class Register extends Component {
  state = {
    step: 0,
    data: {}
  }

  handleUpdateStep = (step) => () => {
    this.setState({ step: step < 0? 0: step })
  }

  handleSubmit = (data) => {
    const { step } = this.state
    console.log('submit data', data)

    if (step < 2) {
      this.setState({ step: step + 1 })
    }
  }

  renderStep() {
    const { step } = this.state

    if (step === 0) {
      return <Step1 onSubmit={this.handleSubmit} />
    } else if (step === 1) {
      return <Step2 onBackStep={this.handleUpdateStep(step - 1)} onSubmit={this.handleSubmit} />
    } else if (step === 2) {
      return <Step3 onSubmit={this.handleSubmit} />
    }

    return <Step1 />
  }

  render() {
    return this.renderStep()
  }
}

export default Register