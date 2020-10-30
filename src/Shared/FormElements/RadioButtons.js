import React from "react";

import { Field, ErrorMessage } from "formik";

import TextError from "./TextError";

const RadioButtons = (props) => {
  const { label, name, options, className, classes, secondClass, ...rest } = props;
  return (
    <div className={className}>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option, index) => {
            return (
              <div className={`${ classes && classes+index+1 } ${secondClass} `} key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButtons;
