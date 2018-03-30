import {message} from 'antd'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import {compose} from 'recompose'

import preventUnsaved from '../components/PreventUnsaved'

import {prev} from '../ducks/submission'

const personalFields = [
  'firstname',
  'lastname',
  'age',
  'birthdate',
  'religion',
  'class',
  'school',
  'address',
  'phone',
  'email',
  'socialMedia',
  'shirtSize',
  'activity',
]

const parentFields = [
  'parentFirstName',
  'parentLastName',
  'parentRelation',
  'parentPhone',
]

const generalQuestionFields = [
  'generalAnswer1',
  'generalAnswer2',
  'generalAnswer3',
]

const majorQuestionFields = ['majorAnswer1', 'majorAnswer2', 'majorAnswer3']

const requiredFields = [...personalFields, ...parentFields]
const questionFields = [...generalQuestionFields, ...majorQuestionFields]

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const phoneRegex = /^\d{10}$/

function validate(values) {
  const errors = {}

  if (!values.photo) {
    errors.photo = 'กรุณาอัพโหลดรูปภาพ'
  }

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'กรุณาระบุข้อมูลดังกล่าว'
    }
  })

  questionFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'กรุณาตอบคำถามดังกล่าว'
    }
  })

  if (!emailRegex.test(values.email)) {
    errors.email = 'ที่อยู่อีเมลไม่ถูกต้อง'
  }

  if (!phoneRegex.test(values.phone)) {
    errors.phone = 'เบอร์โทรศัพท์ไม่ถูกต้อง'
  }

  if (!phoneRegex.test(values.parentPhone)) {
    errors.parentPhone = 'เบอร์โทรศัพท์ไม่ถูกต้อง'
  }

  const age = parseInt(values.age)

  if (isNaN(age)) {
    errors.age = 'รูปแบบอายุไม่่ถูกต้อง'
  }

  if (age < 10 || age > 30) {
    errors.age = 'อายุไม่ถูกต้อง'
  }

  return errors
}

function onSubmitFail(error) {
  message.error('กรุณากรอกข้อมูลให้ครบถ้วน')

  console.warn('Encountered Validation Error:', error)
}

export const formOptions = {
  form: 'submission',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
  onSubmitFail,
}

const mapStateToProps = state => ({
  initialValues: state.camper,
  major: state.camper.major,
})

const enhance = compose(
  connect(mapStateToProps, {prev}),
  reduxForm(formOptions),
  preventUnsaved('submission'),
)

export default enhance
