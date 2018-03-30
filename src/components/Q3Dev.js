import React from 'react'
import styled from 'react-emotion'

import {Programming} from '../core/questions'
import devAssignment from '../assets/dev_assignment.png'

const Image = styled.img`
  width: 100%;
  margin-top: 0.8em;
  margin-bottom: 0.8em;
  box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);
`

const Q3Dev = (
  <span>
    {Programming.Q3}

    <Image src={devAssignment} />
  </span>
)

export default Q3Dev
