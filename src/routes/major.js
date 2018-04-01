import React from 'react'
import styled from 'react-emotion'
import {connect} from 'react-redux'
import {compose, branch} from 'recompose'
import {Spin} from 'antd'
import {Redirect} from 'react-static'

import {Heading, Container, Backdrop, Paper} from '../components/Layout'

import {getMajorFromPath} from '../core/util'

import {login, logout} from '../ducks/user'

const Major = styled.span`
  text-transform: capitalize;
`

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

const Authenticating = () => (
  <Splash>
    กรุณาเข้าสู่ระบบด้วย Facebook เพื่อสมัครเข้าสาขา
    <Major> {getMajorFromPath()}</Major>
  </Splash>
)

const Loading = () => (
  <Splash>
    กำลังยืนยันตัวตนเพื่อสมัครเข้าสาขา
    <Major> {getMajorFromPath()} </Major>
    กรุณารอสักครู่
  </Splash>
)

const Register = ({match}) => {
  const major = getMajorFromPath(match)

  if (major) {
    return <Redirect to={`/${major}/step1`} />
  }
}

const mapStateToProps = state => ({
  user: state.user,
  loading: state.user.loading,
  authenticating: state.user.authenticating,
})

const enhance = compose(
  connect(mapStateToProps, {login, logout}),
  branch(props => props.authenticating, () => Authenticating),
  branch(props => props.loading, () => Loading),
)

export default enhance(Register)
