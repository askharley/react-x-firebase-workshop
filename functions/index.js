const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.addMovieMeta = functions.firestore.document('/movies/{documentId}')
  .onCreate((snap, context) => {
    const original = snap.data();

    functions.logger.log('Adding meta data.');

    const meta = {
      createdDate: Date.now()
    };

    return snap.ref.set({meta}, {merge: true});
  })
