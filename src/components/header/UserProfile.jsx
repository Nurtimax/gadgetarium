import { Box, Grid, IconButton, styled, Typography } from "@mui/material";
import React from "react";
import { ProfileIcon } from "../../assets";
import DropDown from "../UI/DropDown";
import UserProfileList from "./UserProfileList";

const UserProfile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (!open) {
      setAnchorEl(event.currentTarget);
      return;
    }
    setAnchorEl(null);
  };

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
          <Grid container spacing={1} className="pointer">
            <UserProfileList />
          </Grid>
        </StyledDropDown>
      </Box>
    </Box>
  );
};

export default UserProfile;

const StyledDropDown = styled(DropDown)(() => ({
  position: "absolute",
  "& .drop_paper": {
    width: "200px",
  },
}));
