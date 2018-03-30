import React from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import {compose} from 'recompose'

import {prev} from '../ducks/submission'

import {FormContainer, Paper, Row} from './Layout'
import Button from './Button'
import TextInput from './Input'

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

const mapStateToProps = state => ({
  initialValues: state.camper,
})

const enhance = compose(
  connect(mapStateToProps, {prev}),
  reduxForm({
    form: 'submission',
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  }),
)

export default enhance(ParentalForm)
