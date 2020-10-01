import React from "react";

import { Field } from "formik";
import { TextField } from "@material-ui/core";

const MaterialInput = (props) => {
  const { label, name, size, variant, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => {
        const { errors, touched } = form;
        // console.log("field", field);
        // console.log("form", form);
        // Will Display the Error Helper Text from Material UI if the textfield is touched
        const displayHelperText =
          errors[name] && !!touched[name] ? errors[name] : null;
          
        return (
          <TextField
            helperText={displayHelperText}
            error={!!errors[name] && !!touched[name]}
            id={name}
            size={size}
            variant={variant}
            {...rest}
            {...field}
          />
        );
      }}
    </Field>
  );
};
export default MaterialInput;
