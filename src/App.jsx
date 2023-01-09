import { Button, MenuItem } from "@mui/material";
import { useState } from "react";
import DropDown from "./components/UI/DropDown";

const App = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const a = Boolean(anchorEl);
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };
  const handleClick = (e) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={a ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={a ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <DropDown
        width="300px"
        height="300px"
        open={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
      >
        <MenuItem> Alisher</MenuItem>
      </DropDown>
    </div>
  );
};

export default App;
