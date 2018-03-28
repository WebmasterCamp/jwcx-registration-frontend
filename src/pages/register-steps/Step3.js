import React, { Component } from 'react'
import { Form, Input, Icon, Cascader, Select, Button } from 'antd';
import styled from 'styled-components'

import { FormContainer, FormItem, NavigationButton } from './Form'

const Row = styled.div`
  display: flex;
`

class Step2Form extends Component {
  handleSubmit = (e) => {
    const { form, onSubmit } = this.props

    e.preventDefault()
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        onSubmit(values)
      }
    })
  }

  render() {
    const { form: { getFieldDecorator }, onBackStep } = this.props

    return (
      <FormContainer>
        <FormItem label={'คำถาม1'} field={'1'} message={'กรุณาตอบคำถาม'} getFieldDecorator={getFieldDecorator} textarea />
        <FormItem label={'คำถาม2'} field={'2'} message={'กรุณาตอบคำถาม'} getFieldDecorator={getFieldDecorator} textarea />
        <FormItem label={'คำถาม3'} field={'3'} message={'กรุณาตอบคำถาม'} getFieldDecorator={getFieldDecorator} textarea />
        <NavigationButton onBackStep={onBackStep} onSubmit={this.handleSubmit} last />
      </FormContainer>
    )
  }
}

const WrappedForm = Form.create()(Step2Form);

export default (props) => {
  return <WrappedForm {...props} />
}