import React from 'react'
import styled from 'react-emotion'
import {connect} from 'react-redux'
import {compose, lifecycle, branch, withState} from 'recompose'
import {message, Spin} from 'antd'
import {Redirect} from 'react-static'

import {Heading, Backdrop, Paper} from '../components/Layout'

import {login, logout, getUserStatus} from '../ducks/user'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  max-width: 500px;

  width: 100%;
`

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
  authenticating: state.user.authenticating,
})

const enhance = compose(
  connect(mapStateToProps, {login, logout}),
  withState('loading', 'setLoading', true),
  lifecycle({
    async componentWillMount() {
      const {login, setLoading} = this.props
      const hide = message.loading('กำลังเข้าสู่ระบบ กรุณารอสักครู่', 0)

      // Check if the user is already logged in
      const user = await getUserStatus()
      hide()

      // If the user hasn't authenticated before, do it now.
      if (!user) {
        await login()
      }

      setLoading(false)
    },
  }),
  branch(props => props.authenticating, () => Authenticating),
  branch(props => props.loading, () => Loading),
)

export default enhance(Register)
