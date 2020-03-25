export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    // make async call to Firebase
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => dispatch({ type: "LOGIN_SUCCESS" }))
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
