import React, { Component } from 'react'
import { Form, Input, Icon, Cascader, Select, Button } from 'antd';
import styled from 'styled-components'

import { FormItem } from './Form'

const Row = styled.div`
  display: flex;
`

class Step1Form extends Component {
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
    const { getFieldDecorator } = this.props.form
  
    return (
      <Form>
        <Row>
          <FormItem label={'ชื่อ'} field={'name'} message={'กรุณากรอกชื่อ'} getFieldDecorator={getFieldDecorator} />
          <FormItem label={'นามสกุล'} field={'lastname'} message={'กรุณากรอกนามสกุล'} getFieldDecorator={getFieldDecorator} />
        </Row>
        <Row>
          <FormItem label={'อายุ'} field={'age'} message={'กรุณากรอกอายุ'} getFieldDecorator={getFieldDecorator} />
          <FormItem label={'ว/ด/ป'} field={'birthdate'} message={'กรุณากรอกวันเกิด'} getFieldDecorator={getFieldDecorator} />
          <FormItem label={'ศาสนา'} field={'religion'} message={'กรุณาเลือกศาสนา'} getFieldDecorator={getFieldDecorator} />
        </Row>
        <Row>
          <FormItem label={'ระดับชั้น'} field={'class'} message={'กรุณาเลือกระดับชั้น'} getFieldDecorator={getFieldDecorator} />
          <FormItem label={'โรงเรียน'} field={'school'} message={'กรุณากรอกโรงเรียน'} getFieldDecorator={getFieldDecorator} />
        </Row>
        <FormItem label={'ที่อยู่'} field={'address'} message={'กรุณากรอกที่อยู่'} getFieldDecorator={getFieldDecorator} />
        <Row>
          <FormItem label={'เบอร์โทร'} field={'number'} message={'กรุณากรอกเบอร์โทร'} getFieldDecorator={getFieldDecorator} />
          <FormItem label={'อีเมล์'} field={'email'} message={'กรุณากรอกอีเมล์'} getFieldDecorator={getFieldDecorator} />
          <FormItem label={'Social Media ต่างๆ'} field={'social-media'} getFieldDecorator={getFieldDecorator} required={false} />
        </Row>
        <Row>
          <FormItem label={'โรคประจำตัว'} field={'disease'} getFieldDecorator={getFieldDecorator} required={false} />
          <FormItem label={'อาหารที่แพ้'} field={'allergy-food'}  getFieldDecorator={getFieldDecorator} required={false} />
          <FormItem label={'ยาที่แพ้'} field={'allergy-medicine'} getFieldDecorator={getFieldDecorator} required={false} />
        </Row>
        <FormItem label={'ไซส์เสื้อ'} field={'shirt-size'} message={'กรุณาเลือกไซส์เสื้อ'} getFieldDecorator={getFieldDecorator} />
        <FormItem label={'กิจกรรมหรือผลงานที่น้องๆ เคยทำ หรือเคยเข้าร่วม'} field={'activity'} getFieldDecorator={getFieldDecorator} required={false} />
        <Button onClick={this.handleSubmit}>ต่อไป</Button>
      </Form>
    )
  }
}

const WrappedForm = Form.create()(Step1Form);

export default (props) => {
  return <WrappedForm {...props} />
}