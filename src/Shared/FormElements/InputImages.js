import React from "react";
import { Field, ErrorMessage } from "formik";

// import Dropzone from "react-dropzone";
import TextError from "./TextError";

// import Thumb from "./Thumb";
import axios from "axios";

// const dropzoneStyle = {
//   width: "100%",
//   height: "auto",
//   backgroundColor: "red",
//   borderWidth: 2,
//   borderColor: "rgb(102, 102, 102)",
//   borderStyle: "dashed",
//   borderRadius: 5,
// };

const InputImages = (props) => {
  const { label, name, className, ...rest } = props;
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
            
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

                const { data } = await axios.post('http://localhost:5000/api/uploads', formData, config)
                console.log("Images Data", `http://localhost:5000${data}`);
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
