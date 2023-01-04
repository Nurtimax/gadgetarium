import { Radio } from "@mui/material";
import React from "react";

const themesItems = [
  { id: 1, color: "#CB11AB" },
  { id: 2, color: "#292929" },
  { id: 3, color: "#1A1A25" },
  { id: 4, color: "#384255" },
  { id: 5, color: "#F10000" },
  { id: 6, color: "#2C68F5" },
  { id: 7, color: "#2FC504" },
  { id: 8, color: "#3CDE14" },
  { id: 9, color: "#F99808" },
  { id: 10, color: "#08A592" },
  { id: 12, color: "#909CB5" },
  { id: 13, color: "#91969E" },
  { id: 14, color: "#CDCDCD" },
  { id: 15, color: "#E8E8E8" },
  { id: 16, color: "#E0E2E7" },
  { id: 17, color: "#F4F4F4" },
];

const Themes = () => {
  return (
    <div>
      <h1>
        {themesItems.map((theme) => (
          <Radio
            key={theme.id}
            sx={{
              color: theme.color,
              "&.Mui-checked": {
                color: theme.color,
              },
            }}
          />
        ))}
      </h1>
    </div>
  );
};

export default Themes;
