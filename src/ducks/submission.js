import * as R from 'ramda'
import {message} from 'antd'
import firebase from 'firebase'
import {takeEvery, call, put, fork} from 'redux-saga/effects'

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

function* submissionSaga({payload}) {
  console.log('Submission Form:', payload)
}

function* nextPageSaga({payload}) {
  const {major, step} = getStepFromPath()
  console.log('Next', major, step)

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
