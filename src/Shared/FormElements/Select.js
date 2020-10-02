import React from "react";

import { Field, ErrorMessage } from "formik";

import TextError from "./TextError";

const Select = (props) => {
  const { label, name, options, className, ...rest } = props;
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        <optgroup label={label}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
        </optgroup>
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
