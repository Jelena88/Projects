import React from "react";
import { useState } from "react";
import { getUsername } from "../utilities/forum-service";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = ({ match }) => {
  const [userID] = useState(match.params.user_id);
  const [user, setUser] = useState({});

  useEffect(() => {
    getUsername(userID).then(data => {
      setUser(data.user);
      console.log("a", data);
    });
  }, [userID]);

  return (
    <> <h2>Profile</h2>
      <div className="profile">
        <p>
          <b>Name: </b>
          {user.name}
        </p>
        <p>
          <b>Surname: </b>
          {user.surname}
        </p>
        <p>
          <b>Email: </b>
          {user.email}
        </p>
        <p>
          <b>Username: </b>
          {user.username}
        </p>
      </div>
      <Link to="/topics">
        <button className="back-btn" style={{ marginTop: "20px" }}>
          Back to topics
        </button>
      </Link>
    </>
  );
};

export default Profile;
