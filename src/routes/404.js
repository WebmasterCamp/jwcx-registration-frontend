import React from 'react'
import {connect} from 'react-redux'
import styled from 'react-emotion'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  padding: 1em;

  min-height: 100vh;

  font-size: 2.8em;
  font-weight: 300;
`

const Landing = () => <Page>ไม่พบหน้าดังกล่าว | Junior Webmaster Camp X</Page>

export default Landing
