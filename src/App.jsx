import { useState } from "react";
import DropDown from "./components/UI/DropDown";

const App = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={() => setOpen(true)}>open</button>
      <DropDown
        width="300px"
        height="300px"
        open={open}
        handleClose={handleClose}
      >
        Alisher
      </DropDown>
    </div>
  );
};

export default App;
