import React from 'react'

import {FormContainer, Paper, Row} from './Layout'
import Button from './Button'
import TextArea from './TextArea'
import DesignUpload from './DesignUpload'
import Q3Dev from './Q3Dev'

import withWizard from '../core/form'
import {getMajorFromPath} from '../core/util'

const MajorQuestionForm = ({prev, questions = {}, handleSubmit}) => {
  const major = getMajorFromPath()
  const Q3Field = major === 'design' ? DesignUpload : TextArea
  const Q3 = major === 'programming' ? Q3Dev : questions.Q3

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Paper>
        <TextArea name="majorAnswer1" label={questions.Q1} wordy />
        <TextArea name="majorAnswer2" label={questions.Q2} wordy />
        <Q3Field name="majorAnswer3" label={Q3} wordy />
      </Paper>

      <Row>
        <Button onClick={prev}>ขั้นตอนก่อนหน้า</Button>

        <Button type="submit">ขั้นตอนถัดไป</Button>
      </Row>
    </FormContainer>
  )
}

export default withWizard(MajorQuestionForm)
