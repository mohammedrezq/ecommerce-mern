import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <Grid container direction="column"
        alignItems="center"
        justify="center">
            <Grid item xs={12} >
                <div>
                <h2>Not Products Found, Go Back to <Link style={{ color: "inherit"}} to="/">Home Page</Link></h2>
                </div>
            </Grid>
        </Grid>
    )
}

export default ErrorPage;
