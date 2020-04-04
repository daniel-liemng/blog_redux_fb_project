export const createBlog = blog => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to DB - Firestore
    const firestore = getFirestore();
    // get profile from firebase state
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("blogs")
      .add({
        ...blog,
        authorUsername: profile.username,
        authorId,
        createdAt: new Date()
      })
      .then(() => {
        // dispatch to reducer
        dispatch({ type: "CREATE_BLOG", blog });
      })
      .catch(err => {
        dispatch({ type: "CREATE_BLOG_ERROR", err });
      });
  };
};
