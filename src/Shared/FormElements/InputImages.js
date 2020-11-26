import React from "react";
import { Field, ErrorMessage } from "formik";

import TextError from "./TextError";

import axios from "axios";

const InputImages = (props) => {
  const { label, name, className} = props;
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
            
          const imageUploadHandler = async (name, event) => {
              setFieldValue(name, event.target.files[0]);
              const formData = new FormData();
              formData.append(name, event.target.files[0]);
              console.log(name)
              console.log(event.currentTarget.files)

            try {
                const config  = {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }

                const { data } = await axios.post(process.env.REACT_APP_BACKEND_URL+'/uploads', formData, config)
                console.log("Images Data", `${process.env.REACT_APP_ASSET_URL}${data}`);
                console.log(data);
            } catch (error) {
              console.log(error)
            }
          };
          return (
            <div>
              <input
                multiple
                accept="image/*"
                id="file"
                name={name}
                type="file"
                onChange={(event) => imageUploadHandler(name, event)}
                className="form-control"
              />
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default InputImages;
