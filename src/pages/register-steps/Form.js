import React from 'react'
import styled from 'styled-components'
import { Form, Input, Select, DatePicker, Button } from 'antd'

const NavigationContainer = styled.div`
  display: flex;
`
export const NavigationButton = ({ onSubmit, onBackStep, last }) => {
  return (
    <NavigationContainer>
      {onBackStep && <Button onClick={onBackStep}>{'ย้อนกลับ'}</Button>}
      <Button onClick={onSubmit}>{ !last? 'ต่อไป': 'ตกลง'}</Button>
    </NavigationContainer>
  )
}

export const Row = styled.div`
  display: flex;
`

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

const getInputItem = ({ date, textarea, options }) => {
  if (date) {
    return <DatePicker placeholder='' />
  } else if (textarea) {
    return <Input.TextArea row={4} />
  } else if (options) {
    return (
      <Select>
        { options.map((s) => {
          return <Select.Option value={s.value}>{s.label}</Select.Option>
        })}
      </Select>
    )
  }

  return <Input />
}

export const FormItem = ({ getFieldDecorator, label, message, field, required = true, ...props }) => {
  return (
    <Form.Item
      {...formItemLayout}
      label={label}
    >
      { getFieldDecorator(field, {
        rules: [{ required: props.date? false: required, message }],
      })(
        getInputItem(props)
      )}
    </Form.Item>
  )
}

const FormContainerWrapper = styled.div`
  // ${Row} {
  //   flex-direction: column;
  // }
`
export const FormContainer = ({ children, width }) => {
  return (
    <FormContainerWrapper>
      <Form>{children}</Form>
    </FormContainerWrapper>
  )
}