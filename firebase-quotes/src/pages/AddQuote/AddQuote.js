import React, { useEffect, useState } from "react";
import "./AddQuote.css";
import { Formik } from "formik";
import * as yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";
import { addQuote } from "../../firebase";
import Layout from "../../containers/Layout/Layout";
import { useSelector } from "react-redux";

const newQuoteSchema = yup.object({
  text: yup
    .string()
    .required("text je obavezno polje")
    .min(6, "text mora da ima najmanje 6 karaktera")
    .max(100, "text mora da ima najvise 50 karaktera"),
  author: yup
    .string()
    .required("author je obavezno polje")
    .min(4, "author mora da ima najmanje 6 karaktera")
    .max(50, "author mora da ima najvise 50 karaktera"),
  source: yup
    .string()
    .required("source je obavezno polje")
    .min(4, "source mora da ima najmanje 6 karaktera")
    .max(200, "source mora da ima najvise 50 karaktera"),
});

const AddQuote = () => {
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  console.log(authState, "authState");

  const submitForm = async (values) => {
    try {
      await addQuote({ ...values, userId: authState.id });
      alert("Uspesno");
    } catch (err) {
      console.log(err);
    }
  };

  if (!authState.id) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return (
    <Layout>
      <div className="add-quote-wrapper">
        <Formik
          initialValues={{
            text: "",
            author: "",
            source: "",
            likes: 0,
          }}
          validationSchema={newQuoteSchema}
          onSubmit={(values, actions) => {
            submitForm(values);
            // actions.resetForm();
          }}
        >
          {({
            values, // formikov state => { email: "", password: "" }
            errors, // errors = { email: 'Neispravan email', password: 'Password is required field' }
            touched, // touched = { email: true }
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div>
              <div>
                <p>Text</p>
                <input
                  type="text"
                  name="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.text}
                />
                <p className="error-message">
                  {errors.text && touched.text && errors.text}
                </p>
              </div>
              <div>
                <p>Author</p>
                <input
                  type="text"
                  name="author"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.author}
                />
                <p className="error-message">
                  {errors.author && touched.author && errors.author}
                </p>
              </div>
              <div>
                <p>Source</p>
                <input
                  type="text"
                  name="source"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.source}
                />
                <p className="error-message">
                  {errors.source && touched.source && errors.source}
                </p>
              </div>

              {/* <button
              onClick={() => {
                console.log(values, "values");
              }}
              type="button"
            >
              Show values
            </button> */}
              <button onClick={handleSubmit} type="button">
                Submit
              </button>
            </div>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default AddQuote;
