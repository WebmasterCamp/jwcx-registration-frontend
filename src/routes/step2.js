import React from 'react'
import {connect} from 'react-redux'
import styled from 'react-emotion'

import {Backdrop} from '../components/Layout'
import ParentalForm from '../components/ParentalForm'

import {next} from '../ducks/submission'

const Title = styled.div`
  position: absolute;
  top: 1em;
  left: 2em;

  color: white;
  font-size: 1.8em;
`

const StepOne = ({next}) => (
  <Backdrop>
    <Title>STEP 2: ข้อมูลผู้ปกครอง</Title>
    <ParentalForm onSubmit={next} />
  </Backdrop>
)

const enhance = connect(null, {next})

export default enhance(StepOne)
