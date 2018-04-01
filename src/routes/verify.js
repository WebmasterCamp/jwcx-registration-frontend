import React from 'react'
import {connect} from 'react-redux'
import styled, {css} from 'react-emotion'
import {getFormValues} from 'redux-form'
import Image from 'react-medium-image-zoom'

import Button from '../components/Button'
import Upload from '../components/Upload'
import {religions, grades, genders} from '../components/PersonalForm'
import {Backdrop, Row, Paper} from '../components/Layout'
import Q3Dev from '../components/Q3Dev'

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
  gender: 'เพศ',
  religion: 'ศาสนา',
  class: 'ระดับชั้น',
  school: 'โรงเรียน',
  phone: 'เบอร์โทรศัพท์',
  email: 'อีเมล',
  socialMedia: 'Twitter ID',
  address: 'ที่อยู่',
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

function format(name, data) {
  const answer = data[name]

  if (name === 'religion') {
    return religions[answer]
  }

  if (name === 'class') {
    return grades[answer]
  }

  if (name === 'gender') {
    return genders[answer]
  }

  if (answer) {
    return answer
  }

  return '-'
}

const Section = ({data, title, fields}) => (
  <Card>
    <Title>{title}</Title>

    {fields.map(([name, label]) => (
      <Item key={name}>
        <Label>{label}:</Label> {format(name, data)}
      </Item>
    ))}
  </Card>
)

const GeneralSection = ({data}) => (
  <Card>
    <Title>คำถามทั่วไป</Title>
    <Item>
      <Label>{General.Q1}</Label>

      <Paragraph>{data.generalAnswer1}</Paragraph>
    </Item>

    <Item>
      <Label>{General.Q2}</Label>

      <Paragraph>{data.generalAnswer2}</Paragraph>
    </Item>

    <Item>
      <Label>{General.Q3}</Label>

      <Paragraph>{data.generalAnswer3}</Paragraph>
    </Item>
  </Card>
)

const imageStyle = css`
  position: relative;
  z-index: 2;

  width: 100%;
  min-height: 400px;
  max-width: 100%;

  margin-top: 0.8em;
  margin-bottom: 0.8em;
  box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);

  background-color: #efefef;
`

const MajorSection = ({data}) => {
  const major = getMajorFromPath()

  if (!major) {
    return (
      <Card>
        <Title>คำถามสาขา</Title>

        <Item>กรุณารอสักครู่</Item>
      </Card>
    )
  }

  let {Q1, Q2, Q3} = questions[major]

  if (major === 'programming') {
    Q3 = Q3Dev
  }

  return (
    <Card>
      <Title>คำถามสาขา</Title>
      <Item>
        <Label>{Q1}</Label>
        <Paragraph>{data.majorAnswer1}</Paragraph>
      </Item>

      <Item>
        <Label>{Q2}</Label>
        <Paragraph>{data.majorAnswer2}</Paragraph>
      </Item>

      <Item>
        <Label>{Q3}</Label>

        {major === 'design' ? (
          <Image
            image={{src: data.majorAnswer3, className: imageStyle}}
            imageZoom={{src: data.majorAnswer3}}
          />
        ) : (
          <Paragraph>{data.majorAnswer3}</Paragraph>
        )}
      </Item>
    </Card>
  )
}

const prev = () => {
  const major = getMajorFromPath()

  history.push(`/${major}/step4`)
}

const PageTitle = styled.div`
  position: absolute;
  top: 1em;
  left: 1em;

  color: white;
  font-size: 1.6em;
`

const NavBar = ({submit, style}) => (
  <Row style={style}>
    <Button onClick={prev}>ย้อนกลับไปแก้ไข</Button>

    <Button onClick={submit} success>
      ยืนยันการสมัครเข้าค่าย JWC
    </Button>
  </Row>
)

const Verify = ({data = {}, submit}) => (
  <Backdrop>
    <PageTitle>ตรวจสอบข้อมูล และยืนยันการสมัคร</PageTitle>
    <Container>
      <Upload value={data.photo} />
      <NavBar submit={submit} style={{marginBottom: '2.8em'}} />

      <Section title="ข้อมูลส่วนตัว" fields={personalFields} data={data} />
      <Section title="ข้อมูลผู้ปกครอง" fields={parentFields} data={data} />
      <GeneralSection fields={personalFields} data={data} />
      <MajorSection data={data} />

      <NavBar submit={submit} />
    </Container>
  </Backdrop>
)

const mapStateToProps = state => ({
  data: getFormValues('submission')(state) || state.camper,
})

const enhance = connect(mapStateToProps, {submit})

export default enhance(Verify)
