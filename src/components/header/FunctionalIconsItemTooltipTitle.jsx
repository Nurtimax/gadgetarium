import React from "react";
import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { priceProductSeparate } from "../../utils/helpers/general";
import { IconClose } from "../../assets";
import { deleteProductBasket } from "../../redux/slices/basket-slice";
import Button from "../UI/button/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";
import { postFavoriteProducts } from "../../redux/slices/favorite-slice";
import { deleteCompareProductsById } from "../../redux/slices/compare-slice";

const FunctionalIconsItemTooltipTitle = ({
  title,
  cartItem,
  favoriteItem,
  compareItem,
  focused,
  tooltip_title_compative_remove,
  tooltip_title_compative_add,
}) => {
  const { data: basketData } = useSelector((state) => state.basket);
  const { data: favoriteData } = useSelector((state) => state.favorite);
  const { compare: compareData } = useSelector(
    (state) => state.compareProducts
  );

  const bData = Array.isArray(basketData) ? basketData : [];
  const fData = Array.isArray(favoriteData) ? favoriteData : [];
  const cData = Array.isArray(compareData) ? compareData : [];
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteProductBasket([id]));
  };

  const price = bData?.reduce((acc, curr) => {
    return Number(acc) + Number(curr.price);
  }, 0);

  const addProductToFavorite = (productId) => {
    dispatch(postFavoriteProducts({ productId }));
  };

  const deleteByIdHandle = (id) => {
    dispatch(deleteCompareProductsById({ id }));
  };

  if (title === "comporative") {
    if (compareItem.length) {
      return (
        <Grid container spacing={1}>
          {compareItem.map((cart) => (
            <Grid item xs={12} key={cart.id}>
              <Item>{cart.title}</Item>
            </Grid>
          ))}
        </Grid>
      );
    }
    return (
      <>
        {cData?.length > 0 ? (
          <StyledMainContainer length={cData?.length}>
            <Box className="box-product">
              {cData?.map((item, i) => (
                <Box key={i} className="item-box">
                  <img src={item.image} alt="photo" className="image" />

                  <span className="name">{item.productName}</span>

                  <span className="price">
                    {priceProductSeparate(Number(String(item.price)))} c
                  </span>

                  <span className="dlt">
                    <IconClose onClick={() => deleteByIdHandle(item.id)} />
                  </span>
                </Box>
              ))}
            </Box>

            <Box className="box-total">
              <Link to={`/${ROUTES.COMPATISONPRODUCT}`}>
                <StyledButton>Сравнить</StyledButton>
              </Link>
            </Box>
          </StyledMainContainer>
        ) : (
          <Typography style={{ color: "red" }}>Empty products!</Typography>
        )}
      </>
    );
  }

  if (title === "favorite") {
    if (favoriteItem.length) {
      return (
        <Grid container spacing={1}>
          {favoriteItem.map((cart) => (
            <Grid item xs={12} key={cart.id}>
              <Item>{cart.title}</Item>
            </Grid>
          ))}
        </Grid>
      );
    }
    return (
      <>
        {fData?.length < 1 ? (
          <Typography style={{ color: "red" }}>Empty products!</Typography>
        ) : (
          <StyledMainContainer length={fData?.length}>
            <Box className="box-product">
              {fData?.map((item, i) => (
                <Box key={i} className="item-box">
                  <img src={item.productImage} alt="photo" className="image" />

                  <span className="name">{item.productName}</span>

                  <span className="price">
                    {priceProductSeparate(Number(String(item.productPrice)))} c
                  </span>

                  <span className="dlt">
                    <IconClose
                      onClick={() => addProductToFavorite(item.productId)}
                    />
                  </span>
                </Box>
              ))}
            </Box>

            <Box className="box-total">
              <Link to={`/${ROUTES.LIKE}`}>
                <StyledButton>Перейти в избранное</StyledButton>
              </Link>
            </Box>
          </StyledMainContainer>
        )}
      </>
    );
  }

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
        {bData?.length < 1 ? (
          <Typography style={{ color: "red" }}>Empty products!</Typography>
        ) : (
          <StyledMainContainer length={bData?.length}>
            <Box className="box-product">
              {bData?.map((item, i) => (
                <Box key={i} className="item-box">
                  <img src={item.image} alt="photo" className="image" />

                  <span className="name">
                    <p>{item.productName}</p>
                    <p> {item.characteristics.memoryOfPhone}gb</p>
                    <p>{item.color.toLowerCase()}</p>
                  </span>

                  <span className="price">
                    {priceProductSeparate(Number(String(item.price)))} c
                  </span>

                  <span className="dlt">
                    <IconClose onClick={() => deleteHandler(item.id)} />
                  </span>
                </Box>
              ))}
            </Box>

            <Box className="box-total">
              <Link to={`${ROUTES.CART}/${ROUTES.ORDERING}`}>
                <StyledButton>Оформить заказ</StyledButton>
              </Link>

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
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
}));

const StyledMainContainer = styled(Box)(({ theme, length }) => ({
  padding: "30px 25.62px 20px 22px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "16px",
  color: theme.palette.primary.main,

  "& .box-product": {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    overflowY: length > 3 ? "scroll" : "auto",
    height: length > 3 ? "300px" : "",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

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
    flexWrap: "wrap",
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
