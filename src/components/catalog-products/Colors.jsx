import React from "react";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

const Colors = ({
  colorName,
  handleChangeColor,
  colorCode,
  countOfProduct,
  colors = [],
}) => {
  return (
    <Box className="subcategory-box">
      <FormControlLabel
        className="form-control-label"
        label={
          <>
            <span style={{ display: "flex", gap: "5px" }}>
              {colorName} <p style={{ color: "#91969E" }}>({countOfProduct})</p>
            </span>
          </>
        }
        control={
          <Checkbox
            color="secondary"
            checked={colors.includes(colorCode)}
            onClick={() => handleChangeColor(colorCode, colorName)}
          />
        }
      />
    </Box>
  );
};

export default Colors;
