import { InputBase } from "@mui/material";
import React from "react";

const Search = () => {
  <div>
    {/* <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search Google Maps"
      inputProps={{ "aria-label": "search google maps" }}
    />
    <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
      7
    </IconButton> */}
    <InputBase classes={{ root: "search" }} />
  </div>;
};

export default Search;

// const SearchStyled = styled(InputBase)(()=>{});
