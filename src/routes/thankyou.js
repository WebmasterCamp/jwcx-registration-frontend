import React from 'react'
import styled from 'react-emotion'

import Button from '../components/Button'
import {Backdrop, Container, Paper} from '../components/Layout'

const Title = styled.h1`
  color: #555;
  margin-bottom: 1em;

  font-size: 2.18em;
  font-weight: 300;
  text-align: center;
`

const ThankYou = () => (
  <Backdrop>
    <Container>
      <Paper>
        <Title>ขอบคุณที่สมัครเข้าร่วมค่าย Junior Webmaster Camp ค่ะ! 💖</Title>

        <a href="https://x.jwc.in.th">
          <Button>กลับสู่เว็บไซต์หลัก</Button>
        </a>
      </Paper>
    </Container>
  </Backdrop>
)

export default ThankYou
