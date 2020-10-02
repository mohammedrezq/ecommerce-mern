import React from "react";

import { ErrorMessage, Field } from "formik";

import TextError from "./TextError";

const Textarea = (props) => {
    const { label, name, className, ...rest } = props;
    return (
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Textarea;