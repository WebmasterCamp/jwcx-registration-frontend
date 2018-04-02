const admin = require('firebase-admin')
const functions = require('firebase-functions')

admin.initializeApp(functions.config().firebase)

exports.stats = functions.firestore
  .document('campers/{camperId}')
  .onWrite(e => {
    const data = e.data.data()

    const db = admin.firestore()
    const counterRef = db.collection('stats').doc('counter')

    if (data.submitted) {
      return db.runTransaction(transaction => {
        return transaction.get(counterRef).then(doc => {
          const major = data.major
          const counterData = doc.data()
          const majorCount = counterData[major]

          const payload = {[major]: majorCount + 1}
          console.log('Updating counter to', payload[major], 'for', major)

          return transaction.update(counterRef, payload, {merge: true})
        })
      })
    }

    return true
  })
