import React from "react";
import Tooltip from '@material-ui/core/Tooltip';

const ProductsPriceRangeFilters = (props) => {
  return (
    <div>
      <Tooltip style={{fontSize:"60px"}} title={props.Title}>
      <input
        type={props.Type}
        onChange={props.onChange}
        step={props.Steps}
        min={props.Min}
        max={props.Max}
      />
      </Tooltip>
    </div>
  );
};

export default ProductsPriceRangeFilters;
