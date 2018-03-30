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

const requiredFields = [
  ...personalFields,
  ...parentFields,
  ...generalQuestionFields,
  ...majorQuestionFields,
]

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const phoneRegex = /^\d{10}$/

function validate(values) {
  const errors = {}

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'กรุณาระบุข้อมูลดังกล่าว'
    }
  })

  if (!emailRegex.test(values.email)) {
    errors.email = 'ที่อยู่อีเมลไม่ถูกต้อง'
  }

  if (!phoneRegex.test(values.phone)) {
    errors.phone = 'เบอร์โทรศัพท์ไม่ถูกต้อง'
  }

  if (isNaN(parseInt(values.age))) {
    errors.age = 'รูปแบบอายุไม่่ถูกต้อง'
  }

  return errors
}

const options = {
  form: 'submission',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
}

export default options
