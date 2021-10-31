import React from "react";

const Validator = (values) => {
  const emailValidator =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  let errors = {};

  if (!values.email) {
    errors.email = "Email is Required";
  } else if (emailValidator.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (passwordValidator.test(values.password)) {
    errors.password = "Password should be more than five characters";
  }

  return errors;
};

export default Validator;
