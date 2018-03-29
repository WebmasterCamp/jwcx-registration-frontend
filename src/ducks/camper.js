import React from 'react'
import {call, put, select} from 'redux-saga/effects'
import {Modal} from 'antd'

import {createReducer, Creator} from './helper'

import rsf, {app} from '../core/fire'
import majors from '../core/majors'
import history from '../core/history'

const db = app.firestore()

export const STORE_CAMPER = 'STORE_CAMPER'

export const storeCamper = Creator(STORE_CAMPER)

function getMajorFromPath() {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname.split('/')[1]

    if (majors.includes(path)) {
      return path
    }
  }
}

export function* loadCamperSaga() {
  const major = getMajorFromPath()
  const uid = yield select(s => s.user.uid)
  console.log('Camper UID', uid, '| Major', major)

  if (!uid) {
    return
  }

  const docRef = db.collection('campers').doc(uid)
  const doc = yield call(rsf.firestore.getDocument, docRef)

  if (doc.exists) {
    const record = doc.data()
    console.log('Retrieved Camper Record:', record)

    yield put(storeCamper(record))

    if (major && record.major !== major) {
      console.warn('You cannot change your major once it had been chosen.')

      history.push('/change_denied?major=' + major)
    }

    return
  }

  // TODO: Create the camper record based on existing data
  if (major) {
    const data = {major, createdAt: new Date()}
    yield call(rsf.firestore.setDocument, docRef, data)

    console.log('Created Camper Record:', data)
  }
}

const initial = {}

export default createReducer(initial, state => ({
  [STORE_CAMPER]: camper => camper,
}))
