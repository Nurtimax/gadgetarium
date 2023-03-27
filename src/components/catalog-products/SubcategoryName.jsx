import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const SubcategoryName = ({
  id,
  categoryName,
  handleToggle,
  subCategoryNames,
}) => {
  return (
    <Box key={id} className="subcategory-box">
      <FormControlLabel
        className="form-control-label"
        label={categoryName}
        control={
          <Checkbox
            color="secondary"
            checked={subCategoryNames.includes(categoryName)}
            onClick={() => handleToggle(id, categoryName)}
          />
        }
      />
    </Box>
  );
};

export default SubcategoryName;
