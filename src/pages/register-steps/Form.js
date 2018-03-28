import React from 'react'
import styled from 'styled-components'
import { Form, Input, Select,  } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

export const FormItem = ({ getFieldDecorator, label, message, field, required = true }) => {
  return (
    <Form.Item
      {...formItemLayout}
      label={label}
    >
      {getFieldDecorator(field, {
        rules: [{ required, message }],
      })(
        <Input />
      )}
    </Form.Item>
  )
}