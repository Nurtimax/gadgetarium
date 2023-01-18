import { Grid } from "@mui/material";
import React from "react";
import AdminProfile from "./AdminProfile";
import NavLinks from "./NavLinks";
import UserProfile from "./UserProfile";

const TabsPath = ({ admin, setValue, value }) => {
  return (
    <>
      <Grid item xs={5.5}>
        <NavLinks setValue={setValue} value={value} admin={admin} />
      </Grid>
      <Grid item xs={3.5} className="height flex">
        {!admin ? <UserProfile /> : <AdminProfile />}
      </Grid>
    </>
  );
};

export default TabsPath;
