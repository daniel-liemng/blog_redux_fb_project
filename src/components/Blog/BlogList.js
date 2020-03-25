import React from "react";

import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  return (
    <section>
      {blogs && blogs.map(blog => <BlogItem key={blog.id} {...blog} />)}
    </section>
  );
};

export default BlogList;
