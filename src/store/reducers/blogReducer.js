const initState = {
  blogs: [
    { id: "1", title: "Post 1", content: "This is my first post!!!" },
    { id: "2", title: "Post 2", content: "This is my second post!!!" },
    { id: "3", title: "Post 3", content: "This is my third post!!!" }
  ]
};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_BLOG":
      console.log("created blog", action.blog);
      return state;
    case "CREATE_BLOG_ERROR":
      console.log("create blog err", action.err);
      return state;
    default:
      return state;
  }
};

export default blogReducer;
