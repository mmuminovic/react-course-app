import React, { useEffect, useState } from "react";
import "./EditQuote.css";
import { Formik } from "formik";
import * as yup from "yup";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const editQuoteSchema = yup.object({
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

const EditQuote = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const [categories, setCategories] = useState([]);
  const params = useParams();
  const [quote, setQuote] = useState({
    quoteText: "",
    quoteAuthor: "",
    quoteSource: "",
    category: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/category/get-all")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/quotes/get-quote/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        setIsLoading(false);
      });
  }, []);

  const submitForm = (values) => {
    setIsLoading(true);
    fetch("https://js-course-server.onrender.com/quotes/edit/" + params.id, {
      method: "PATCH",
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
          setIsLoading(false);
          // navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }

  if (isLoading) {
    return (
      <div className="edit-quote-wrapper">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="edit-quote-wrapper">
      <div>
        <h1>Edit Quote page</h1>
        <Formik
          enableReinitialize={true}
          initialValues={quote}
          validationSchema={editQuoteSchema}
          onSubmit={(values, actions) => {
            submitForm(values);
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
    </div>
  );
};

export default EditQuote;
