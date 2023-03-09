import { Box, Container, styled, Typography, Checkbox } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteIconBasket, HeartIcon } from "../../assets";
import BasketItem from "../../components/basket/BasketItem";
import EmptyBasket from "../../components/basket/EmptyBasket";
import GadgetariumSpinnerLoading from "../../components/GadgetariumSpinnerLoading";
import Button from "../../components/UI/button/Button";
import {
  deleteProductBasket,
  getBasketProduct,
  postProductToFavorite,
} from "../../redux/slices/basket-slice";
import { ROUTES } from "../../utils/constants/routes";
import { priceProductSeparate } from "../../utils/helpers/general";

const Basket = () => {
  const { data, isLoading } = useSelector((state) => state.basket);
  const DATA = data || [];

  const dispatch = useDispatch();

  const [allId, setAllId] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [sumOrderData, setSumOrderData] = useState([]);

  useEffect(() => {
    setSumOrderData(
      DATA.length > 0
        ? DATA?.map((product) => ({ ...product, productCount: 1 }))
        : []
    );
  }, [data]);

  useEffect(() => {
    dispatch(getBasketProduct());
  }, []);

  const ID =
    DATA.length > 0
      ? DATA?.map((item) => {
          return item.id;
        })
      : null;

  const getIdProducts = () => {
    if (allId.length < 1) {
      setAllId(ID);

      setAllChecked(true);
    } else {
      setAllId([]);

      setAllChecked(false);
    }
  };

  const onFavoriteAll = () => {
    if (allId.length > 0) {
      dispatch(postProductToFavorite(allId));
    } else {
      alert("Выберите продукты!");
    }
  };

  const onDeleteAll = () => {
    if (allId.length > 0) {
      dispatch(deleteProductBasket(allId));
    } else {
      alert("Выберите продукты!");
    }
  };

  const orderCount = sumOrderData?.reduce((acc, curr) => {
    return Number(acc) + Number(curr.orderCount);
  }, 0);

  const discount = sumOrderData?.reduce((acc, curr) => {
    return Number(acc) + Number(curr.amountOfDiscount);
  }, 0);

  const price = sumOrderData?.reduce((acc, current) => {
    return acc + current.productCount * current.price;
  }, 0);

  return (
    <MainContainer>
      <Typography className="title">Товары в корзине</Typography>
      {isLoading ? (
        <GadgetariumSpinnerLoading />
      ) : DATA?.length < 1 ? (
        <EmptyBasket />
      ) : (
        <>
          <Box className="action-box">
            <Box className="action" onClick={getIdProducts}>
              <Checkbox color="secondary" checked={allChecked} />

              <Typography>Отметить всё</Typography>
            </Box>

            <Box className="action dlt" onClick={onDeleteAll}>
              <DeleteIconBasket className="icon" />

              <Typography>Удалить</Typography>
            </Box>

            <Box className="action dlt" onClick={onFavoriteAll}>
              <HeartIcon className="heart" />

              <Typography>Переместить в избранное</Typography>
            </Box>
          </Box>

          <Box className="container">
            <Box className="product-container">
              {sumOrderData?.map((item, i) => (
                <Box key={i} className="product-box">
                  <BasketItem
                    {...item}
                    allChecked={allChecked}
                    setAllId={setAllId}
                    allId={allId}
                    setSumOrderData={setSumOrderData}
                  />
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
                  <Typography>{Math.round(orderCount || 0)} шт.</Typography>
                  <span className="discount">
                    <span>-</span>
                    <span>
                      {priceProductSeparate(
                        Number(String(price / discount || 0))
                      )}
                    </span>
                    <p>c</p>
                  </span>
                  <Typography className="sum">
                    {priceProductSeparate(Number(String(price || 0)))}
                    <p>c</p>
                  </Typography>
                  <Typography className="total">
                    {priceProductSeparate(
                      Number(String(price - price / discount || 0))
                    )}
                    <p>c</p>
                  </Typography>
                </Box>
              </Box>

              <Link to={`/${ROUTES.CART}/${ROUTES.ORDERING}`}>
                <StyledButton>Перейти к оформлению</StyledButton>
              </Link>
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
    cursor: "pointer",
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
    justifyContent: "space-between",
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

  "& .box-name": {
    textAlign: "left",
  },

  "& .discount": {
    color: theme.palette.error.main,
    display: "flex",
    gap: "5px",

    "& p": {
      textDecoration: "underline",
    },
  },

  "& .total": {
    paddingTop: "7px",
    fontWeight: "600",
    display: "flex",
    gap: "5px",
    "& p": {
      textDecoration: "underline",
    },
  },

  "& .sum": {
    paddingTop: "7px",
    display: "flex",
    gap: "5px",
    "& p": {
      textDecoration: "underline",
    },
  },
}));
