import React from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import {compose} from 'recompose'

import {FormContainer, Paper, Row} from './Layout'
import Button from './Button'
import TextArea from './TextArea'

const Q1 = `1. ทำไมน้องถึงเลือกสมัครเข้ามาในสาขานี้ และในอีก 10 ปีข้างหน้า น้องจินตนาการภาพที่ตนเองได้ทำงานในสาขาที่เลือกว่าเป็นอย่างไร`
const Q2 = `2. ถ้าน้องๆ ย้อนเวลากลับไปอยู่ยุคกรีก น้องๆ อยากให้ยุคนั้นมีเว็บไซต์อะไร เพราะอะไร`
const Q3 = `3. สมมุติว่าน้องได้รับมอบหมายให้รับผิดชอบงานกลุ่ม แล้วมีเพื่อนสนิทที่อยู่ในกลุ่มไม่เคยมาช่วยทำงานเลย พอน้องไปถามเพื่อน ก็พบว่าเพื่อนต้องช่วยแบ่งเบาภาระที่บ้านทุกวัน น้องจะรู้สึกอย่างไรและจะแก้ปัญหานี้อย่างไร เพื่อให้เพื่อนคนนั้นยังได้ทำงานและอยู่ในกลุ่มได้`

const QuestionForm = ({handleSubmit}) => (
  <FormContainer onSubmit={handleSubmit}>
    <Paper>
      <TextArea name="answer1" label={Q1} wordy />
      <TextArea name="answer2" label={Q2} wordy />
      <TextArea name="answer3" label={Q3} wordy />
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
  reduxForm({form: 'question', destroyOnUnmount: false}),
)

export default enhance(QuestionForm)
