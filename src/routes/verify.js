import React from 'react'
import {connect} from 'react-redux'
import styled from 'react-emotion'
import {getFormValues} from 'redux-form'

import Button from '../components/Button'
import Upload from '../components/Upload'
import {Backdrop, Row, Paper} from '../components/Layout'

import questions, {General} from '../core/questions'

import {submit} from '../ducks/submission'

import history from '../core/history'
import {getMajorFromPath} from '../core/util'

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

const Label = styled.strong`
  font-weight: bold;
`

const Paragraph = styled.p`
  margin-top: 0.6em;

  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
`

const Section = ({data, title, fields}) => (
  <Card>
    <Title>{title}</Title>

    {fields.map(([name, label]) => (
      <Item key={name}>
        <Label>{label}:</Label> {data[name]}
      </Item>
    ))}
  </Card>
)

const GeneralSection = ({data}) => (
  <Card>
    <Title>คำถามทั่วไป</Title>
    <Item>
      <Label>{General.Q1}:</Label>

      <Paragraph>{data.generalAnswer1}</Paragraph>
    </Item>

    <Item>
      <Label>{General.Q2}:</Label>

      <Paragraph>{data.generalAnswer2}</Paragraph>
    </Item>

    <Item>
      <Label>{General.Q3}:</Label>

      <Paragraph>{data.generalAnswer3}</Paragraph>
    </Item>
  </Card>
)

const MajorSection = ({major = 'general', data}) => {
  const {Q1, Q2, Q3} = questions[major]

  return (
    <Card>
      <Title>คำถามสาขา</Title>
      <Item>
        <Label>{Q1}:</Label>

        <Paragraph>{data.majorAnswer1}</Paragraph>
      </Item>

      <Item>
        <Label>{Q2}:</Label>

        <Paragraph>{data.majorAnswer2}</Paragraph>
      </Item>

      <Item>
        <Label>{Q3}:</Label>

        <Paragraph>{data.majorAnswer3}</Paragraph>
      </Item>
    </Card>
  )
}

const prev = () => {
  const major = getMajorFromPath()

  history.push(`/${major}/step4`)
}

const StepOne = ({data = {}, major, submit}) => (
  <Backdrop>
    <Container>
      <Upload />
      <Section title="ข้อมูลส่วนตัว" fields={personalFields} data={data} />
      <Section title="ข้อมูลผู้ปกครอง" fields={parentFields} data={data} />
      <GeneralSection fields={personalFields} data={data} />
      <MajorSection major={major} data={data} />

      <Row>
        <Button onClick={prev}>ย้อนกลับไปแก้ไข</Button>

        <Button onClick={submit}>ยืนยันการสมัครเข้าค่าย JWC</Button>
      </Row>
    </Container>
  </Backdrop>
)

const mapStateToProps = state => ({
  data: getFormValues('submission')(state) || state.camper,
  major: state.camper.major,
})

const enhance = connect(mapStateToProps, {submit})

export default enhance(StepOne)
