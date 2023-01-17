import { Grid } from "@mui/material";
import React from "react";
import Catalog from "./Catalog";
import FunctionalIcons from "./FunctionalIcons";
import SearchItem from "./SearchItem";
import TabsPath from "./TabsPath";

const IsScroll = ({ isScroll, admin, pageIsAdmin, setValue, value }) => {
  if (!isScroll) {
    return (
      <TabsPath
        admin={admin}
        pageIsAdmin={pageIsAdmin}
        setValue={setValue}
        value={value}
      />
    );
  }
  return (
    <>
      <Grid item xs={1.5}>
        <Catalog />
      </Grid>
      <Grid item xs={6}>
        <SearchItem />
      </Grid>
      <Grid item xs={2}>
        <FunctionalIcons />
      </Grid>
    </>
  );
};

export default IsScroll;
