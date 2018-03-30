import * as R from 'ramda'
import {message} from 'antd'
import firebase from 'firebase'
import {takeEvery, call, select, put, fork} from 'redux-saga/effects'

import {createReducer, Creator} from './helper'

import rsf, {app} from '../core/fire'
import history from '../core/history'
import {getStepFromPath} from '../core/util'

export const NEXT = 'NEXT'
export const PREV = 'PREV'
export const SUBMIT = 'SUBMIT'

export const next = Creator(NEXT)
export const prev = Creator(PREV)
export const submit = Creator(SUBMIT)

const db = app.firestore()

function* submissionSaga({payload}) {
  const uid = yield select(s => s.user.uid)
  const docRef = db.collection('campers').doc(uid)

  const data = {...payload, submitted: true}
  yield call(rsf.firestore.setDocument, docRef, data, {merge: true})

  console.log('Updated and Submitted Camper Record', data)
}

// Wizard Pattern: onSubmit progresses to the next page, run validation and save data.
function* nextPageSaga({payload}) {
  const uid = yield select(s => s.user.uid)
  const docRef = db.collection('campers').doc(uid)

  yield call(rsf.firestore.setDocument, docRef, payload, {merge: true})
  console.log('Updated Camper Record:', payload)

  const {major, step} = getStepFromPath()
  console.log('Next', major, step)

  // If user is at last step, continue to verification process
  if (step === 3) {
    history.push(`/${major}/verify`)
    return
  }

  history.push(`/${major}/step${step + 1}`)
}

// TODO: Perform Remote Submit
function* previousPageSaga({payload}) {
  const {major, step} = getStepFromPath()
  console.log('Prev', major, step)

  history.push(`/${major}/step${step - 1}`)
}

export function* submissionWatcherSaga() {
  yield takeEvery(NEXT, nextPageSaga)
  yield takeEvery(PREV, previousPageSaga)
  yield takeEvery(SUBMIT, submissionSaga)
}

const initial = {}

export default createReducer(initial, state => ({}))
