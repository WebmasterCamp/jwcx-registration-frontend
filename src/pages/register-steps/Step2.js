import React, { Component } from 'react'
import { Form, Input, Icon, Cascader, Select, Button } from 'antd';
import styled from 'styled-components'

import { FormItem } from './Form'

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
      <Form>
        <Row>
          <FormItem label={'ชื่อ'} field={'name'} message={'กรุณากรอกชื่อ'} getFieldDecorator={getFieldDecorator} />
          <FormItem label={'นามสกุล'} field={'lastname'} message={'กรุณากรอกนามสกุล'} getFieldDecorator={getFieldDecorator} />
        </Row>
        <Row>
          <FormItem label={'ความเกี่ยวข้อง'} field={'relation'} message={'กรุณากรอกความเกี่ยวข้อง'} getFieldDecorator={getFieldDecorator} />
          <FormItem label={'เบอร์โทร'} field={'number'} message={'กรุณากรอกเบอร์โทร'} getFieldDecorator={getFieldDecorator} />
        </Row>
        <Button onClick={onBackStep}>ย้อนกลับ</Button>
        <Button onClick={this.handleSubmit}>ต่อไป</Button>
      </Form>
    )
  }
}

const WrappedForm = Form.create()(Step2Form);

export default (props) => {
  return <WrappedForm {...props} />
}