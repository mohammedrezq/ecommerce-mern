import React from "react";

import { Field } from "formik";
import { TextField } from "@material-ui/core";

const MaterialInput = (props) => {
  const {
    label,
    name,
    size,
    variant,
    autoComplete,
    className,
    ...rest
  } = props;
  return (
    <div className={className}>
      <Field name={name}>
        {({ field, form }) => {
          const { errors, touched } = form;


          // Will Display the Error Helper Text from Material UI if the textfield is touched
          const displayHelperTextInput =
            errors[name] && !!touched[name] ? errors[name] : null;

          return (
            <TextField
              helperText={displayHelperTextInput}
              error={!!errors[name] && !!touched[name]}
              id={name}
              size={size}
              label={label}
              variant={variant}
              autoComplete={autoComplete}
              {...rest}
              {...field}
            />
          );
        }}
      </Field>
    </div>
  );
};
export default MaterialInput;
