import React, { Component } from 'react'
import styled from 'styled-components'

import Step1 from './register-steps/Step1'
import Step2 from './register-steps/Step2'
import Step3 from './register-steps/Step3'

const Container = styled.div`
  max-width: 800px;
  margin: auto;
`

class Register extends Component {
  constructor(props) {
    super()
    
    this.state = {
      step: 1,
      data: {}
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  handleUpdateStep = (step) => () => {
    this.setState({ step: step < 0? 0: step })
  }

  handleSubmit = (newData) => {
    const { step, data } = this.state

    console.log(`Step: ${step} ;`, 'submit data:', data)

    const updateData = { ...data, ...newData }
    this.setState({ data: updateData })

    if (step < 2) {
      this.setState({ step: step + 1 })
    }
  }

  renderStep() {
    const { step, width } = this.state

    if (step === 0) {
      return <Step1 onSubmit={this.handleSubmit} width={width} />
    } else if (step === 1) {
      return <Step2 onBackStep={this.handleUpdateStep(step - 1)} onSubmit={this.handleSubmit} width={width} />
    } else if (step === 2) {
      return <Step3 onBackStep={this.handleUpdateStep(step - 1)} onSubmit={this.handleSubmit} width={width} />
    }

    return <Step1 />
  }

  render() {
    return (
      <Container>
        {this.renderStep()}
      </Container>
    )
  }
}

export default Register