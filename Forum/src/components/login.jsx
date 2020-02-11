import React from "react";
import { useState } from "react";
import { login } from "../utilities/forum-service";
import { set } from "../utilities/state";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(username);
  console.log(password);

  function handleSubmit() {
    login({ username, password }).then(data => {
      if (data.success === true) {
        console.log("Login successful");
        set(data.user);
        console.log(data.user);
        history.push("/topics");
      } else {
        console.log("Login failed");
        alert("Invalid login");
      }
    });
  }

  return (
    <div className="reg-log-div">
      <form className="login-form" style={{ margin: "20px" }}>
      <label for="name">Username:</label>
        <input
          type="text"
          placeholder="Enter username"
          onInput={e => {
            setUsername(e.target.value);
          }}
        ></input>
        <br></br>
        <label for="name">Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          onInput={e => {
            setPassword(e.target.value);
          }}
        ></input>
        <br/>
        <br/>

        <input
          type="submit"
          value="Confirm login"
          onClick={e => {
            e.preventDefault();
            handleSubmit();
          }}
        />
      </form>
    </div>
  );
};

export default Login;
