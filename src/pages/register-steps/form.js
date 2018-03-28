import React from 'react'
import styled, { css } from 'styled-components'
import { Form, Input, Select, DatePicker, Button } from 'antd'

const cssFontInput = css`
  font-family: RSU;
  font-size: 20px;
  color: #ffffff;
`

const cssGhostButton = css`
  ${cssFontInput};
  background-color: transparent !important;
  color: #ffffff;
  border-radius: 4px;
  border-width: 2px solid #ffffff !important;
  text-decoration: none;
  min-width: 100px;
  margin-bottom: 8px;
  padding-top: 6px;
`
const cssNormalButton = css`
  ${cssFontInput};
  background-color: #ffffff !important;
  color: #5e4a88;
  border-radius: 4px;
  border-width: 0px;
  text-decoration: none;
  min-width: 100px;
  margin-bottom: 8px;
  padding-top: 6px;
`
const NavigationContainer = styled.div`
  display: flex;
`
const FormButton = styled(Button)`
  ${props => props.ghost? cssGhostButton: cssNormalButton}
`
export const NavigationButton = ({ onSubmit, onBackStep, last }) => {
  return (
    <NavigationContainer>
      {onBackStep && <FormButton ghost onClick={onBackStep}>{'ย้อนกลับ'}</FormButton>}
      <FormButton onClick={onSubmit}>{ !last? 'ต่อไป': 'ตกลง'}</FormButton>
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
  .ant-row {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 40px;
  }

  .ant-upload, .ant-upload-list-item {
    ${cssFontInput};
    margin-right: 0;
    margin-bottom: 0;
    background-color: #1c6688;
    border: 1px solid #1c6688;
    min-height: 170px;
    min-width: 130px;
  }

  .ant-form-item-label {
    width: 100%;
    text-align: left;
    line-height: 20px;
    margin-left: 5px;
    
    label {
      ${cssFontInput};
      margin-bottom: 0;
      &::before, &::after {
        display: none;
      }
    }
  }

  .ant-input {
    ${cssFontInput};
    background-color: #1c6688;
    border-width: 0px;
    height: 40px;
  }

  .ant-form-item-control-wrapper, .ant-calendar-picker {
    width: 100%;

    textarea {
      min-height: ${props => props.step3? 200: 100}px;
    }
  }

  .ant-calendar-picker-icon:after {
    color: #fff;
  }

  .has-error .ant-form-explain {
    color: rgba(241, 220, 220, 0.37);
  }
  
  ${Row} {
    ${props => props.small && 'flex-direction: column;'}
    .ant-row:last-child {
      margin-right: 0px ;
    }
  }
`
export const FormContainer = ({ children, width, step3 }) => {
  return (
    <FormContainerWrapper step3={step3} small={width < 800}>
      <Form>{children}</Form>
    </FormContainerWrapper>
  )
}