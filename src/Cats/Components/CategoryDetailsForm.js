import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { getCategoryDetails, updateCategoryByAdmin } from "../../Store/Actions/categoryActions";
import FormikControl from "../../Shared/FormElements/FormikControl";
import Message from "../../Shared/UIElements/Message";
import Spinner from "../../Shared/UIElements/Spinner";

const CategoryDetailsForm = () => {
  const catId = useParams().cid;

  const history = useHistory();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const categoryDetails = useSelector((state) => state.categoryDetails);

  const { loading, error, category } = categoryDetails;

  const categoryUpdate = useSelector(state => state.categoryUpdate);
  const { loading: loadingUpdateCat, error: errorUpdateCat, success } = categoryUpdate;


  useEffect(() => {
    if (!userInfo && !userInfo.isAdmin) {
      history.push("/");
    } else if ( ( category._id !== catId )&& userInfo.isAdmin)  {
      dispatch(getCategoryDetails(catId));
    } else if ( (category.categoryTitle === undefined) || (category.categoryTitle === null)) {
      history.push("/")
    }
  }, [dispatch, userInfo,category, catId, history]);

  let initialValues;
  if (category && catId) {
    initialValues = {
      categoryTitle: category.categoryTitle || "",
      categoryDescription: category.categoryDescription || "",
      categoryImage: category.categoryImage || "",
    };
  }

  const validationSchema = Yup.object({
    categoryTitle: Yup.string().required("Category Title is required"),
    categoryDescription: Yup.string().required(
      "Category Description is required"
    ).min(3).max(600),
    categoryImage: Yup.string()
  });

  const onSubmit = (values, isSubmitting) => {
      dispatch(updateCategoryByAdmin(category._id, {
          categoryTitle: values.categoryTitle,
          categoryDescription: values.categoryDescription,
          categoryImage: values.categoryImage
      }))
    isSubmitting(true);
    isSubmitting(false)
  };

  return (
    <Formik
      enableReinitialize={true} // To enable reinitialize values from backend API Soruce: https://github.com/formium/formik/issues/1033
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
               {error && <Message severity="error">{error}</Message>}
               {errorUpdateCat && <Message severity="error">{errorUpdateCat}</Message>}
            {/* Check if loading is true show Spinner else show the Login Form */}
            {loading ? (
              <Spinner />
            ) : (
                <>
            {/* Email */}
            <FormikControl
              fullWidth
              className="FormElement"
              control="materialInput"
              type="text"
              name="categoryTitle"
              autoComplete="Category Title"
              placeholder="Category Title"
              variant="outlined"
              size="small"
            />
            {/* firstName */}
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
            </>
            )}
             <button
                  className={`Signup__Form--Btn Submit__Btn`}
                  type="submit"
                >
                 {!loadingUpdateCat ? (
                    <span>Update Category</span>
                  ) : (
                    <span>Processing...</span>
                  )}
                </button>
                {success && <Message severity="success">Category Details Updated By Admin</Message>}
          </Form>
        );
      }}
    </Formik>
  );
};

export default CategoryDetailsForm;
