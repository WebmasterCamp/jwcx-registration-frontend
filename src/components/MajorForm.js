import React from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import {compose} from 'recompose'

import {FormContainer, Paper, Row} from './Layout'
import Button from './Button'
import TextArea from './TextArea'

import formOptions from '../core/form'

import {prev} from '../ducks/submission'

const MajorQuestionForm = ({prev, questions = {}, handleSubmit}) => (
  <FormContainer onSubmit={handleSubmit}>
    <Paper>
      <TextArea name="majorAnswer1" label={questions.Q1} wordy />
      <TextArea name="majorAnswer2" label={questions.Q2} wordy />
      <TextArea name="majorAnswer3" label={questions.Q3} wordy />
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
  reduxForm(formOptions),
)

export default enhance(MajorQuestionForm)
