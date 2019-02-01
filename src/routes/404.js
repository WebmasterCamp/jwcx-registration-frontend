import React from 'react'
import styled from 'react-emotion'

import Button from '../components/Button'
import {Backdrop, Container, Paper} from '../components/Layout'

const Title = styled.h1`
  color: #555;
  margin-bottom: 1em;

  font-size: 2.18em;
  font-weight: 300;
`

const Landing = () => (
  <Backdrop>
    <Container>
      <Paper>
        <Title>ไม่พบหน้าดังกล่าว | Junior Webmaster Camp XI</Title>

        <a href="https://www.jwc.in.th">
          <Button>กลับสู่เว็บไซต์หลัก</Button>
        </a>
      </Paper>
    </Container>
  </Backdrop>
)

export default Landing
