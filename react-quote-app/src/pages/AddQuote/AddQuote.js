import React, { useEffect, useState } from "react";
import "./AddQuote.css";
import { Formik } from "formik";
import * as yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";

const newQuoteSchema = yup.object({
  quoteText: yup
    .string()
    .required("quoteText je obavezno polje")
    .min(6, "quoteText mora da ima najmanje 6 karaktera")
    .max(100, "quoteText mora da ima najvise 50 karaktera"),
  quoteAuthor: yup
    .string()
    .required("quoteAuthor je obavezno polje")
    .min(4, "quoteAuthor mora da ima najmanje 6 karaktera")
    .max(50, "quoteAuthor mora da ima najvise 50 karaktera"),
  quoteSource: yup
    .string()
    .required("quoteSource je obavezno polje")
    .min(4, "quoteSource mora da ima najmanje 6 karaktera")
    .max(200, "quoteSource mora da ima najvise 50 karaktera"),
  category: yup.string().required("Category je obavezno polje"),
});

const AddQuote = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const [categories, setCategories] = useState([]);

  const clearAllCategories = () => {
    setCategories([]);
  };

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/category/get-all")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const submitForm = (values) => {
    fetch("https://js-course-server.onrender.com/quotes/add-quote", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Uspesno");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return (
    <div className="add-quote-wrapper">
      <Formik
        initialValues={{
          quoteText: "",
          quoteAuthor: "",
          quoteSource: "",
          category: "",
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
                name="quoteText"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quoteText}
              />
              <p className="error-message">
                {errors.quoteText && touched.quoteText && errors.quoteText}
              </p>
            </div>
            <div>
              <p>Author</p>
              <input
                type="text"
                name="quoteAuthor"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quoteAuthor}
              />
              <p className="error-message">
                {errors.quoteAuthor &&
                  touched.quoteAuthor &&
                  errors.quoteAuthor}
              </p>
            </div>
            <div>
              <p>Source</p>
              <input
                type="text"
                name="quoteSource"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quoteSource}
              />
              <p className="error-message">
                {errors.quoteSource &&
                  touched.quoteSource &&
                  errors.quoteSource}
              </p>
            </div>
            <div>
              <p>Category</p>
              <select
                name="category"
                onChange={handleChange}
                value={values.category}
              >
                <option value={""} disabled={true}>
                  -- Izaberi kategoriju --
                </option>
                {categories.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <p className="error-message">
                {errors.category && touched.category && errors.category}
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
  );
};

export default AddQuote;
