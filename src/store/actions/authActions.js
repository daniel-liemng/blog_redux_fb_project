export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    // make async call to Firebase
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => dispatch({ type: 'LOGIN_SUCCESS' }))
      .catch(err => {
        dispatch({ type: 'LOGIN_ERROR', err })
      })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    // make async call to Firebase
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      })
    firebase.logout()
  }
}

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        // add created user to Firestore
        return firestore
          .collection('users')
          .doc(res.user.uid)
          .set({
            username: newUser.username
          })
      })
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' })
      })
      .catch(err => {
        dispatch({ type: 'SIGNUP_ERROR', err })
      })
  }
}
