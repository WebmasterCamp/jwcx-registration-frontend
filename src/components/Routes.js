import React from 'react'
import {Router, Route, Switch, Redirect} from 'react-static'
import {connect} from 'react-redux'
import styled from 'react-emotion'
import StaticRoutes from 'react-static-routes'

import Landing from '../routes'
import NotFound from '../routes/404'

import history from '../core/history'

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 100vh;
  min-height: 100vh;
`

const Routes = ({uid, ready}) => (
  <Router history={history}>
    <Switch>
      <StaticRoutes />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

const mapStateToProps = state => ({
  uid: state.user.uid,
  ready: !state.user.loading,
})

const enhance = connect(mapStateToProps)

export default enhance(Routes)
