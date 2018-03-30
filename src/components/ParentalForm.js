import React from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import {compose} from 'recompose'

import {FormContainer, Paper, Row} from './Layout'
import Button from './Button'
import TextInput from './Input'

const ParentalForm = ({handleSubmit}) => (
  <FormContainer onSubmit={handleSubmit}>
    <Paper>
      <Row>
        <TextInput name="firstname" label="ชื่อผู้ปกครอง" />
        <TextInput name="lastname" label="นามสกุล" />
      </Row>
    </Paper>

    <Paper>
      <Row>
        <TextInput name="relation" label="ความเกี่ยวข้อง" />
        <TextInput name="phone" label="เบอร์โทรศัพท์" />
      </Row>
    </Paper>

    <Row>
      <Button>ขั้นตอนก่อนหน้า</Button>

      <Button type="submit">ขั้นตอนถัดไป</Button>
    </Row>
  </FormContainer>
)

const mapStateToProps = state => ({
  initialValues: {},
})

const enhance = compose(
  connect(mapStateToProps),
  reduxForm({form: 'parental', destroyOnUnmount: false}),
)

export default enhance(ParentalForm)
