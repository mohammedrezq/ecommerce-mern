import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Shared/FormElements/FormikControl";
import Message from "../../Shared/UIElements/Message";
import Spinner from "../../Shared/UIElements/Spinner";
import { categoryCreateAction } from "../../Store/Actions/categoryActions";

const CategoryCreateForm = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const categoryCreate = useSelector((state) => state.categoryCreate);

  // console.log(userSignup);
  const { loading, error, success, category } = categoryCreate;
  console.log(category);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo.isAdmin) {
      history.push("/");
    }
  }, [userInfo, history])

  const initialValues = {
    categoryTitle: "",
    categoryDescription: "",
    categoryImage: "",
  };

  const validationSchema = Yup.object({
    categoryTitle: Yup.string().required("Category Title is required field"),
    categoryDescription: Yup.string().required(
      "Category Description is required field"
    ),
    categoryImage: Yup.string(),
  });

  const onSubmit = (values, isSubmitting) => {
    dispatch(categoryCreateAction(values.categoryTitle, values.categoryDescription, values.categoryImage));
    console.log("Updated Data Category Data", values);
    isSubmitting(true);
    isSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            {error && <Message>{error}</Message>}
            {/* Email */}
            <FormikControl
              fullWidth
              className="FormElement"
              control="materialInput"
              type="text"
              name="categoryTitle"
              autoComplete="Category Title"
              placeholder="Category Title"
              label="Category Title"
              variant="outlined"
              //   size="small"
            />

            <FormikControl
              fullWidth
              className="FormElement"
              control="materialTextarea"
              type="text"
              name="categoryDescription"
              rows={5}
              placeholder="Category Description"
              variant="outlined"
              label="Category Description"
              maxLength="150"
              //   size="small"
            />
            <FormikControl
              fullWidth
              className="FormElement"
              control="materialInput"
              type="text"
              name="categoryImage"
              autoComplete="Category Link"
              placeholder="Image Link"
              label="Category Image"
              variant="outlined"
              //   size="small"
            />
            <button className={`category__Create`} type="submit">
              {!loading ? (
                <span>Create Category</span>
              ) : (
                <span>Processing...</span>
              )}
            </button>
            {category && success && (
              <Message severity="success">{`New Category ${category.categoryTitle} Created`}</Message>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default CategoryCreateForm;
