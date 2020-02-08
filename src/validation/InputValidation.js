import { useState, useEffect } from "react";

const InputValidation = validator => {
  const [donation, setDonation] = useState(0);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [maxDonation] = useState(1000);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [handleShow, sethandleShow] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      sethandleShow(true);
      setValue(Number(donation) + Number(value));
      setProgressPercentage(
        (((+value + +donation) / maxDonation) * 100).toFixed(1)
      );
      setDonation(0);
    }
  }, [errors, isSubmitting]);

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    setErrors(validator(donation));
    setIsSubmitting(true);
  };

  const handleChange = event => {
    event.persist();
    console.log(event.target.value)
    setDonation(prevDonation => (prevDonation, event.target.value));
  };

  return {
    progressPercentage,
    errors,
    handleChange,
    handleSubmit,
    handleShow,
    sethandleShow,
    value
  };
};

export default InputValidation;
