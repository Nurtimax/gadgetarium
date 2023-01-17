import { Box, styled } from "@mui/material";
import React from "react";
import { CatalogIcon } from "../../assets";
import IconButton from "../UI/IconButton";

const Catalog = () => {
  return (
    <Box className="flexgrow flex height">
      <ButtonStyled
        className="gap capitalize"
        variant="contained"
        color="secondary"
        icon={<CatalogIcon />}
      >
        Каталог
      </ButtonStyled>
    </Box>
  );
};

export default Catalog;

const ButtonStyled = styled(IconButton)(({ theme }) => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "700",
  padding: theme.spacing(1),
  width: "136px",
  "&:hover": {
    background: theme.palette.secondary.main,
  },
}));
