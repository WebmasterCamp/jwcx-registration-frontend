import React from 'react'
import styled from 'react-emotion'

import Button from '../components/Button'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  padding: 1em;

  min-height: 100vh;
`

const Title = styled.h1`
  color: #555;
  margin-bottom: 1em;

  font-size: 2.18em;
  font-weight: 300;
`

const Landing = () => (
  <Page>
    <Title>ไม่พบหน้าดังกล่าว | Junior Webmaster Camp X</Title>

    <a href="https://x.jwc.in.th">
      <Button>กลับสู่เว็บไซต์หลัก</Button>
    </a>
  </Page>
)

export default Landing
