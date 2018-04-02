import * as R from 'ramda'
import {message} from 'antd'
import firebase from 'firebase'
import {takeEvery, call, put, fork} from 'redux-saga/effects'

import {createReducer, Creator} from './helper'
import {loadCamperSaga} from './camper'

import rsf, {app} from '../core/fire'
import {getMajorFromPath} from '../core/util'
import logger from '../core/log'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const STORE_USER = 'STORE_USER'
export const CLEAR_USER = 'CLEAR_USER'

export const SET_LOADING = 'SET_LOADING'
export const SET_AUTHENTICATING = 'SET_AUTHENTICATING'

export const login = Creator(LOGIN)
export const logout = Creator(LOGOUT)

export const storeUser = Creator(STORE_USER)
export const clearUser = Creator(CLEAR_USER)

export const setLoading = Creator(SET_LOADING)
export const setAuthenticating = Creator(SET_AUTHENTICATING)

// Serializes the user's information into an object
const userProps = R.pick([
  'uid',
  'displayName',
  'email',
  'phoneNumber',
  'photoURL',
  'metadata',
])

export function* loginSaga() {
  const hide = message.loading('กำลังยืนยันตัวตนผ่าน Facebook...', 0)
  yield put(setAuthenticating(true))

  const provider = new firebase.auth.FacebookAuthProvider()
  provider.addScope('email')
  provider.addScope('public_profile')

  try {
    // Attempt to Sign In with redirection.
    const auth = yield call(rsf.auth.signInWithRedirect, provider)

    // Retrieve the user credential by using authentication credential.
    const cred = yield call(rsf.auth.signInAndRetrieveDataWithCredential, auth)

    if (cred) {
      logger.log('Logged in as', cred.user.displayName, cred.user.uid)

      yield fork(authRoutineSaga, cred.user)

      return
    }

    logger.warn('Credentials not found! Authentication might have failed.')
  } catch (err) {
    logger.warn('Authentication Error:', err.code, err.message)
    message.error('พบความผิดพลาดในการยืนยันตัวตน:', err.message)

    if (window.Raven) {
      window.Raven.captureException(err)
    }
  } finally {
    yield call(hide)
    yield put(setAuthenticating(false))
  }
}

export function* logoutSaga() {
  try {
    yield call(rsf.auth.signOut)
    yield put(clearUser())
  } catch (err) {
    message.error(err.message)
  }
}

// Routines to perform when the user begins or resumes their session
export function* authRoutineSaga(user) {
  yield put(storeUser(user))
  yield fork(loadCamperSaga)
}

export const getUserStatus = () =>
  new Promise((resolve, reject) => {
    app.auth().onAuthStateChanged(resolve, reject)
  })

// Attempt to re-authenticate when user resumes their session
export function* reauthSaga() {
  try {
    const user = yield call(getUserStatus)
    const major = getMajorFromPath()

    // If user is successfully re-authenticated.
    if (user) {
      logger.log('User has been re-authenticated as', user.displayName, user)

      yield fork(authRoutineSaga, user)
      return
    }

    // If user isn't at major path, don't do anything.
    if (!major) {
      logger.log('User is not at major path:', window.location.pathname)
      return
    }

    // If user has a major, but has not authenticated yet.
    if (major && !user) {
      logger.log('User has not authenticated yet. Logging In:', major)
      yield fork(loginSaga)

      yield put(setLoading(false))
    }
  } catch (err) {
    message.warn(err.message)
    logger.warn('Re-authentication Failed!', err)

    if (window.Raven) {
      window.Raven.captureException(err)
    }
  } finally {
    yield put(setLoading(false))
  }
}

export function* userWatcherSaga() {
  yield takeEvery(LOGIN, loginSaga)
  yield takeEvery(LOGOUT, logoutSaga)
}

const initial = {
  loading: true,
}

export default createReducer(initial, state => ({
  [SET_LOADING]: loading => ({...state, loading}),
  [SET_AUTHENTICATING]: authenticating => ({...state, authenticating}),
  [STORE_USER]: user => user && userProps(user),
  [CLEAR_USER]: () => ({}),
}))
