import firebase from 'firebase'
import '@firebase/firestore'
import SagaFirebase from 'redux-saga-firebase'

const config = {
  apiKey: 'AIzaSyBNxcnU0P4XyuwybfISGtYasiEZbzpgV1A',
  authDomain: 'jwcx.firebaseapp.com',
  databaseURL: 'https://jwcx.firebaseio.com',
  projectId: 'jwcx-196915',
  storageBucket: 'jwcx.appspot.com',
  messagingSenderId: '774371380064',
}

export const app = firebase.initializeApp(config)

export default new SagaFirebase(app)
