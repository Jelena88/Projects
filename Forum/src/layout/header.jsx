import React from "react";

import {  withRouter } from "react-router-dom";

import Logo from "../img/logo.png"

const Header = () => {
  return (
    <div className="forum-name" style={{ textAlign: "center", display: "flex"}}>
  
<div>
        <img src={Logo} alt="logo" className="logo"
        style={{ width: "30px" } }/>

</div><div>
      <h1>Forum</h1>
      </div>
    
  </div>
  );
};

export default withRouter(Header);
