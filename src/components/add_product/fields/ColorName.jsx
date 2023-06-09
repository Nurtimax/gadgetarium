import React, { useState, useEffect } from "react";
import GadgetariumSpinnerLoading from "../../GadgetariumSpinnerLoading";

const ColorName = ({ color }) => {
  const [colorName, setColorName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchColorName() {
    setIsLoading(true);
    const response = await fetch(
      `http://www.thecolorapi.com/id?hex=${color.substring(1)}`
    );
    const data = await response.json();
    const name = data.name?.value;
    setColorName(name || "Unknown");
    setIsLoading(false);
  }

  useEffect(() => {
    fetchColorName();
  }, [color]);

  if (isLoading) {
    return <GadgetariumSpinnerLoading />;
  }

  return <span>{colorName}</span>;
};

export default ColorName;
