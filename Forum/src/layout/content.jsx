import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Topics from "../components/topics";
import Profile from "../components/profile";
import Topic from "../components/topic";


import Register from "../components/register";

const Content = () => {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Register}></Route>
        <Route path="/profile/:user_id" component={Profile} />
        <Route path="/topic/:topic_id" component={Topic} />
        <Route path="/topics" component={Topics} />
      </Switch>

      {/* <nav>
      
        <Link to="/register">
          <p className="header-btn">Register</p>
        </Link>
        <Link to="/login">
          <p className="header-btn">Login</p>
        </Link>
      </nav> */}
    </div>

   
  );
};

export default withRouter(Content);
