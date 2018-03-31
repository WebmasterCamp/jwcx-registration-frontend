import * as R from 'ramda'
import {message, notification} from 'antd'
import {takeEvery, call, select, put, fork} from 'redux-saga/effects'

import {createReducer, Creator} from './helper'

import rsf, {app} from '../core/fire'
import history from '../core/history'
import {getStepFromPath} from '../core/util'

export const NEXT = '@CAMP/NEXT'
export const PREV = '@CAMP/PREV'
export const SUBMIT = '@CAMP/SUBMIT'
export const SET_LOADING = '@CAMP/SET_LOADING'

export const next = Creator(NEXT)
export const prev = Creator(PREV)
export const submit = Creator(SUBMIT)
export const setLoading = Creator(SET_LOADING)

const db = app.firestore()

function* submissionSaga() {
  try {
    const uid = yield select(s => s.user.uid)
    const docRef = db.collection('campers').doc(uid)

    const data = {submitted: true, updatedAt: new Date()}
    yield call(rsf.firestore.setDocument, docRef, data, {merge: true})

    console.log('Updated and Submitted Camper Record', data)
    message.success('การสมัครเข้าค่ายเสร็จสิ้น')

    yield call(history.push, '/thankyou')
  } catch (err) {
    message.error(err.message)
  }
}

function* updateCamperRecord(payload) {
  const hide = message.loading('กำลังบันทึกข้อมูล...', 0)

  try {
    const uid = yield select(s => s.user.uid)

    if (uid) {
      const docRef = db.collection('campers').doc(uid)

      const data = {...payload, updatedAt: new Date()}
      yield call(rsf.firestore.setDocument, docRef, data, {merge: true})

      console.log('Updated Camper Record:', data)
      hide()

      message.info('บันทึกข้อมูลเรียบร้อยแล้ว', 0.5)
    }
  } catch (err) {
    message.error(err.message)
  }
}

function* nextPageSaga({payload}) {
  yield fork(updateCamperRecord, payload)

  const {major, step} = getStepFromPath()
  console.log('Next', major, step)

  // If user is at last step, continue to verification process
  if (step === 4) {
    yield call(history.push, `/${major}/verify`)
    return
  }

  yield call(history.push, `/${major}/step${step + 1}`)
}

function* previousPageSaga() {
  const payload = yield select(s => s.form.submission)

  if (payload) {
    yield fork(updateCamperRecord, payload.values)
  }

  const {major, step} = getStepFromPath()
  console.log('Prev', major, step)

  yield call(history.push, `/${major}/step${step - 1}`)
}

export function* submissionWatcherSaga() {
  yield takeEvery(NEXT, nextPageSaga)
  yield takeEvery(PREV, previousPageSaga)
  yield takeEvery(SUBMIT, submissionSaga)
}

const initial = {
  loading: false,
}

export default createReducer(initial, state => ({
  [SET_LOADING]: loading => ({...state, loading}),
}))
