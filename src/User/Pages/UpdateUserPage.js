import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import UpdateUserForm from "../Components/UserUpdateForm";

const UpdateUserPage = () => {
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid style={{ padding: "1.5rem" }} item xs={11}>
            <Link style={{fontSize:"1.3rem", fontWeight: "600", color: "inherit"}} to="/admin/userlist">Go Back  &#8592;  </Link>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <h2>Edit User</h2>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid  style={{ paddingBottom: "1rem", margin: "0 0 3rem 0", border: "1px solid #ccc", borderRadius:"12px" }} item xs={8}>
          <UpdateUserForm />
        </Grid>
      </Grid>
    </>
  );
};

export default UpdateUserPage;
