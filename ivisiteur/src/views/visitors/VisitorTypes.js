import React from "react";
import "../../styles/visitors/visitorTypes.css";
import { Link } from "react-router-dom";
const VisitorType = () => {
  return (
    <div className="visitor__types__page">
      <h1 className="visitor__types__page__heading">
        What brings you here today?
      </h1>
      <Link to={`/step1/Business`} className="visitor__type__btn">
        Business
      </Link>
      <Link to={`/step1/Personal`} className="visitor__type__btn">
        Personal
      </Link>
      <Link to={`/step1/Delivery`} className="visitor__type__btn">
        Delivery
      </Link>
    </div>
  );
};

export default VisitorType;
