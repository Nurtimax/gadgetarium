import { Container, styled, Typography } from "@mui/material";
import React from "react";

const Compare = () => {
  return (
    <ContainerStyled>
      <Typography variant="h5" component="h1" className="text_header">
        Сравнение товаров
      </Typography>
    </ContainerStyled>
  );
};

export default Compare;
const ContainerStyled = styled(Container)(() => ({
  "& .text_header": {
    height: "83px",
    display: "flex",
    alignItems: "center",
    fontFamily: "Ubuntu",
    fontWeight: "500",
    fontSize: "30px",
    borderBottom: "1px solid #CDCDCD",
  },
}));
