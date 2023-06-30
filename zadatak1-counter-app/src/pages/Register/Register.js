import React from "react";
import "./Register.css";
import { Formik } from "formik";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  fullName: "",
};

const Register = () => {
  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <div className="register-wrapper">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          submitForm(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <div>
            <div>
              <input
                type="text"
                name="fullName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
              />
              <p className="error-message">
                {errors.fullName && touched.fullName && errors.fullName}
              </p>
            </div>
            <div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p className="error-message">
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <div>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <p className="error-message">
                {errors.password && touched.password && errors.password}
              </p>
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              <p className="error-message">
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
              </p>
            </div>
            <button onClick={handleSubmit} type="button">
              Submit
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Register;
