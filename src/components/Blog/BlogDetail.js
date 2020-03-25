import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const BlogDetail = props => {
  const { blog } = props;

  const { title, content, authorFirstName, authorLastName } = blog;

  if (blog) {
    return (
      <div className="container mt-4">
        <article className="media">
          <img src="" alt="" />
          <div className="media-body">
            <h5 className="display-4">{title}</h5>
            <p>{content}</p>
            <hr />
            <p className="text-muted">
              Posted by {authorFirstName} {authorLastName}
            </p>

            <Link to="/" className="btn btn-outline-info">
              Back to Blog
            </Link>
          </div>
        </article>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h3 className="display-4">Loading...</h3>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const blogs = state.firestore.data.blogs;
  const blog = blogs && blogs[id];
  return { blog };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "blogs" }])
)(BlogDetail);
