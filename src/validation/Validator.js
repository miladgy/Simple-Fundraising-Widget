const Validator = donation => {
  let errors = {};
  if (!donation) {
    errors.message = "You need to enter the amount you wish to donate.";
  } else if (!/^[0-9]+$/g.test(donation)) {
    errors.message =
      "Amount entered is invalid; only numbers without decimals are valid.";
  } else if (+donation === 0) {
    errors.message = "Minimum donation amount is $1.";
  }

  return errors;
};

export default Validator;
