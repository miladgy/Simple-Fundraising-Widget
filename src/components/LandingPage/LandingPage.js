import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import InputValidation from "../../validation/InputValidation";
import validator from "../../validation/Validator";
import "./LandingPage.css";

const LandingPage = () => {
  const [handleShow, sethandleShow] = useState(true);
  const showText = () => {
    if (Object.keys(errors).length === 0) {
      sethandleShow(false);
    }
  };

  const { donation, errors, handleChange, handleSubmit } = InputValidation(
    showText,
    validator
  );
  const exitPage = event => {
    if (event) {
      event.preventDefault();
    }
    window.location.reload(false);
  };

  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <form onSubmit={handleSubmit} noValidate>
          <label className="heading">Make A Donation</label>
          {!handleShow && <ProgressBar donation={donation} />}
          <div className="description">
            {handleShow && (
              <p>
                Pledge money by entering the sum in the field below and press
                pledge, we already know your credit card details.
              </p>
            )}
          </div>
          <input
            autoComplete="off"
            className={handleShow ? "LandingPageJoin" : "hideInput"}
            type="name"
            name="amount"
            onChange={handleChange}
            value={donation.amount || ""}
            required
          />
          {<p>{errors.message}</p> && <p className="error">{errors.message}</p>}

          <button
            className={handleShow ? "donationBtn" : "hideInput"}
            type="submit"
          >
            PLEDGE
          </button>

          {!handleShow && (
            <>
              <div className="appreciation">
                <strong>Thank you for your pledge!</strong>
              </div>
              <button class="exit" onClick={exitPage}>
                Exit
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
