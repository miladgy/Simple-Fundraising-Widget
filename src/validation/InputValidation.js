import { useState, useEffect } from 'react';

const InputValidation = (callback, validator) => {
  const [donation, setDonation] = useState({amount: 0});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [maxDonation, setmaxDonation] = useState(1000);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      
      callback(); 
    }
  }, [errors, isSubmitting]);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    setErrors(validator(donation));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    console.log('handlchange', event.target.value)
    setDonation(donation => ({ ...donation, [event.target.name]: event.target.value }));
    // setmaxDonation(maxDonation);

  };

  return {
    handleChange,
    handleSubmit,
    donation,
    errors
  }
};

export default InputValidation;