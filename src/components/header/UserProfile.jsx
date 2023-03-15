import { Box, IconButton, styled, Typography } from "@mui/material";
import React from "react";
import { ProfileIcon } from "../../assets";
import useDropDown from "../../hooks/useDropDown";
import DropDown from "../UI/DropDown";
import UserProfileList from "./UserProfileList";

const UserProfile = () => {
  const [anchorEl, handleClick, open] = useDropDown();

  return (
    <Box className="flex gap flexgrow flex-end">
      <Typography variant="body1" component="div">
        +996 (400) 00-00-00
      </Typography>
      <Box className="relative">
        <IconButton size="large" color="inherit" onClick={handleClick}>
          <ProfileIcon />
        </IconButton>
        <StyledDropDown
          open={open}
          handleClose={handleClick}
          anchorEl={anchorEl}
          vertical="bottom"
          horizontal="left"
          classes={{ paper: "drop_paper" }}
        >
          <UserProfileList />
        </StyledDropDown>
      </Box>
    </Box>
  );
};

export default UserProfile;

const StyledDropDown = styled(DropDown)(() => ({
  "& .drop_paper": {
    width: "200px",
  },
}));
