import React from "react";
import "./Input.css";

const Input = ({ handleChange }) => {
  return (
    <>
      <input
        autoComplete="off"
        type="text"
        onChange={handleChange}
        defaultValue={""}
        required
      />
      <button type="submit">Pledge</button>
    </>
  );
};

export default Input;
