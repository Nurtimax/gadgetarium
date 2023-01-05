import { useState } from "react";
import DropDown from "./components/UI/DropDown";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="submit" onClick={() => setOpen(!open)}>
        Open
      </button>
      {open && (
        <DropDown propsWidth="300px" propsHeight="200px">
          Alisher
        </DropDown>
      )}
    </>
  );
};

export default App;
