const Validator = donation => {
  console.log("in validator and this is donation", typeof donation.amount);
  let errors = {};
  if (!donation.amount) {
    errors.message = "You need to enter the amount you wish to donate.";
  } else if (!/^[0-9]+$/g.test(donation.amount)) {
    errors.message =
      "Amount entered is invalid; only numbers without decimals are valid.";
  } else if (+donation.amount === 0) {
    errors.message = "Minimum donation amount is $1.";
  }

  return errors;
};

export default Validator;
