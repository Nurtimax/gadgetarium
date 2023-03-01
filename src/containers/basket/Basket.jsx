import { Box, Container, styled, Typography, Checkbox } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteIconBasket, HeartActiveIcon, HeartIcon } from "../../assets";
import BasketItem from "../../components/basket/BasketItem";
import Button from "../../components/UI/button/Button";
import { getBasketProduct } from "../../redux/slices/basket-slice";

const Basket = () => {
  const data = useSelector((state) => state.basket.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasketProduct());
  }, []);

  return (
    <MainContainer>
      <Typography className="title">Товары в корзине</Typography>
      {data === [] ? (
        <p>No basket</p>
      ) : (
        <>
          <Box className="action-box">
            <Box className="action">
              <Checkbox color="secondary" />

              <Typography>Отметить всё</Typography>
            </Box>

            <Box className="action dlt">
              <DeleteIconBasket className="icon" />

              <Typography>Удалить</Typography>
            </Box>

            <Box className="action">
              <Checkbox
                icon={<HeartIcon className="heart" />}
                checkedIcon={<HeartActiveIcon className="active-heart" />}
              />

              <Typography>Переместить в избранное</Typography>
            </Box>
          </Box>

          <Box className="container">
            <Box className="product-container">
              {data?.map((item, i) => (
                <Box key={i} className="product-box">
                  <BasketItem {...item} />
                </Box>
              ))}
            </Box>

            <Box className="sum-order-box">
              <Typography className="title-sum">Сумма заказа</Typography>

              <Box className="box-sum">
                <Box className="box-name">
                  <Typography>Количество товаров:</Typography>
                  <Typography>Ваша скидка:</Typography>
                  <Typography>Сумма:</Typography>
                  <Typography className="total">Итого</Typography>
                </Box>

                <Box>
                  <Typography>3 шт.</Typography>
                  <Typography className="discount">
                    – 20 000 <span>c</span>
                  </Typography>
                  <Typography>
                    220 900 <span>c</span>
                  </Typography>
                  <Typography className="total">
                    200 900 <span>c</span>
                  </Typography>
                </Box>
              </Box>

              <StyledButton>Перейти к оформлению</StyledButton>
            </Box>
          </Box>
        </>
      )}
    </MainContainer>
  );
};

export default Basket;

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  backgroundColor: theme.palette.secondary.main,
  color: "white !important",
  width: "100%",
}));

const MainContainer = styled(Container)(({ theme }) => ({
  marginBottom: "120px",
  marginTop: "10px",
  fontFamily: "Ubuntu",
  fontWeight: "400",
  fontSize: "20px",
  color: theme.palette.primary.main,

  "& .title": {
    paddingBottom: "20px",
    fontWeight: "500",
    fontSize: "30px",
    color: theme.palette.primary.main,
    borderBottom: `2px solid ${theme.palette.grey[600]}`,
  },

  "& .action-box": {
    paddingTop: "30px",
    display: "flex",
    gap: "40px",
  },

  "& .action": {
    display: "flex",
    alignItems: "center",
  },

  "& .dlt": {
    gap: "7px",
  },

  "& .icon": {
    cursor: "pointer",
  },

  "& .heart path": {
    stroke: theme.palette.grey[900],
  },

  "& .active-heart": {
    width: "24px",
    height: "24px",
  },

  "& .container": {
    display: "flex",
    gap: "104px",
    alignItems: "flex-start",
    paddingTop: "28px",
  },

  "& .product-container": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  "& .product-box": {
    display: "flex",
    gap: "10px",
  },

  "& .sum-order-box": {
    padding: "30px",
    backgroundColor: theme.palette.primary.contrastText,
  },

  "& .title-sum": {
    paddingBottom: "14px",
    width: "389px",
    fontFamily: "Inter",
    fontWeight: "500",
    borderBottom: `2px solid ${theme.palette.grey[600]}`,
  },

  "& .box-sum": {
    paddingTop: "14px",
    display: "flex",
    gap: "49px",
    fontSize: "16px",
    textAlign: "right",
  },

  "& span": {
    textDecoration: "underline",
  },

  "& .box-name": {
    textAlign: "left",
  },

  "& .discount": {
    color: theme.palette.error.main,
  },

  "& .total": {
    paddingTop: "7px",
    fontWeight: "600",
  },
}));
