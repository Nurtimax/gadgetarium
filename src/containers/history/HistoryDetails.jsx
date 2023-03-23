import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import HistoryCard from "./HistoryCard";

const HistoryDetails = () => {
  return (
    <StyledContainer>
      <Typography variant="h4">№ 1521751218</Typography>
      <HistoryCard />
      <Grid container>
        <Grid item xs={12}>
          <Typography component="span" className="status">
            Статус
          </Typography>
          <Typography className="block">
            <button className="expectation">О ожидании</button>
            <button className="processing">В обработке</button>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <span>Клиент</span>
          <p>Максат Максатбеков</p>
          <span>Имя</span>
          <p>Максат</p>
          <span>Область/регион </span>
          <p>Чуй</p>
          <span>Адрес</span>
          <p>Исанова 55</p>
          <span>Телефон</span>
          <p>+996 707 123 456</p>
          <span>Email</span>
          <p>example@gmail.com</p>
        </Grid>
        <Grid item xs={9}>
          <span>Дата</span>
          <p>23.10.22 </p>
          <span>Способ оплаты</span>
          <p>Наличные</p>
          <span>Фамилия </span>
          <p>Максатбеков</p>
          <span>Город</span>
          <p>Чуй </p>
        </Grid>
        <Grid item xs={12} className="total">
          <div>
            Скидка:<span>360c</span>
          </div>
          <div>
            Итого:<span>3560c</span>
          </div>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default HistoryDetails;
const StyledContainer = styled(Box)(() => ({
  height: "100%",
  paddingBottom: "20px",
  "& h4": {
    padding: "30px 0",
  },
  "& span": {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    color: "#384255",
  },

  "& p": {
    fontFamily: "Manrope",
    fontS: "normal",
    fontWeight: 400,
    fontSize: "16px",
    padding: " 5px 0 15px 0",
  },
  "& .total": {
    paddingTop: "40px",
  },
  "& button": {
    width: "125px",
    height: "31px",
    border: "none",
    borderRadius: "6px",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    color: "#033152",
    cursor: "pointer",
  },
  "& .expectation": {
    background: "#BDDEF1",
  },
  "& .processing": {
    background: "#F3DAA5",
  },
  "& .status": {
    display: "block",
    paddingTop: "30px",
  },
  "& .block": {
    display: "flex",
    gap: "10px 10px",
  },
}));
