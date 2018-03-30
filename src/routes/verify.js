import React from 'react'
import {connect} from 'react-redux'
import styled from 'react-emotion'
import {getFormValues} from 'redux-form'

import Button from '../components/Button'

import questions, {General} from '../core/questions'
import {Backdrop, Row, Paper} from '../components/Layout'

import {submit} from '../ducks/submission'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 980px;

  padding: 0 2.2em;

  @media screen and (max-width: 480px) {
    padding: 0 1.2em;
  }
`

const Title = styled.h1``

const personalFields = Object.entries({
  firstname: 'ชื่อ',
  lastname: 'นามสกุล',
  age: 'อายุ',
  birthdate: 'วันเกิด',
  religion: 'ศาสนา',
  class: 'ระดับชั้น',
  school: 'โรงเรียน',
  address: 'ที่อยู่',
  phone: 'เบอร์โทรศัพท์',
  email: 'อีเมล',
  socialMedia: 'Social Media ต่างๆ',
  disease: 'โรคประจำตัว',
  foodAllergy: 'อาหารที่แพ้',
  drugAllergy: 'ยาที่แพ้',
  shirtSize: 'ขนาดเสื้อ',
  activity: 'กิจกรรมหรือผลงานที่น้องๆ เคยทำหรือเข้าร่วม',
})

const parentFields = Object.entries({
  parentFirstName: 'ชื่อผู้ปกครอง',
  parentLastName: 'นามสกุลผู้ปกครอง',
  parentRelation: 'ความสัมพันธ์',
  parentPhone: 'เบอร์โทรศัพท์',
})

const Card = styled(Paper)`
  align-items: flex-start;
  justify-content: flex-start;
`

const Item = styled.div`
  color: #333;
  font-size: 1.12em;
  line-height: 1.8em;
`

const Section = ({data, title, fields}) => (
  <Card>
    <Title>{title}</Title>

    {fields.map(([name, label]) => (
      <Item key={name}>
        {label}: {data[name]}
      </Item>
    ))}
  </Card>
)

const GeneralSection = ({data}) => (
  <Card>
    <Title>คำถามทั่วไป</Title>

    <Item>
      {General.Q1}: {data.generalAnswer1}
    </Item>
    <Item>
      {General.Q2}: {data.generalAnswer2}
    </Item>
    <Item>
      {General.Q3}: {data.generalAnswer3}
    </Item>
  </Card>
)

const MajorSection = ({major, data}) => {
  const {Q1, Q2, Q3} = questions[major]

  return (
    <Card>
      <Title>คำถามสาขา</Title>
      <Item>
        {Q1}: {data.majorAnswer1}
      </Item>
      <Item>
        {Q2}: {data.majorAnswer2}
      </Item>
      <Item>
        {Q3}: {data.majorAnswer3}
      </Item>
    </Card>
  )
}

const StepOne = ({data, camper}) => (
  <Backdrop>
    <Container>
      <Section title="ข้อมูลส่วนตัว" fields={personalFields} data={data} />
      <Section title="ข้อมูลผู้ปกครอง" fields={parentFields} data={data} />
      <GeneralSection fields={personalFields} data={data} />
      <MajorSection major={camper.major} data={data} />

      <Row>
        <Button>ยืนยันการสมัครเข้าค่าย JWC</Button>
      </Row>
    </Container>
  </Backdrop>
)

const mapStateToProps = state => ({
  data: getFormValues('submission')(state),
  camper: state.camper,
})

const enhance = connect(mapStateToProps, {submit})

export default enhance(StepOne)
