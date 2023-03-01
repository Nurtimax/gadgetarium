import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

const PriceQuantity = ({ handleNext }) => {
  return (
    <StyledPriceQuantity>
      <Grid container spacing={2.5} className="flex">
        <Grid item>
          <Typography>Общая цена</Typography>
          <StyledInput value="78 000" />
        </Grid>
        <Grid item xs={10} className="setting_price_button">
          <StyledButton>Установить цену</StyledButton>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} className="flex flex-end">
          <StyledButton className="next_button" onClick={handleNext}>
            Далее
          </StyledButton>
        </Grid>
      </Grid>
    </StyledPriceQuantity>
  );
};

export default PriceQuantity;

const StyledPriceQuantity = styled(Box)(() => ({
  padding: "60px 0",
  "& .flex": {
    alignItems: "flex-end",
  },
}));

const StyledInput = styled(Input)(() => ({
  width: "140px",
  height: "47px",

  background: "#FFFFFF",
  border: "1px solid rgba(144, 156, 181, 0.5)",
  borderRadius: "6px",
}));
const StyledButton = styled(Button)(({ theme }) => ({
  width: "12rem",
  height: "47px",
  fontSize: "1rem",
  color: "#FFFFFF !important",
  background: theme.palette.secondary.main,
  "&:first-child": {
    textTransform: "capitalize",
  },
  "&.next_button": {
    width: "100px",
  },
}));
