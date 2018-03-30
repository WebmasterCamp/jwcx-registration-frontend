import React from 'react'
import {connect} from 'react-redux'
import styled from 'react-emotion'

import {Backdrop} from '../components/Layout'
import QuestionForm from '../components/QuestionForm'

import {submit} from '../ducks/submission'

const Title = styled.div`
  position: absolute;
  top: 1em;
  left: 2em;

  color: white;
  font-size: 1.8em;
`

const StepOne = ({submit}) => (
  <Backdrop>
    <Title>STEP 3: คำถามสมัครเข้าค่าย</Title>
    <QuestionForm onSubmit={submit} />
  </Backdrop>
)

const enhance = connect(null, {submit})

export default enhance(StepOne)
