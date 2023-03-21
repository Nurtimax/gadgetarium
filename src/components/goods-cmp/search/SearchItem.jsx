import { Grid, styled } from "@mui/material";
import React from "react";
import Search from "../../UI/Search";

const SearchItem = () => {
  return (
    <>
      <Grid item xs={6}>
        <StyledSearch
          width="95%"
          placeholder="Поиск по артикулу или ..."
          showBackground={true}
        />
      </Grid>
    </>
  );
};

export default SearchItem;

const StyledSearch = styled(Search)(() => ({}));
