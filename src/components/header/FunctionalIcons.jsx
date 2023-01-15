import { Box } from "@mui/material";
import React, { useState } from "react";
import { iconsData } from "../../utils/constants";
import PopUp from "../UI/PopUp";
import FunctionalIconsItem from "./FunctionalIconsItem";

const FunctionalIcons = () => {
  const [anchorEl, setAnchorEl] = useState(false);

  const toggleAnchorEl = () => {
    setAnchorEl((prevState) => !prevState);
  };

  return (
    <Box className="flex gap2 height flex-end pointer">
      {iconsData.map((icon) => (
        <FunctionalIconsItem
          key={icon.id}
          {...icon}
          toggleAnchorEl={toggleAnchorEl}
        />
      ))}
      {anchorEl && (
        <PopUp
          open={anchorEl}
          handleClose={toggleAnchorEl}
          durationSnackbar={2000}
          addedTitle="come on"
          transitionTitle="how is it"
          to={Math.random().toString()}
          icon
        />
      )}
    </Box>
  );
};

export default FunctionalIcons;
