import React from 'react'
import styled from 'react-emotion'
import {connect} from 'react-redux'
import {compose, branch} from 'recompose'
import {Spin} from 'antd'
import {Redirect} from 'react-static'

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

const Loading = ({match}) => <Splash>กำลังยืนยันตัวตน กรุณารอสักครู่</Splash>

const Authenticating = ({match}) => (
  <Splash>
    กรุณาเข้าสู่ระบบด้วย Facebook เพื่อสมัครเข้าสาขา
    <Major> {getMajor(match)}</Major>
  </Splash>
)

const Register = ({match}) => <Redirect to={`/${getMajor(match)}/step1`} />

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
