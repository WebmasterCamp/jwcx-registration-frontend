import React from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {compose} from 'recompose'
import styled from 'react-emotion'

import Input from '../../components/Input'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`

const TextInput = props => <Field component={Input} {...props} />

const StepOneForm = ({handleSubmit}) => (
  <FormContainer onSubmit={handleSubmit}>
    <Row>
      <TextInput name="firstname" label="ชื่อ" />
      <TextInput name="lastname" label="นามสกุล" />
    </Row>

    <Row>
      <TextInput name="age" label="อายุ" />
      <TextInput name="birthdate" label="วันเกิด" />
      <TextInput name="religion" label="ศาสนา" />
    </Row>

    <Row>
      <TextInput name="class" label="ระดับชั้น" />
      <TextInput name="school" label="โรงเรียน" />
    </Row>

    <Row>
      <TextInput name="address" label="ที่อยู่" />
      <TextInput name="number" label="เบอร์โทรศัพท์" />
    </Row>

    <Row>
      <TextInput name="email" label="อีเมล" />
      <TextInput name="socialMedia" label="Social Media" />
    </Row>

    <Row>
      <TextInput name="disease" label="โรคประจำตัว" />
      <TextInput name="foodAllergy" label="อาหารที่แพ้" />
      <TextInput name="drugAllergy" label="ยาที่แพ้" />
      <TextInput name="shirtSize" label="ไซส์เสื้อ" />
    </Row>

    <Row>
      <textarea
        name="activity"
        label="กิจกรรมหรือผลงานที่น้องๆ เคยทำหรือเข้าร่วม"
      />
    </Row>
  </FormContainer>
)

const mapStateToProps = state => ({})

const enhance = compose(connect(mapStateToProps), reduxForm({form: 'personal'}))

export default enhance(StepOneForm)
