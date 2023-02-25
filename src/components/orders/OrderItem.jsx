import { Box, styled, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderProductsById } from "../../redux/slices/orders-slice";
import { priceProductSeparate } from "../../utils/helpers/general";
import { checkInOrderStatus } from "../../utils/helpers/general";

const OrderItem = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const {
    totalSum,
    totalDiscount,
    productsName,
    orderNumber,
    countOfProduct,
    discount,
    total,
    address,
    phoneNumber,
    orderStatus,
  } = useSelector((state) => state.orderProduct.dataByID);

  useEffect(() => {
    dispatch(getOrderProductsById({ orderId }));
  }, []);

  const products = productsName?.length ? productsName : ["Don't have"];

  return (
    <StyledMainContainer>
      <Typography className="paymant-text">
        Оплата заказа {orderNumber || 0}
      </Typography>

      <Box className="container">
        <Box className="first">
          <Box className="first-child">
            <Box className="ul-box">
              <Typography className="li">Наименование:</Typography>
              <Typography className="li">Кол-во товара:</Typography>
              <Typography className="li">Общая сумма заказа:</Typography>
              <Typography className="li discount">
                Скидка: {discount || 0}%
              </Typography>
              <Typography className="li">Сумма скидки:</Typography>
            </Box>

            <Box className="ul-box">
              <Box className="box-name-product">
                {products.map((name, i) => (
                  <Typography className="li-value" key={i}>
                    {name}
                  </Typography>
                ))}
              </Box>

              <Typography className="li-value">
                {countOfProduct || 0}шт
              </Typography>
              <Typography className="li-value">
                {priceProductSeparate(Number(String(totalSum || 0)))} с
              </Typography>
              <Typography className="li-value-last">
                {priceProductSeparate(Number(String(totalDiscount || 0)))} с
              </Typography>
            </Box>
          </Box>

          <Box className="total-box">
            <Typography className="li">Итого:</Typography>
            <Typography className="li-value">
              {priceProductSeparate(Number(String(total || 0)))} с
            </Typography>
          </Box>
        </Box>

        <Box className="second">
          <Typography className="info-order">Информация о заказе</Typography>

          <Box className="order-number">
            <Typography className="li">Заказ №</Typography>
            <Typography className="li-value">{orderNumber || 0}</Typography>
          </Box>

          <Box className="order-number">
            <Typography className="li">Состояние:</Typography>
            <Typography className="li-value">
              {checkInOrderStatus(orderStatus)}
            </Typography>
          </Box>

          <Box>
            <Typography className="li">Контактный телефон:</Typography>
            <Typography className="li-value">
              +{priceProductSeparate(Number(String(phoneNumber || 0)))}
            </Typography>
          </Box>
          <Box>
            <Typography className="li">Адрес доставки:</Typography>
            <Typography className="li-value">
              {address || "Don't have"}
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

  "& .box-name-product": {
    display: "flex",
    gap: "7px",

    "& .li-value:after": {
      content: '","',
    },
  },

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
