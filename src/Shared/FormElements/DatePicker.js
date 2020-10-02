import React from "react";

import DateView from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import "react-datepicker/dist/react-datepicker.css";

import "./TextError.css";
import TextError from "./TextError";

const DatePicker = (props) => {
  const { label, name, className, ...rest } = props;
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              className={className}
              placeholderText
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DatePicker;
