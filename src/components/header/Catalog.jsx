import { Box, Button, styled } from "@mui/material";
import React from "react";
import { CatalogIcon } from "../../assets";

const Catalog = () => {
  return (
    <Box className="flexgrow flex height">
      <ButtonStyled
        className="gap capitalize"
        variant="contained"
        color="secondary"
      >
        <CatalogIcon />
        Каталог
      </ButtonStyled>
    </Box>
  );
};

export default Catalog;

const ButtonStyled = styled(Button)(({ theme }) => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "700",
  padding: theme.spacing(1),
  "&:hover": {
    background: theme.palette.secondary.main,
  },
}));
