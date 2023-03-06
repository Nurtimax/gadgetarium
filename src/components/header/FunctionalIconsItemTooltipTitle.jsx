import React from "react";
import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { priceProductSeparate } from "../../utils/helpers/general";
import { IconClose } from "../../assets";
import { deleteProductBasket } from "../../redux/slices/basket-slice";
import Button from "../UI/button/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";

const FunctionalIconsItemTooltipTitle = ({
  title,
  cartItem,
  focused,
  tooltip_title_compative_remove,
  tooltip_title_compative_add,
}) => {
  const { data = [] } = useSelector((state) => state.basket);

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteProductBasket([id]));
  };

  const price = data?.reduce((acc, curr) => {
    return Number(acc) + Number(curr.price);
  }, 0);

  if (title === "cart") {
    if (cartItem.length) {
      return (
        <Grid container spacing={1}>
          {cartItem.map((cart) => (
            <Grid item xs={12} key={cart.id}>
              <Item>{cart.title}</Item>
            </Grid>
          ))}
        </Grid>
      );
    }
    return (
      <>
        {data?.length < 1 ? (
          <Typography style={{ color: "red" }}>Empty products!</Typography>
        ) : (
          <StyledMainContainer>
            {data?.map((item, i) => (
              <Box key={i} className="item-box">
                <img src={item.image} alt="photo" className="image" />

                <span className="name">
                  {item.productName} {item.characteristics.memoryOfPhone}gb
                  <span>{item.color.toLowerCase()}</span>
                </span>

                <span className="price">
                  {priceProductSeparate(Number(String(item.price)))} c
                </span>

                <span className="dlt">
                  <IconClose onClick={() => deleteHandler(item.id)} />
                </span>
              </Box>
            ))}

            <Box className="box-total">
              <StyledButton>
                <Link to={`/${ROUTES.ORDERING}`}>Оформить заказ</Link>
              </StyledButton>
              <Typography className="total-price">
                Итого {priceProductSeparate(Number(String(price)))} с
              </Typography>
            </Box>
          </StyledMainContainer>
        )}
      </>
    );
  }
  if (focused) {
    return tooltip_title_compative_remove;
  }
  return tooltip_title_compative_add;
};

export default FunctionalIconsItemTooltipTitle;

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "white !important",
  width: "172px",
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
}));

const StyledMainContainer = styled(Box)(({ theme }) => ({
  padding: "30px 25.62px 20px 22px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "16px",
  color: theme.palette.primary.main,

  "& .item-box": {
    paddingBottom: "7px",
    borderBottom: `1px solid #E8E8E8`,
    display: "flex",
    gap: "12px",
  },

  "& .image": {
    width: "59.38px",
    height: "67.78px",
  },

  "& .name": {
    display: "flex",
    gap: "4px",
    width: "255px",
  },

  "& .price": {
    fontSize: "14px",
    fontWeight: "700",
    width: "100px",
  },

  "& .dlt": {
    cursor: "pointer",
  },

  "& .box-total": {
    paddingTop: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "60px",
  },

  "& .total-price": {
    fontSize: "14px",
    fontWeight: "700",
  },
}));
