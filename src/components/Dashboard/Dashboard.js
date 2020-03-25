import React from "react";

import { connect } from "react-redux";

import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import BlogList from "../Blog/BlogList";
import Notification from "./Notification";

const Dashboard = ({ blogs }) => {
  return (
    <div className="dashboard container mt-4">
      <div className="row">
        <div className="col col-sm-12 col-md-7">
          <BlogList blogs={blogs} />
        </div>
        <div className="col col-sm-12 col-md-5">
          <Notification />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(state);

  return {
    // No async - state/blogReducer/blogState
    // blogs: state.blog.blogs

    // Async from firestore
    blogs: state.firestore.ordered.blogs
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "blogs" }])
)(Dashboard);
