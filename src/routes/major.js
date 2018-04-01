import React from 'react'
import styled from 'react-emotion'
import {connect} from 'react-redux'
import {compose, branch} from 'recompose'
import {Spin} from 'antd'

import {Heading, Container, Backdrop, Paper} from '../components/Layout'

import {login, logout} from '../ducks/user'

const Major = styled.span`
  text-transform: capitalize;
`

// Derives the major from the route match object
const getMajor = match => match.params[0].split('/')[1]

const Splash = ({children}) => (
  <Backdrop>
    <Container>
      <Paper>
        <Heading style={{margin: 0, marginBottom: '1.5em'}}>{children}</Heading>

        <Spin size="large" />
      </Paper>
    </Container>
  </Backdrop>
)

const Loading = () => <Splash>กำลังยืนยันตัวตน กรุณารอสักครู่</Splash>

const Authenticating = ({match}) => (
  <Splash>
    กรุณาเข้าสู่ระบบด้วย Facebook เพื่อสมัครเข้าสาขา
    <Major> {getMajor(match)}</Major>
  </Splash>
)

const mapStateToProps = state => ({
  user: state.user,
  loading: state.user.loading,
  authenticating: state.user.authenticating,
})

const enhance = compose(
  connect(mapStateToProps, {login, logout}),
  branch(props => props.authenticating, () => Authenticating),
)

export default enhance(Loading)
