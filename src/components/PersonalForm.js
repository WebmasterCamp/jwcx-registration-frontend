import React from 'react'
import styled from 'react-emotion'

import {FormContainer, Paper, Row} from './Layout'
import Button from './Button'
import TextInput from './Input'
import TextArea from './TextArea'
import Upload from './Upload'

import withWizard from '../core/form'

const PersonalForm = ({handleSubmit}) => (
  <FormContainer onSubmit={handleSubmit}>
    <Upload />

    <Paper>
      <Row>
        <TextInput name="firstname" label="ชื่อ" />
        <TextInput name="lastname" label="นามสกุล" />
      </Row>

      <Row>
        <TextInput name="age" label="อายุ" type="number" />
        <TextInput name="birthdate" label="วันเกิด" type="date" float />
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
        <TextInput name="phone" label="เบอร์โทรศัพท์" />
      </Row>

      <Row>
        <TextInput name="email" label="อีเมล" type="email" />
        <TextInput name="socialMedia" label="Social Media ต่างๆ" />
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

    <Row alwaysRow>
      <Button disabled>ขั้นตอนก่อนหน้า</Button>

      <Button type="submit">ขั้นตอนถัดไป</Button>
    </Row>
  </FormContainer>
)

export default withWizard(PersonalForm)
