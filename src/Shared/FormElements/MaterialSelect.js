// import React from "react";

// import { Field } from "formik";

// import {
//   FormControl,
//   NativeSelect,
//   TextField,
//   FormHelperText,
//   InputLabel,
// } from "@material-ui/core";

// const MaterialSelect = (props) => {
//   const { label, name, options, helperText, ...rest } = props;
//   return (
//     <Field id={name} {...rest} name={name}>
//       {({ field, form }) => {
//         console.log("field Select:", field);
//         console.log("form Select:", form);
//         const { errors, touched } = form;
//         console.log("Errors Form Select", errors)

//         return (
//           <FormControl error={!!errors[name] && touched[name]}>
//             <TextField  id={label} label={label} value={label} select>
//                 <optgroup label={label}>
//                 {options.map((option) => {
//                   return (
//                     <option key={option.value} value={option.value}>
//                       {option.key}
//                     </option>
//                   );
//                 })}
//                 </optgroup>
//               </TextField>
//             <FormHelperText>{helperText}</FormHelperText>
//           </FormControl>
//         );
//       }}
//     </Field>
//   );
// };

// export default MaterialSelect;
