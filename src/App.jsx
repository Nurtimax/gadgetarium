import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Modal from "./components/UI/Modal";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Modal handleClose={handleClose} open={open}>
        Alisher
      </Modal>
    </div>
  );
};

export default App;
