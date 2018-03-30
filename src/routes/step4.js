import React from 'react'
import {connect} from 'react-redux'
import styled from 'react-emotion'
import {withRouteData} from 'react-static'

import {Backdrop} from '../components/Layout'
import MajorForm from '../components/MajorForm'

import {next} from '../ducks/submission'

const Title = styled.div`
  position: absolute;
  top: 1em;
  left: 2em;

  color: white;
  font-size: 1.8em;
`

const StepOne = ({next, questions}) => (
  <Backdrop>
    <Title>STEP 4: คำถามสาขา</Title>
    <MajorForm questions={questions} onSubmit={next} />
  </Backdrop>
)

const enhance = connect(null, {next})

export default withRouteData(enhance(StepOne))
