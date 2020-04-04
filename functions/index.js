const functions = require('firebase-functions')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection('notifications')
    .add(notification)
    .then((doc) => console.log('Notification Added', doc))
}

exports.blogCreated = functions.firestore
  .document('blogs/{blogId}')
  .onCreate((doc) => {
    const blog = doc.data()
    const notification = {
      content: 'Added a new blog',
      user: `${blog.authorUsername}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    }

    return createNotification(notification)
  })

exports.userJoined = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then((doc) => {
      const newUser = doc.data()
      const notification = {
        content: 'Joined',
        user: `${newUser.username}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      }
      return createNotification(notification)
    })
})
