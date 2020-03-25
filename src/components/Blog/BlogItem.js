import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ id, title, content }) => {
  return (
    <article className="media my-3">
      <img src="" alt="" />
      <div className="media-body">
        <Link to={`/blog/${id}`} className="blog-link">
          <h4>{title}</h4>
        </Link>
        <p>{content}</p>
      </div>
    </article>
  );
};

export default BlogItem;
