import React from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import {compose} from 'recompose'

import {FormContainer, Paper, Row} from './Layout'
import Button from './Button'
import TextArea from './TextArea'

import {General} from '../core/questions'
import {prev} from '../ducks/submission'

const QuestionForm = ({prev, handleSubmit}) => (
  <FormContainer onSubmit={handleSubmit}>
    <Paper>
      <TextArea name="generalAnswer1" label={General.Q1} wordy />
      <TextArea name="generalAnswer2" label={General.Q2} wordy />
      <TextArea name="generalAnswer3" label={General.Q3} wordy />
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

export default enhance(QuestionForm)
