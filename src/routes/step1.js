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
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  max-width: 1000px;
`

const Register = ({submit}) => (
  <Backdrop>
    <Container>
      <PersonalForm onSubmit={submit} />
    </Container>
  </Backdrop>
)

const enhance = connect(null, {submit})

export default enhance(Register)
