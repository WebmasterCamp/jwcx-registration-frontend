import * as R from 'ramda'
import {message} from 'antd'
import firebase from 'firebase'
import {takeEvery, call, put, fork} from 'redux-saga/effects'

import {createReducer, Creator} from './helper'

import rsf, {app} from '../core/fire'

export const SUBMIT = 'SUBMIT'

export const submit = Creator(SUBMIT)

function* submissionSaga({payload}) {
  console.log('Submission Form:', payload)
}

export function* submissionWatcherSaga() {
  yield takeEvery(SUBMIT, submissionSaga)
}

const initial = {}

export default createReducer(initial, state => ({}))
