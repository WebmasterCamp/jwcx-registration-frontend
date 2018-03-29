import {all} from 'redux-saga/effects'
import storage from 'redux-persist/lib/storage'
import {persistCombineReducers} from 'redux-persist'
import {reducer as form} from 'redux-form'

import user, {reauthSaga, userWatcherSaga} from './user'
import camper from './camper'

const config = {key: 'root', storage}

export const reducers = persistCombineReducers(config, {
  user,
  camper,
  form,
})

export function* rootSaga() {
  yield all([reauthSaga(), userWatcherSaga()])
}
