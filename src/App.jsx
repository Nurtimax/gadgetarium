import React, { useState } from "react";
import StyledInput from "./components/UI/input/Input";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <StyledInput value={value} setValue={setValue} />
    </div>
  );
};

export default App;
