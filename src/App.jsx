import { useState } from "react";
import Modal from "./components/UI/Modal";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const state = true;

  return (
    <div>
      <button onClick={() => setOpen(true)}>open</button>
      <Modal handleClose={handleClose} open={open} state={state}>
        Modalfdsaaaadsfsaffsdafdsfsdafsfsdafdsafassd
        fsdafdsafdsafdsfsdafasdfdsafdsfasfdsfasfdsfsd
        fdasfsafdsafsdfsdafasdafsdafdasfsdafafdasfdsfsd
      </Modal>
    </div>
  );
};

export default App;
