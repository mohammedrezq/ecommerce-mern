import React from "react";

import { Field, ErrorMessage } from "formik";

import TextError from "./TextError";

const RadioButtonsArray = (props) => {
  const { label, name, options, className, ...rest } = props;
  return (
    <div className={className}>
      <label>{label}</label>
      <div>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option, index) => {
            return (
              <React.Fragment key={option}>
                <div>
                <input
                  type="radio"
                  id={option}
                  {...field}
                  value={option}
                  checked={field.value === option}
                  />
                <label htmlFor={option}>{option}</label>
                </div>
              </React.Fragment>
            );
          });
        }}
      </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButtonsArray;
