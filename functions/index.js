const admin = require('firebase-admin')
const functions = require('firebase-functions')

admin.initializeApp(functions.config().firebase)

// exports.aggregateRatings = firestore
//   .document('campers/{camperId}')
//   .onWrite(event => {
//     // Get a reference to the restaurant
//     var restRef = db.collection('stats').document(event.params.restId);
//
//     // Update aggregations in a transaction
//     return db.transaction(transaction => {
//       return transaction.get(restRef).then(restDoc => {
//         // Compute new number of ratings
//         const newNumRatings = restDoc.data('numRatings') + 1
//
//         // Update restaurant info
//         return transaction.update(restRef, {
//           avgRating: newAvgRating,
//           numRatings: newNumRatings
//         });
//       });
//     });
// });

exports.stats = functions.https.onRequest((req, res) => {
  const db = admin.firestore()
  const camper = db.collection('stats').doc('counter')

  camper
    .get()
    .then(snapshot => {
      const data = snapshot.data()
      console.log('Stats:', data)

      return res.status(200).send(data)
    })
    .catch(err => res.send({error: true, code: err.code, message: err.message}))
})
