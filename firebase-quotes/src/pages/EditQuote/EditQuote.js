import React, { useEffect, useState } from "react";
import "./EditQuote.css";
import { Formik } from "formik";
import * as yup from "yup";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getQuoteById, updateQuoteData } from "../../firebase";

const editQuoteSchema = yup.object({
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

const EditQuote = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const params = useParams();
  const [quote, setQuote] = useState({
    text: "",
    author: "",
    source: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const getQuoteData = () => {
    setIsLoading(true);
    getQuoteById(params.id)
      .then((data) => {
        setIsLoading(false);
        delete data.id;
        setQuote(data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    getQuoteData();
  }, []);

  const submitForm = async (values) => {
    setIsLoading(true);
    try {
      await updateQuoteData(params.id, values);
      getQuoteData();
    } finally {
      setIsLoading(false);
    }
  };

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
