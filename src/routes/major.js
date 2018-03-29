import React from 'react'
import styled from 'react-emotion'
import {connect} from 'react-redux'
import {compose, lifecycle, branch, withState} from 'recompose'
import {message, Spin} from 'antd'

import Button from '../components/Button'
import {Heading, SubHeading} from '../components/Layout'

import {login, logout, getUserStatus} from '../ducks/user'

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

const Footnote = styled.div``

const Major = styled.span`
  text-transform: capitalize;
`

// Derives the major from the route match object
const getMajor = match => match.params[0].split('/')[1]

const Loading = ({match}) => (
  <Page>
    <Spin size="large" />
  </Page>
)

const Authenticating = ({match}) => (
  <Page>
    <Heading>
      กรุณาเข้าสู่ระบบด้วย Facebook เพื่อสมัครเข้าสาขา
      <Major> {getMajor(match)}</Major>
    </Heading>
  </Page>
)

const Register = ({match, user, logout}) => (
  <Page>
    <Heading>
      เข้าสู่ระบบแล้วในชื่อ {user.displayName} <br />
      เพื่อสมัครเข้าสาขา <Major> {getMajor(match)}</Major>
    </Heading>
    <Button onClick={logout}>ออกจากระบบ</Button>
  </Page>
)

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
