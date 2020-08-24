import React from "react";
import "./styles/app.css";
import logo from "./assets/images/badge2.png";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div className="welcome__page">
      <div className="logo">
        <p className="logo__title">
          <img src={logo} width="70" alt="" /> iVisiteur
        </p>
      </div>
      <h1 className="heading">Welcome</h1>

      <div className="flex__row">
        <Link to="/visitorType">
          <h2 className="letter__spacing">
            <div style={{ position: "relative" }}>
              <div className="circle__ripple"></div>
              <i className="fa fa-hand-pointer"></i>&nbsp; TOUCH TO CHECK IN
            </div>
          </h2>
        </Link>
      </div>

      <div className="checkout__box">
        <i className="fa fa-sign-out checkout__box__icon"></i>
        <p className="checkout__box__title">CHECK OUT</p>
      </div>
    </div>
  );
};

export default App;
