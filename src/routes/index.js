import React from 'react'
import styled from 'react-emotion'
import {connect} from 'react-redux'

import Button from '../components/Button'

import {login, logout} from '../ducks/user'

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

const Title = styled.h1`
  color: #555;
  font-size: 1.85em;
  font-weight: 300;

  margin-bottom: 1.8em;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`

const Landing = ({user, login, logout}) => (
  <Page>
    {user.uid ? (
      <Container>
        <Title>เข้าสู่ระบบแล้วในชื่อ {user.displayName}</Title>
        <Button onClick={logout}>ออกจากระบบ</Button>
      </Container>
    ) : (
      <Container>
        <Title>สมัครเข้าค่าย | Junior Webmaster Camp X</Title>
        <Button onClick={login}>สมัครผ่าน Facebook</Button>
      </Container>
    )}
  </Page>
)

const mapStateToProps = state => ({
  user: state.user,
})

const enhance = connect(mapStateToProps, {login, logout})

export default enhance(Landing)
