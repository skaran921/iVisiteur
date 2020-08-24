import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/visitors/step1.css";
const Step1 = () => {
  let { visitorTypeId } = useParams();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    company: "",
  });
  return (
    <div className="step__1__page">
      <h1 className="visitor__types__page__heading">
        Tell us a bit about yourself
      </h1>
      <form autoComplete="off">
        <div className="form__group">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            autoComplete="off"
            required
          />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Mobile" required />
          <input type="text" placeholder="Company" required />
        </div>
        <div>
          <button className="btn btn__next">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
