import React from "react";
import PopUp from "./components/UI/PopUp";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { styled } from "@mui/material";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <FirstTitle>Перейти в избранное</FirstTitle>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <div>
      <Button onClick={handleClick}>Show Snackbar</Button>
      <PopUp handleClose={handleClose} action={action} open={open} />
    </div>
  );
};

export default App;

const FirstTitle = styled("div")(() => ({
  color: " rgba(60, 222, 20, 1)",
}));
