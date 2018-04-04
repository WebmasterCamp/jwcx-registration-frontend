const admin = require('firebase-admin')
const functions = require('firebase-functions')

admin.initializeApp(functions.config().firebase)

exports.stats = functions.firestore
  .document('campers/{camperId}')
  .onWrite(event => {
    const id = event.params.camperId
    const data = event.data.data() || {}
    const previousData = event.data.previous.data() || {}

    const db = admin.firestore()
    const counterRef = db.collection('stats').doc('counter')

    if (previousData.submitted && data.submitted) {
      console.log('Camper', id, 'tried to submit twice.')

      return false
    }

    // If previously not submitted, but it is now submitted.
    if (!previousData.submitted && data.submitted) {
      return db.runTransaction(transaction => {
        return transaction.get(counterRef).then(doc => {
          const major = data.major
          const counterData = doc.data()
          const majorCount = counterData[major]
          const nextCount = majorCount + 1

          const payload = {[major]: nextCount}
          console.log('Updated', major, 'to', nextCount)

          return transaction.update(counterRef, payload, {merge: true})
        })
      })
    }

    return true
  })
