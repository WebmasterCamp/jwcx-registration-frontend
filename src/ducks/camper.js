import {call, put, select} from 'redux-saga/effects'
import {message} from 'antd'

import {createReducer, Creator} from './helper'

import rsf, {app} from '../core/fire'
import history from '../core/history'
import {getMajorFromPath} from '../core/util'

import {setLoading} from '../ducks/submission'

const db = app.firestore()

export const STORE_CAMPER = 'STORE_CAMPER'

export const storeCamper = Creator(STORE_CAMPER)

export function* loadCamperSaga() {
  const hide = message.loading('กรุณารอสักครู่...', 0)
  yield put(setLoading(true))

  try {
    const major = getMajorFromPath()
    const user = yield select(s => s.user)
    const {uid, displayName, email, photoURL} = user

    console.log('Camper UID', uid, '| Major', major, '| Facebook', displayName)

    if (!uid) {
      return
    }

    const docRef = db.collection('campers').doc(uid)
    const doc = yield call(rsf.firestore.getDocument, docRef)

    if (window.FS) {
      console.log(`Identified camper ${uid} in Fullstory as ${displayName}`)

      window.FS.identify(email, {
        email,
        displayName,
        uid,
        photoURL,
      })
    }

    // If the document does exist, navigate to the "Change Denied" route
    if (doc.exists) {
      const record = doc.data()
      console.log('Retrieved Camper Record:', record)

      yield put(storeCamper(record))

      if (major && record.major !== major) {
        console.warn('You cannot change your major once it had been chosen.')

        yield call(history.push, '/change_denied?major=' + major)
      }

      return
    }

    if (major) {
      const data = {
        major,
        facebookDisplayName: displayName,
        facebookEmail: email,
        facebookPhotoURL: photoURL,
        createdAt: new Date(),
      }

      yield call(rsf.firestore.setDocument, docRef, data)

      console.log('Created Camper Record:', data)
    }
  } catch (err) {
    message.error(err.message)
  } finally {
    hide()
    yield put(setLoading(false))
  }
}

const initial = {
  birthdate: '2001-1-1',
}

export default createReducer(initial, state => ({
  [STORE_CAMPER]: camper => camper,
}))
