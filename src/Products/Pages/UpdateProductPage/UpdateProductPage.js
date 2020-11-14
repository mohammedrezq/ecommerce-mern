import React from "react";
import { useSelector } from "react-redux";


import { Grid } from "@material-ui/core";
// import NewProductForm from "../../Components/NewProductForm";
// import AddProductForm from "../../Components/AddProductForm";
import { Link } from "react-router-dom";
import UpdateProductForm from "../../Components/UpdateProductForm";

const UpdateProductPage = () => {

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    return (
        <>
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
                <h2>Update Product</h2>
            </Grid>
            </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={10}>
                {(userInfo && userInfo.isAdmin) ? (
                    <UpdateProductForm />
                ): (<h2>Only Admins allowed, go back to <Link to="/">Home Page</Link> Or to <Link to="/login">Login</Link> if you are admin.</h2>)}
            </Grid>
        </Grid>
        </>
    )
}

export default UpdateProductPage;
