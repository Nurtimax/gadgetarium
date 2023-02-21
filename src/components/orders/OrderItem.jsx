import { Box, styled, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOrderProductById } from "../../redux/slices/order-product";

const OrderItem = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrderProductById({ id: orderId, params: { orderId } }));
  }, []);

  return (
    <StyledMainContainer>
      <Typography className="paymant-text">
        Оплата заказа 000000-455247
      </Typography>

      <Box className="container">
        <Box className="first">
          <Box className="first-child">
            <Box className="ul-box">
              <Typography className="li">Наименование:</Typography>
              <Typography className="li">Кол-во товара:</Typography>
              <Typography className="li">Общая сумма заказа:</Typography>
              <Typography className="li discount">Скидка: 15%</Typography>
              <Typography className="li">Сумма скидки:</Typography>
            </Box>

            <Box className="ul-box">
              <Typography className="li-value">
                Samsung Galaxy S21 128gb синий 9(MLP3RU)
              </Typography>
              <Typography className="li-value">1шт</Typography>
              <Typography className="li-value">60 000 с</Typography>
              <Typography className="li-value-last">9 000 с</Typography>
            </Box>
          </Box>

          <Box className="total-box">
            <Typography className="li">Итого:</Typography>
            <Typography className="li-value"> 51 000 с</Typography>
          </Box>
        </Box>

        <Box className="second">
          <Typography className="info-order">Информация о заказе</Typography>
          <Box className="order-number">
            <Typography className="li">Заказ №</Typography>
            <Typography className="li-value">000000-455247</Typography>
          </Box>
          <Box>
            <Typography className="li">Контактный телефон:</Typography>
            <Typography className="li-value">+996 (400) 00-00-00</Typography>
          </Box>
          <Box>
            <Typography className="li">Адрес доставки:</Typography>
            <Typography className="li-value">
              г.Бишкек, Токтоналиева, 145/7 кв 24, дом 5
            </Typography>
          </Box>
        </Box>
      </Box>
    </StyledMainContainer>
  );
};

export default OrderItem;

const StyledMainContainer = styled(Box)(({ theme }) => ({
  padding: "30px 100px",

  "& .paymant-text": {
    paddingBottom: "20px",
    fontFamily: "Ubuntu",
    fontWeight: "700",
    fontSize: "30px",
    color: theme.palette.primary.dark,
    borderBottom: `1px solid ${theme.palette.grey[600]}`,
  },

  "& .container": {
    paddingTop: "40px",
    display: "flex",
    gap: "424px",
  },

  "& .first-child": {
    paddingBottom: "20px",
    display: "flex",
    gap: "46px",
    borderBottom: `1px solid ${theme.palette.grey[600]}`,
  },

  "& .ul-box": {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    color: theme.palette.primary.dark,
  },

  "& .li": {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "16px",
  },

  "& .discount": {
    color: theme.palette.error.main,
  },

  "& .li-value": {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    color: theme.palette.primary.dark,
  },
  "& .li-value-last": {
    paddingTop: "30px",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    color: theme.palette.primary.dark,
  },

  "& .total-box": {
    paddingTop: "10px",
    display: "flex",
    justifyContent: "flex-end",
    gap: "14px",
  },

  "& .second": {
    padding: "30px",
    border: `1px solid ${theme.palette.grey[600]}`,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  "& .info-order": {
    paddingBottom: "16px",
    fontFamily: "Ubuntu",
    fontWeight: "600",
    fontSize: "20px",
    color: theme.palette.primary.dark,
    borderBottom: `1px solid ${theme.palette.grey[600]}`,
  },

  "& .order-number": {
    display: "flex",
    gap: "10px",
  },
}));
