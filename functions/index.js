const admin = require('firebase-admin')
const functions = require('firebase-functions')

admin.initializeApp(functions.config().firebase)

// exports.statsHandler = functions.firestore
//   .document('campers/{camper}')
//   .onWrite(event => {})

exports.stats = functions.https.onRequest((req, res) => {
  const db = admin.firestore()
  const camper = db.collection('stats')

  // .catch(err =>
  //   res.send({error: true, code: error.code, message: err.message}),
  // )
})
