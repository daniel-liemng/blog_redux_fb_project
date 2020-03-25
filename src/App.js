import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Layout/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import BlogDetail from "./components/Blog/BlogDetail";
import CreateBlog from "./components/Blog/CreateBlog";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/blog/:id" component={BlogDetail} />
        <Route path="/create" component={CreateBlog} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;
