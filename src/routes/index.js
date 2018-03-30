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

  width: 100%;
  min-height: 100vh;
`

const Heading = styled.h1`
  color: #777;
  font-size: 1.95em;
  font-weight: 300;

  margin-bottom: 1.2em;
`

const SubHeading = styled.h1`
  color: #555;
  font-size: 1.85em;
  font-weight: 300;

  margin-bottom: 1.8em;
`

// TODO: The user may re-enter the registration subdomain directly.
//       Re-auth, then check if the user had already chosen their major, and redirect.

const Landing = () => (
  <Page>
    <Heading>ลงทะเบียนเข้าค่าย | Junior Webmaster Camp X</Heading>
    <SubHeading>กรุณาเลือกสาขาที่ท่านต้องการในเว็บไซต์หลัก</SubHeading>

    <a href="https://x.jwc.in.th">
      <Button>กลับสู่เว็บไซต์หลัก</Button>
    </a>
  </Page>
)

export default Landing
