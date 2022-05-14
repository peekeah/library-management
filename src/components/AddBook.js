import { Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { Form, Formik } from "formik";
import "./Form.css";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const URL = "https://61cbf244198df60017aebdbf.mockapi.io/library-management";
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    book_name: "",
    author: "",
    price: "",
    quantities: "",
  });

  const validate = (value) => {
    let errors = {};
    if (value.book_name === "") errors.book_name = "Book name is required";
    if (value.author === "") errors.author = "Author is required";
    if (value.price === "") errors.price = "Price is required";
    if (value.quantities === "") errors.quantities = "Quantities is required";
    return errors;
  };

  const handleSubmit = async (formData, { resetForm }) => {
    try {
      const response = await axios.post(URL, formData);
      resetForm();
      alert("Added successfully!");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">Add Books</h1>
      <div className="container col-4 col-md-6 col-8 mt-5">
        <Formik
          initialValues={initialValues}
          validate={(value) => validate(value)}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
          }) => (
            <Form>
              <div className="form-group mt-3 row my-4">
                <label className="col-sm-4 col-form-label">Book Name</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="book_name"
                    value={values.book_name}
                    className={`form-control ${
                      touched.book_name && errors.book_name && "is-invalid"
                    }`}
                    placeholder="Book Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <span className="error-element">
                  {touched.book_name && errors.book_name}
                </span>
              </div>
              <div className="form-group mt-3 row my-4">
                <label className="col-sm-4 col-form-label">Author</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className={`form-control ${
                      touched.author && errors.author && "is-invalid"
                    }`}
                    placeholder="Author"
                    name="author"
                    value={values.author}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <span className="error-element">
                  {touched.author && errors.author}
                </span>
              </div>
              <div className="form-group mt-3 row my-4">
                <label className="col-sm-4 col-form-label">Price</label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className={`form-control ${
                      touched.price && errors.price && "is-invalid"
                    }`}
                    placeholder="Amount in ₹"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <span className="error-element">
                  {touched.price && errors.price}
                </span>
              </div>
              <div className="form-group mt-3 row my-4">
                <label className="col-sm-4 col-form-label">Quantities</label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className={`form-control ${
                      touched.quantities && errors.quantities && "is-invalid"
                    }`}
                    placeholder="Available Quantities"
                    name="quantities"
                    value={values.quantities}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <span className="error-element">
                  {touched.quantities && errors.quantities}
                </span>
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={!isValid || isSubmitting}
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default AddBook;
