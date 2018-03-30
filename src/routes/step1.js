import React from 'react'
import {connect} from 'react-redux'
import styled from 'react-emotion'

import PersonalForm from '../components/Forms/StepOne'

import {submit} from '../ducks/submission'

const Backdrop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background-image: linear-gradient(#6973ad, #6bc9e9);
  background-attachment: fixed;

  width: 100%;
  min-height: 100vh;

  padding-top: 7em;
  padding-bottom: 7em;
`

const Title = styled.div`
  position: absolute;
  top: 1em;
  left: 2em;

  color: white;
  font-size: 1.8em;
`

const Register = ({submit}) => (
  <Backdrop>
    <Title>STEP 1: ข้อมูลส่วนตัว</Title>
    <PersonalForm onSubmit={submit} />
  </Backdrop>
)

const enhance = connect(null, {submit})

export default enhance(Register)
