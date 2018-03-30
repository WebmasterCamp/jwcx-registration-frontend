import React from 'react'
import {call, put, select} from 'redux-saga/effects'
import {message} from 'antd'

import {createReducer, Creator} from './helper'

import rsf, {app} from '../core/fire'
import history from '../core/history'
import {getMajorFromPath} from '../core/util'

const db = app.firestore()

export const STORE_CAMPER = 'STORE_CAMPER'

export const storeCamper = Creator(STORE_CAMPER)

export function* loadCamperSaga() {
  try {
    const major = getMajorFromPath()
    const uid = yield select(s => s.user.uid)
    console.log('Camper UID', uid, '| Major', major)

    if (!uid) {
      return
    }

    const docRef = db.collection('campers').doc(uid)
    const doc = yield call(rsf.firestore.getDocument, docRef)

    // If the document does exist, navigate to the "Change Denied" route
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
  } catch (err) {
    message.error(err.message)
  }
}

const initial = {}

export default createReducer(initial, state => ({
  [STORE_CAMPER]: camper => camper,
}))
