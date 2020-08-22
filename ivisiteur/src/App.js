import React from "react";
import "./styles/app.css";
import logo from "./assets/images/badge2.png";
const App = () => {
  return (
    <div className="welcome__page">
      <div className="logo">
        <p className="logo__title">
          <img src={logo} width="70" /> iVisiteur
        </p>
      </div>
      <h1 className="heading">Sign In</h1>
      <div class="flex__row">
        <h2 className="letter__spacing">
          {" "}
          <i className="fa fa-hand-pointer"></i> TOUCH TO START
        </h2>
      </div>
    </div>
  );
};

export default App;
