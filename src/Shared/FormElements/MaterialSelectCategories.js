import React from "react";

import { Field } from "formik";

import { FormControl, NativeSelect, FormHelperText } from "@material-ui/core";

const MaterialSelectCategories = (props) => {
  const { label, name, options, helperText, className, ...rest } = props;
  return (
    <div className={className}>
      <Field id={name} {...rest} name={name}>
        {({ field, form }) => {

          const { errors, touched } = form;
          const displayHelperTextSelect =
            errors[name] && !!touched[name] ? errors[name] : null;
          return (
            <FormControl error={!!errors[name] && !!touched[name]}>
              {/* <InputLabel htmlFor={name}>{name}</InputLabel> */}
              <NativeSelect
                id={name}
                label={label}
                name={name}
                value={label}
                {...field}
                {...rest}
              >
                <optgroup label={label}>
                  {options.map((option, index) => {
                    return (
                      <option key={index} value={option.id}>
                        {option.categoryTitle}
                      </option>
                    );
                  })}
                </optgroup>
              </NativeSelect>
              <FormHelperText>{displayHelperTextSelect}</FormHelperText>
            </FormControl>
          );
        }}
      </Field>
    </div>
  );
};

export default MaterialSelectCategories;
