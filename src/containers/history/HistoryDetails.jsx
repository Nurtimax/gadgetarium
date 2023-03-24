import { Box, Grid, styled, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getById } from "../../redux/slices/private-slice";
import HistoryCard from "./HistoryCard";

const HistoryDetails = () => {
  const dispatch = useDispatch();
  const { dataDetails } = useSelector((state) => state.private);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getById(id));
  }, []);
  const btnStatus = useMemo(() => {
    switch (dataDetails.deliveryStatus) {
      case "IN_PROCESS":
        return <button className="IN_PROCESS">В процессе</button>;
      case "WAITING":
        return <button className="WAITING">В ожидании</button>;

      default:
        return null;
    }
  }, [dataDetails.deliveryStatus]);
  const paymant = useMemo(() => {
    switch (dataDetails.payment) {
      case "CASH":
        return "Наличные";
      case "PAYMENT_WITH_CARD":
        return "Картой при получении";
      case "PAYMENT_OFFLINE_WITH_CARD":
        return "Оплата картой онлайн";

      default:
        return null;
    }
  }, []);
  return (
    <StyledContainer>
      <Typography variant="h4">№ {dataDetails.orderNumber}</Typography>
      <Grid container>
        {dataDetails.subproducts?.map((item) => (
          <Grid item xs={2.3} key={item.productId}>
            <HistoryCard {...item} />
          </Grid>
        ))}
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <Typography component="span" className="status">
            Статус
          </Typography>
          <Typography className="block">
            {btnStatus}
            {/* <button className="expectation">О ожидании</button>
            <button className="processing">В обработке</button> */}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <span>Клиент</span>
          <p>{dataDetails.fullName}</p>
          <span>Имя</span>
          <p>{dataDetails.firstName}</p>
          <span>Адрес</span>
          <p>{dataDetails.address}</p>
          <span>Телефон</span>
          <p>{dataDetails.phoneNumber}</p>
          <span>Email</span>
          <p>{dataDetails.email}</p>
        </Grid>
        <Grid item xs={7}>
          <span>Дата</span>
          <p>{dataDetails.dateOfOrder}</p>
          <span>Способ оплаты</span>
          <p>{paymant}</p>
          <span>Фамилия </span>
          <p>{dataDetails.lastName}</p>
        </Grid>
        <Grid item xs={12} className="total">
          <div>
            Скидка:<span> {dataDetails.discountPrice}c</span>
          </div>
          <div>
            Итого:<span> {dataDetails.totalSum}c</span>
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
  "& .IN_PROCESS": {
    background: "#F3DAA5",
    color: "black",
  },
  "& .CANCEL": {
    background: "red",
    color: "#fff",
  },
}));
