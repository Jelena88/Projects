import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { register } from "../utilities/forum-service";
import Login from "./login";
import {  Route } from "react-router-dom";




const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPsw, setConfirmPsw] = useState("");

  const [validPsw, setValidPSw] = useState(false);
  const [samePsw, setSamePsw] = useState(false);

  useEffect(() => {
    function validPassword() {
      if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(password)) {
        setValidPSw(true);
      } else {
        setValidPSw(false);
      }
    }
    validPassword();
  }, [password]);

  useEffect(() => {
    setSamePsw(confirmPsw === password);
    console.log(confirmPsw === password);
  }, [confirmPsw, password]);

  function handleSubmit() {
    if (!validPsw || !samePsw) {
      console.log("neuspasna sifra");
      return;
    }
    register({ name, surname, username, email, password }).then(data => {
      if (data.success) {
        console.log("User registered");
        history.push("/topics");
      } else {
        console.log("Registration failed");
      }
    });
  }
  return (
    <div className="reg-log-div">
     <fieldset><legend><h4>Log In</h4></legend>
       <Route path="/" component={Login}></Route></fieldset>
       <fieldset>
         <legend><h4>Sign In</h4></legend>
      <form className="reg-log-form" style={{ margin: "20px" }}
      >
 
        <label for="name">Name:</label>
        <br/>
        <input
        id="name"
          type="text"
          placeholder="Name"
          onInput={e => {
            setName(e.target.value);
          }}
        />

    <label for="surname">Surname:</label>
    <br/>
        <input
         id="surname"
          type="text"
          placeholder="Surname"
          onInput={e => {
            setSurname(e.target.value);
          }}
        />
  <label>Username:</label>
    <br/>
        <input
          type="text"
          placeholder="Username"
          onInput={e => {
            setUsername(e.target.value);
          }}
        />
        <label>Email:</label>
    <br/>
        <input
          type="email"
          placeholder="Email"
          onInput={e => {
            setEmail(e.target.value);
          }}
        />
         <label>Password:</label>
    <br/>
        <input
          type="password"
          placeholder="Password"
          onInput={e => {
            setPassword(e.target.value);
          }}
        />
       <label>Confirm password:</label>
    <br/>
        <input
          type="password"
          placeholder="Confirm password"
          onInput={e => {
            setConfirmPsw(e.target.value);
          }}
        />
        
   <br/>
   <br/>
       <input
       
          value="Confirm registration"
          type="submit"
          onClick={e => {
            e.preventDefault();
            handleSubmit();
          }}
        />
      </form>
      </fieldset>
    </div>
  );
};

export default Register;
