import React from "react";
import "../../styles/error/pageNotFound.css";
const PageNotFound = () => {
  return (
    <div className="main__body">
      <i className="fa fa-exclamation-circle pagenotfound__icon"></i>
      <h1>404 Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
