import React, { useState } from "react";
import Button from "@mui/material/Button";
import PopUp from "./components/UI/PopUp";

const App = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "",
    horizontal: "",
  });
  const { open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Button
        onClick={handleClick({
          vertical: "top",
          horizontal: "right",
        })}
      >
        Top-Right
      </Button>
      {open && (
        <PopUp
          {...state}
          handleClose={handleClose}
          open={open}
          addedTitle={"Товар успешно добавлен в корзину!"}
          transitionTitle={"Перейти в корзину"}
          durationSnackbar={2500}
        />
      )}
    </div>
  );
};

export default App;
