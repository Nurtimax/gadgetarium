import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { ArrowDownIcon } from "../../../assets";
import useDropDown from "../../../hooks/useDropDown";
import SortModal from "./SortModal";

const SortContent = () => {
  const [anchorEl, setAnchorEl] = useDropDown();

  return (
    <StyledSort className="pointer">
      <SortModal anchorElCatalog={anchorEl} handleCloseCatalog={setAnchorEl} />
      <Box className="flex gap" onClick={setAnchorEl}>
        <Typography>Сортировать</Typography>
        <ArrowDownIcon />
      </Box>
    </StyledSort>
  );
};

export default SortContent;

const StyledSort = styled(Box)(() => ({
  padding: "40px 0 16px",
  "& .MuiTypography-root": {
    padding: 0,
  },
}));
