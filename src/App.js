import React from "react";
import { Button, Typography } from "@material-ui/core";

import ProductGrid from './Components/ProductGrid/ProductGrid';

function App() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <Button variant="contained" color="primary">
        <Typography variant="h3" component="h3">
          Hello World Again in a Button
        </Typography>
      </Button>
      <ProductGrid />
    </React.Fragment>
  );
}

export default App;
