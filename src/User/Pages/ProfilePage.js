import React from "react";

import { Grid, Card } from "@material-ui/core";

import ProfileForm from "../Components/ProfileForm";

import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div>
      <Grid container>
          <Grid item md={4} sm={12} xs={12}>
        <Card className="Profile__Form">
          <div className="Profile__Settings--Form"></div>
          <div className="view-header">Profile Settings</div>

          <ProfileForm />
        </Card>
        </Grid>
          <Grid item md={8} sm={12} xs={12}>
        <div className="Orders">
          <div style={{background: "yellow"}}> Orders </div>

        </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfilePage;
