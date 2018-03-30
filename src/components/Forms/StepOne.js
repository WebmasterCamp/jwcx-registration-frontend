import React from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {compose} from 'recompose'
import styled from 'react-emotion'

import Input from '../../components/Input'
import TextAreaInput from '../../components/TextArea'

const FormContainer = styled.form`
  width: 100%;
  margin: 0 auto;
  max-width: 980px;
`

const Paper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  padding: 1.8em 2.2em;
  margin-bottom: 3.2em;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 3px 18.5px 2px rgba(0, 0, 0, 0.18);

  width: 100%;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100%;
`

const TextInput = props => <Field component={Input} {...props} />
const TextArea = props => <Field component={TextAreaInput} {...props} />

const StepOneForm = ({handleSubmit}) => (
  <FormContainer onSubmit={handleSubmit}>
    <Paper>
      <Row>
        <TextInput name="firstname" label="ชื่อ" />
        <TextInput name="lastname" label="นามสกุล" />
      </Row>

      <Row>
        <TextInput name="age" label="อายุ" type="number" />
        <TextInput name="birthdate" label="วันเกิด" />
        <TextInput name="religion" label="ศาสนา" />
      </Row>
    </Paper>

    <Paper>
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
    </Paper>

    <Paper>
      <Row>
        <TextInput name="disease" label="โรคประจำตัว" />
      </Row>

      <Row>
        <TextInput name="foodAllergy" label="อาหารที่แพ้" />
      </Row>

      <Row>
        <TextInput name="drugAllergy" label="ยาที่แพ้" />
      </Row>
    </Paper>

    <Paper>
      <Row>
        <TextInput name="shirtSize" label="ไซส์เสื้อ" />
      </Row>

      <Row>
        <TextArea
          name="activity"
          label="กิจกรรมหรือผลงานที่น้องๆ เคยทำหรือเข้าร่วม"
        />
      </Row>
    </Paper>
  </FormContainer>
)

const mapStateToProps = state => ({})

const enhance = compose(connect(mapStateToProps), reduxForm({form: 'personal'}))

export default enhance(StepOneForm)
