import React from "react";

import {CardContent, Typography, List} from '@material-ui/core'; 

const ProductInfo = (props) => {
  return (
    <div>
      <CardContent>
        <Typography variant="body1">
        {props.productTitle}
        </Typography>
        <Typography variant="body2"  color="textSecondary" component="p">
        {props.descriptionList1}
        </Typography>
        <Typography variant="body2"  color="textSecondary" component="p">
        {props.descriptionList2}
        </Typography>
        <Typography variant="body2"  color="textSecondary" component="p">
        {props.descriptionList3}
        </Typography>
      </CardContent>
    </div>
  );
};

export default ProductInfo;
