import React, { Component } from 'react'
import { Form } from 'antd';

import { FormContainer, FormItem, NavigationButton, Row } from './form'

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
        <Row>
          <FormItem label={'ชื่อ'} field={'parent-name'} message={'กรุณากรอกชื่อ'} getFieldDecorator={getFieldDecorator} />
          <FormItem label={'นามสกุล'} field={'parent-lastname'} message={'กรุณากรอกนามสกุล'} getFieldDecorator={getFieldDecorator} />
        </Row>
        <Row>
          <FormItem label={'ความเกี่ยวข้อง'} field={'parent-relation'} message={'กรุณากรอกความเกี่ยวข้อง'} getFieldDecorator={getFieldDecorator} />
          <FormItem label={'เบอร์โทร'} field={'parent-number'} message={'กรุณากรอกเบอร์โทร'} getFieldDecorator={getFieldDecorator} />
        </Row>
        <NavigationButton onBackStep={onBackStep} onSubmit={this.handleSubmit} />
      </FormContainer>
    )
  }
}

const WrappedForm = Form.create()(Step2Form);

export default (props) => {
  return <WrappedForm {...props} />
}