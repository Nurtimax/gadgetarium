import { Grid, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { userProfileStatus_FAKE_DATA } from "../../utils/constants";

const UserProfileList = () => {
  const isLogIn = userProfileStatus_FAKE_DATA.logIn ? "enteredLogIn" : "enter";
  return (
    <>
      {userProfileStatus_FAKE_DATA[isLogIn].map((status) => (
        <Grid key={status.id} item xs={12}>
          <Link to={status.link}>
            <MenuItem>{status.title}</MenuItem>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default UserProfileList;
