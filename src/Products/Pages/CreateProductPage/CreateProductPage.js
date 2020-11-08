import React from "react";


import { Grid } from "@material-ui/core";
import NewProductForm from "../../Components/NewProductForm";

const CreateProductPage = () => {
    return (
        <>
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
                <h2>New Product</h2>
            </Grid>
            </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={10}>
                <NewProductForm />
            </Grid>
        </Grid>
        </>
    )
}

export default CreateProductPage
