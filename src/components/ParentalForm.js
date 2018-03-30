import React from 'react'

import {FormContainer, Paper, Row} from './Layout'
import Button from './Button'
import TextInput from './Input'

import withWizard from '../core/form'

const ParentalForm = ({prev, handleSubmit}) => (
  <FormContainer onSubmit={handleSubmit}>
    <Paper>
      <Row>
        <TextInput name="parentFirstName" label="ชื่อผู้ปกครอง" />
        <TextInput name="parentLastName" label="นามสกุล" />
      </Row>
    </Paper>

    <Paper>
      <Row>
        <TextInput name="parentRelation" label="ความเกี่ยวข้อง" />
        <TextInput name="parentPhone" label="เบอร์โทรศัพท์" />
      </Row>
    </Paper>

    <Row>
      <Button onClick={prev}>ขั้นตอนก่อนหน้า</Button>

      <Button type="submit">ขั้นตอนถัดไป</Button>
    </Row>
  </FormContainer>
)

export default withWizard(ParentalForm)
