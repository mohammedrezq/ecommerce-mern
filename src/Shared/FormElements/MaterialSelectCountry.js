import React from "react";

import { Field } from "formik";

import { FormControl, NativeSelect, FormHelperText } from "@material-ui/core";

const MaterialSelectCountry = (props) => {
  const { label, name, options, helperText, className, variant, ...rest } = props;

  // Convert Countries Object into Array { 'AF': 'Afghanistan', ...} into [ ["AF", "Afghanistan"], ...]
  const countries = Object.entries(options);

  return (
    <div className={className}>
      <Field id={name} {...rest} name={name}>
        {({ field, form }) => {
          const { errors, touched } = form;
          const displayHelperTextSelect =
            errors[name] && !!touched[name] ? errors[name] : null;
          return (
            <FormControl error={!!errors[name] && !!touched[name]} variant={variant}>
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
                  {countries.map((country) => {
                    return (
                      <option key={country[0]} value={country[0]}>
                        {country[1]}
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

export default MaterialSelectCountry;
