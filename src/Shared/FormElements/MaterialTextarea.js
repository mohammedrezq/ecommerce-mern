import React from "react";

import { Field } from "formik";
import { TextField } from "@material-ui/core";

const MaterialTextarea = (props) => {
  const { label, name, variant, rowsMax, className, ...rest } = props;
  return (
    <div className={className}>
      <Field name={name}>
        {({ field, form }) => {
          const { errors, touched } = form;
          // console.log("field", field);
          // console.log("form", form);
          //   const errorText = errors[name] && touched ? errors[name] : "";

          // Will Display the Error Helper Text from Material UI if the textfield is touched
          const displayHelperTextTextarea =
            errors[name] && !!touched[name] ? errors[name] : null;

          return (
            <TextField
              helperText={displayHelperTextTextarea}
              error={!!errors[name] && !!touched[name]}
              id={name}
              rowsMax={rowsMax}
              variant={variant}
              multiline
              {...rest}
              {...field}
            />
          );
        }}
      </Field>
    </div>
  );
};
export default MaterialTextarea;
