import React, { Component } from 'react'
import { Form, Icon, Upload } from 'antd';

import { FormContainer, FormItem, NavigationButton, Row } from './Form'

class Step1Form extends Component {
  constructor(props) {
    super()

    this.state = {
      fileList: [],
      uploadList:[]
    }
  }

  handleSubmit = (e) => {
    const { fileList } = this.state
    const { form, onSubmit } = this.props

    e.preventDefault()
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (fileList.length > 0) {
          const image = this.getUploadImage()
          values.image = image
          onSubmit(values)
        } else {
          onSubmit(values)
        }
      }
    })
  }

  getUploadImage() {
    const { fileList, uploadList } = this.state

    return uploadList[fileList[0].uid]
  }

  handleChangeImage = ({ fileList }) => {
    this.setState({ fileList })
  }

  handleUploadImage = (file) => {
    const uploadList = this.state.uploadList
    uploadList[file.uid] = file
    
    this.setState({ uploadList })
  }

  render() {
    const { form: { getFieldDecorator }, width } = this.props
    const { fileList } = this.state
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    )

    return (
      <FormContainer width={width}>
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onChange={this.handleChangeImage}
          beforeUpload={this.handleUploadImage}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Row>
          <FormItem label={'ชื่อ'} field={'name'} message={'กรุณากรอกชื่อ'} getFieldDecorator={getFieldDecorator} />
          <FormItem label={'นามสกุล'} field={'lastname'} message={'กรุณากรอกนามสกุล'} getFieldDecorator={getFieldDecorator} />
        </Row>
        <Row>
          <FormItem label={'อายุ'} field={'age'} message={'กรุณากรอกอายุ'} getFieldDecorator={getFieldDecorator} />
          <FormItem label={'ว/ด/ป'} field={'birthdate'} message={'กรุณากรอกวันเกิด'} getFieldDecorator={getFieldDecorator} date />
          <FormItem label={'ศาสนา'} field={'religion'} message={'กรุณาเลือกศาสนา'} getFieldDecorator={getFieldDecorator} />
        </Row>
        <Row>
          <FormItem label={'ระดับชั้น'} field={'class'} message={'กรุณาเลือกระดับชั้น'} getFieldDecorator={getFieldDecorator} />
          <FormItem label={'โรงเรียน'} field={'school'} message={'กรุณากรอกโรงเรียน'} getFieldDecorator={getFieldDecorator} />
        </Row>
        <FormItem label={'ที่อยู่'} field={'address'} message={'กรุณากรอกที่อยู่'} getFieldDecorator={getFieldDecorator} textarea />
        <Row>
          <FormItem label={'เบอร์โทร'} field={'number'} message={'กรุณากรอกเบอร์โทร'} getFieldDecorator={getFieldDecorator} />
          <FormItem label={'อีเมล์'} field={'email'} message={'กรุณากรอกอีเมล์'} getFieldDecorator={getFieldDecorator} />
          <FormItem label={'Social Media ต่างๆ'} field={'social-media'} getFieldDecorator={getFieldDecorator} required={false} textarea />
        </Row>
        <Row>
          <FormItem label={'โรคประจำตัว'} field={'disease'} getFieldDecorator={getFieldDecorator} required={false} />
          <FormItem label={'อาหารที่แพ้'} field={'allergy-food'}  getFieldDecorator={getFieldDecorator} required={false} />
          <FormItem label={'ยาที่แพ้'} field={'allergy-medicine'} getFieldDecorator={getFieldDecorator} required={false} />
        </Row>
        <FormItem label={'ไซส์เสื้อ'} field={'shirt-size'} message={'กรุณาเลือกไซส์เสื้อ'} getFieldDecorator={getFieldDecorator} />
        <FormItem label={'กิจกรรมหรือผลงานที่น้องๆ เคยทำ หรือเคยเข้าร่วม'} field={'activity'} getFieldDecorator={getFieldDecorator} required={false} textarea />
        <NavigationButton onSubmit={this.handleSubmit} />
      </FormContainer>
    )
  }
}

const WrappedForm = Form.create()(Step1Form)

export default (props) => {
  return <WrappedForm {...props} />
}