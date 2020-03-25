export const createBlog = blog => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to DB - Firestore
    const firestore = getFirestore();
    firestore
      .collection("blogs")
      .add({
        ...blog,
        authorFirstName: "Liem",
        authorLastName: "Nguyen",
        authorId: 12345,
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
