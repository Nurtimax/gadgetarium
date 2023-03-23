import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { EmptyHistory } from "../../assets";
import Button from "../../components/UI/button/Button";

const HistoreEmpty = () => {
  return (
    <StyledContainer>
      <Typography className="svg">
        <EmptyHistory />
      </Typography>

      <Typography component="div" className="block">
        <h5>Здесь пока пусто</h5>
        <p>Здесь будет храниться история ваших заказов.</p>
        <Typography>
          <Button variant="contained">К покупкам</Button>
        </Typography>
      </Typography>
      <Typography component="div" className="block2">
        <p className="user">Азамат Азаматов</p>
        <p className="email">aza@gmail.com +996 (400) 88-88-88</p>
        <StyledButton>Выйти</StyledButton>
      </Typography>
    </StyledContainer>
  );
};

export default HistoreEmpty;
const StyledContainer = styled(Box)(() => ({
  display: "grid",
  justifyContent: "center",
  padding: "30px 0",
  fontFamily: "Inter",
  fontStyle: "normal",
  "& .svg": {
    width: "400px",
    height: "300px",
    display: "flex",
    justifyContent: "center",
  },
  "& .block": {
    width: "422px",
    height: "140px",
    display: "grid",
    justifyContent: "center",
    textAlign: "center",
    gap: "5px 0",
  },
  "& .block2": {
    width: "150px",
    height: "170px",
    position: "absolute",
    right: "5%",
    top: "15%",
  },
  "& .user": {
    fontWeight: 600,
    fontSize: "17px",
  },
  "& .email": {
    fontWeight: 400,
    color: "#384255",
  },
}));
const StyledButton = styled("button")(() => ({
  color: "blue",
  border: "none",
  fontWeight: 700,
  fontSize: "16px",
  cursor: "pointer",
}));
