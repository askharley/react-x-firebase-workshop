const functions = require('firebase-functions');

exports.addUserCreatedDate = functions.firestore.document('/users/{userId}')
  .onCreate((snapshot) => {
    return snapshot.ref.update({
      meta: {
        createdDate: new Date()
      }
    })
  });
