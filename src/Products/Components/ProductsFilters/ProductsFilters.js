import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Sizes from "../../../Shared/Assets/Sizes";

const SizeFilter = (props) => {
  const [Size, setSize] = React.useState([]);

  props.handleSizeFilter(Size);

  const onSizeChange = (e) => {
    let TheSizesArray = [...Size, e.currentTarget.value]; // Filtering Array : https://stackoverflow.com/questions/61986464/react-checkbox-if-checked-add-value-to-array
    // console.log("THE SIZES",Size)
    let SizesChecked = e.currentTarget.checked;
    if(Size.includes(e.currentTarget.value)) {
      TheSizesArray = TheSizesArray.filter((size) =>  { 
        // console.log("TheSize",size) 
        return (size !== e.currentTarget.value)
      });
      setSize(TheSizesArray);
      // setCheckedSizes(SizesChecked);
    }
    // console.log(TheSizesArray)
    setSize(TheSizesArray);
    // setCheckedSizes(SizesChecked);

  }

  console.log(Size)
  return Sizes.map((size, index) => {
    return (
        <FormControlLabel
        key={index}
        control={
          <Checkbox
            id={size.value}
            // checked={Sizes.inclues(size.value) ? true : false} "Same As indexOf(size.value) === -1 ?false: true"
            checked={Size[size.key]}
            onChange={onSizeChange}
            value={size.value}
            name={size.value}
          />
        }
        label={size.key}
      />
    )
  });
};

export default SizeFilter;
