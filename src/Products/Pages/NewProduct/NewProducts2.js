import React from "react";

import { Formik, Field, Form, useField, FieldArray } from "formik";
import {
  TextField,
  Button,
  Checkbox,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import * as yup from "yup";

const MyRadio = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  title: yup.string().required().max(10),
  pets: yup.array().of(yup.object({
    name: yup.string().required()
  }))
});

const NewProduct = (props) => {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
          isTall: false,
          cookies: [],
          yogurt: "",
          pets: [{ type: "cat", name: "jarvis", id: "" + Math.random() }],
        }}
        validationSchema={validationSchema}
        /* Formik Validation */
        // validate={(values) => {
        //   const errors = {};
        //   if (values.title.includes("bb")) {
        //     errors.title = "No bb Allowed";
        //   }
        //   return errors;
        // }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // make async Call here


          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <MyTextField placeholder="first Title" name="title" type="input" />
            {/* <Field
              placeholder="first Title"
              name="title"
              type="input"
              as={TextField}
            /> */}
            <div>
              <Field name="description" as="textarea" rows="8" />
              <Field name="isTall" type="checkbox" as={Checkbox} />
              <div>Cookies: </div>
              <Field
                name="cookies"
                type="checkbox"
                value="chocolateChip"
                as={Checkbox}
              />
              <Field
                name="cookies"
                type="checkbox"
                value="Snikers"
                as={Checkbox}
              />
              <Field
                name="cookies"
                type="checkbox"
                value="Lambada"
                as={Checkbox}
              />
              <div>Yogurt: </div>
              <MyRadio name="yogurt" type="radio" value="peach" label="peach" />
              <MyRadio
                name="yogurt"
                type="radio"
                value="banana"
                label="banana"
              />
              <MyRadio
                name="yogurt"
                type="radio"
                value="strawberry"
                label="strawberry"
              />
            </div>
            <FieldArray name="pets">
              {(arrayHelpers) => (
                <div>
                  <Button
                    onClick={() =>
                      arrayHelpers.push({
                        type: "bird",
                        name: "",
                        id: "" + Math.random(),
                      })
                    }
                  >Add Pet</Button>
                  {values.pets.map((pet, index) => {
                    return (
                      <div key={pet.id}>
                        <MyTextField
                          placeholder="pet name"
                          name={`pets.${index}.name`}
                        />
                        <Field
                          name={`pets.${index}.type`}
                          type="select"
                          as={Select}
                        >
                          <MenuItem value="cat">Cat</MenuItem>
                          <MenuItem value="dog">Dog</MenuItem>
                          <MenuItem value="bird">Bird</MenuItem>
                          <MenuItem value="fish">Fish</MenuItem>
                        </Field>
                        <Button onClick={() => arrayHelpers.remove(index)}>x</Button>
                      </div>
                    );
                  })}
                </div>
              )}
            </FieldArray>
            <div>
              <Button disabled={isSubmitting} type="submit">
                Submit
              </Button>
            </div>

            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewProduct;
