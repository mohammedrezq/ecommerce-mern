import React from "react";

// import Checkbox from "@material-ui/core/Checkbox";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./ProductsFilters.css";

const ProductsFilters = (props) => {
  return (
      <div
        className={`products__Filtering_Checkbox`}
        style={{ maxWidth: "192px" }}
      >
        <input
          type={props.type}
          id={props.Id}
          // checked={Sizes.inclues(size.value) ? true : false} "Same As indexOf(size.value) === -1 ?false: true"
          checked={props.Filters}
          onChange={props.onChangeFilters}
          value={props.Value}
          name={props.Name}
        />
        <label htmlFor={props.Id}>{props.Label}</label>
      </div>
  );
};
export default ProductsFilters;
