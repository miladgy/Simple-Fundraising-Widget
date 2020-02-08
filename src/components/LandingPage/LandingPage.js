import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import Error from "../Error/Error";
import Tooltip from "../Tooltip/Tooltip";
import Input from "../Input/Input";
import Description from "../Description/Description";
import InputValidation from "../../validation/InputValidation";
import validator from "../../validation/Validator";
import Notification from "../Notification/Notification";
import "./LandingPage.css";

const LandingPage = () => {
  const {
    progressPercentage,
    errors,
    handleChange,
    handleSubmit,
    handleShow,
    sethandleShow,
    value
  } = InputValidation(validator);

  return (
    <div className="container">
      <h3>The fundraising widget</h3>
      <Tooltip progressPercentage={progressPercentage} />
      <div className="boxFrame">
        <ProgressBar progressPercentage={progressPercentage} />
        <div className="boxFrame_content">
          <form onSubmit={handleSubmit} noValidate>
            {<Description value={value} />}
            {handleShow ? (
              <Notification
                handleShow={handleShow}
                sethandleShow={sethandleShow}
              />
            ) : (
              <Input handleChange={handleChange} />
            )}
            <Error errors={errors} handleShow={handleShow} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
