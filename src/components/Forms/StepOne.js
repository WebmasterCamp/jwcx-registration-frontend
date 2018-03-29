import React from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {compose} from 'recompose'
import styled from 'react-emotion'
import {TextField} from 'redux-form-antd'

// import Input from '../../components/Input'

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`

const TextInput = props => (
  <Field component={TextField} placeholder={props.label} {...props} />
)

const StepOneForm = ({handleSubmit}) => (
  <FormContainer onSubmit={handleSubmit}>
    <TextInput name="firstname" label="ชื่อ" />
    <TextInput name="lastname" label="นามสกุล" />

    <TextInput name="age" label="อายุ" />
    <TextInput name="birthdate" label="วันเกิด" />
    <TextInput name="religion" label="ศาสนา" />

    <TextInput name="class" label="ระดับชั้น" />
    <TextInput name="school" label="โรงเรียน" />

    <TextInput name="address" label="ที่อยู่" />
    <TextInput name="number" label="เบอร์โทรศัพท์" />
    <TextInput name="email" label="อีเมล" />
    <TextInput name="socialMedia" label="Social Media" />

    <TextInput name="disease" label="โรคประจำตัว" />
    <TextInput name="foodAllergy" label="อาหารที่แพ้" />
    <TextInput name="drugAllergy" label="ยาที่แพ้" />

    <TextInput name="shirtSize" label="ไซส์เสื้อ" />

    <TextInput
      name="activity"
      label="กิจกรรมหรือผลงานที่น้องๆ เคยทำหรือเข้าร่วม"
    />
  </FormContainer>
)

const mapStateToProps = state => ({})

const enhance = compose(connect(mapStateToProps), reduxForm({form: 'personal'}))

export default enhance(StepOneForm)
