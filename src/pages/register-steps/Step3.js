import React, { Component } from 'react'
import { Form } from 'antd';

import { FormContainer, FormItem, NavigationButton } from './Form'

class Step2Form extends Component {
  handleSubmit = (e) => {
    const { form, onSubmit } = this.props

    e.preventDefault()
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        onSubmit(values)
      }
    })
  }

  render() {
    const { form: { getFieldDecorator }, onBackStep } = this.props

    return (
      <FormContainer>
        <FormItem label={'คำถาม1'} field={'q1'} message={'กรุณาตอบคำถาม'} getFieldDecorator={getFieldDecorator} textarea />
        <FormItem label={'คำถาม2'} field={'q2'} message={'กรุณาตอบคำถาม'} getFieldDecorator={getFieldDecorator} textarea />
        <FormItem label={'คำถาม3'} field={'q3'} message={'กรุณาตอบคำถาม'} getFieldDecorator={getFieldDecorator} textarea />
        <NavigationButton onBackStep={onBackStep} onSubmit={this.handleSubmit} last />
      </FormContainer>
    )
  }
}

const WrappedForm = Form.create()(Step2Form);

export default (props) => {
  return <WrappedForm {...props} />
}