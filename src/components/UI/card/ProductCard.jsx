import React, { useMemo } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Rating,
  CardActions,
  Box,
  styled,
  CircularProgress,
} from "@mui/material";
import IconButton from "../IconButton";
import {
  CartIcon,
  Favorites,
  Comporation,
  Like,
  New,
  ComporativePinkIcon,
  HeartActiveIcon,
  VisibilityOnIcon,
  VisibilityOffIcon,
} from "../../../assets";
import { priceProductSeparate } from "../../../utils/helpers/general";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postProductToBasket } from "../../../redux/slices/basket-slice";
import { toast } from "react-toastify";
import { getBasketProduct } from "../../../redux/slices/basket-slice";
import { useState } from "react";
import Modal from "../Modal";
import Input from "../input/Input";
import Button from "../button/Button";
import useVisibility from "../../../hooks/useVisibility";
import { useFormik } from "formik";
import { singInValidateSchema } from "../../../utils/helpers/validate";
import {
  ActionauthenticationSlice,
  fetchDataSignin,
} from "../../../redux/slices/authentication-slice";
import PopUp from "../PopUp";
import {
  getFavoriteProducts,
  postFavoriteProducts,
} from "../../../redux/slices/favorite-slice";

const ProductCard = (props) => {
  const {
    productName,
    discountPrice,
    productImage,
    productStatus,
    productPrice,
    count,
    productRating,
    countOfReview,
    favorite,
    compared,
    productId,
    categoryId,
    size,
    ...rest
  } = props;
  const basketData = useSelector((state) => state.basket.data);

  const { isLoading, data } = useSelector((state) => state.auth);

  const [isModalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useVisibility();

  const [error, setError] = useState(null);

  const [text, setText] = useState(["", "", ""]);
  const [loginText, setLoginText] = useState("");

  const [dropDown, setDropDown] = useState(false);

  const closeModalWindow = () => {
    setModalOpen(false);
  };

  const closeDropDown = () => {
    setDropDown(false);
  };

  const addBasketHandler = () => {
    if (Object.keys(data).length === 0) {
      setLoginText("чтобы добавить в корзину!");
      setModalOpen(true);
    } else {
      dispatch(
        postProductToBasket({
          orderCount: count,
          productId,
        })
      )
        .unwrap()
        .then((originalPromiseResult) => {
          toast.success(originalPromiseResult.message);
        })
        .catch((rejectedValueOrSerializedError) => {
          toast.error(rejectedValueOrSerializedError.message);
        });
      if (basketData?.some((item) => item.id === productId)) {
        alert("Товар уже добавлен!");
      } else {
        dispatch(
          postProductToBasket({
            orderCount: count,
            productId,
          })
        ).then(() => {
          setText([
            "Товар успешно добавлен в корзину!",
            "Перейти в корзину",
            "/cart",
          ]);

          setDropDown(true);
        });
      }
    }
  };

  const productSale = useMemo(() => {
    return Math.round((discountPrice / productPrice) * 100) - 100;
  });

  const sortStatus = useMemo(() => {
    switch (productStatus) {
      case "NEW":
        return <New width="2vw" height="2vw" title="Новинки" />;
      case "DISCOUNT":
        return <Discount_Styled title="Акции">{productSale}%</Discount_Styled>;
      case "RECOMMENDATION":
        return <Like width="2vw" height="2vw" title="Рекoмендуем" />;

      default:
        return null;
    }
  }, [productStatus]);

  const onComponentComporation = useMemo(() => {
    if (compared) {
      return (
        <ComporativePinkIcon
          cursor="pointer"
          title="Добавить к сравнению"
          width="3.5vh"
          height="3.5vh"
        />
      );
    }
    return (
      <Comporation
        cursor="pointer"
        title="Удалить из сравнения"
        width="3.5vh"
        height="3.5vh"
      />
    );
  }, [compared]);

  const addProductToFavorite = () => {
    if (Object.keys(data).length === 0) {
      setLoginText("чтобы добавить в избранное!");
      setModalOpen(true);
    } else {
      dispatch(postFavoriteProducts({ size, productId })).then(() => {
        favorite
          ? setText([
              "Товар удалён из избранных!",
              "Перейти в избранное",
              "/favorite",
            ])
          : setText([
              "Товар добавлен в избранное!",
              "Перейти в избранное",
              "/favorite",
            ]);

        setDropDown(true);
      });
    }
  };

  const onComponentLike = useMemo(() => {
    if (favorite) {
      return (
        <HeartActiveIcon
          cursor="pointer"
          title="Удалить из избранного"
          width="3.5vh"
          height="3.5vh"
          onClick={addProductToFavorite}
        />
      );
    }
    return (
      <Favorites
        width="3.5vh"
        height="3.5vh"
        title="Добавить в избранное"
        cursor="pointer"
        onClick={addProductToFavorite}
      />
    );
  }, [favorite]);

  const onSubmit = (values, action) => {
    dispatch(fetchDataSignin(values)).then((data) => {
      const { payload } = data;
      if (payload?.email && payload?.roleName && payload?.token) {
        if (data) {
          dispatch(ActionauthenticationSlice.getUserData(payload));
          dispatch(getBasketProduct());
          dispatch(getFavoriteProducts());

          location.reload();
          action.resetForm();
          setError(null);
          closeModalWindow();
        }
      } else {
        setError(true);
      }
    });
  };

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: singInValidateSchema,
    validateOnChange: false,
  });

  return (
    <StyledProductCard {...rest}>
      <CardActions>
        <Grid className="between" container>
          {sortStatus}
          <Grid item className="flex gap2">
            {onComponentComporation}
            {onComponentLike}
          </Grid>
        </Grid>
      </CardActions>
      {data?.token ? (
        <Link to={`/item/${categoryId}/${productId}/description`}>
          <CardMedia_Styled
            src={productImage}
            title={productName}
            alt={productName}
          />
        </Link>
      ) : (
        <CardMedia_Styled
          src={productImage}
          title={productName}
          alt={productName}
          onClick={addBasketHandler}
        />
      )}

      <Card_contend className="carsContent">
        <Styled_Count>В наличии ({count})</Styled_Count>
        <StyletTitle color="black" title={productName}>
          {productName}
        </StyletTitle>
        <Typography
          variant="span"
          className="flex size"
          style={{ color: "#909CB5" }}
        >
          Рейтинг
          <Rating value={productRating} readOnly />({countOfReview})
        </Typography>
        <CardActions>
          <Grid container className="flex between">
            <Box width="35%" background="red">
              {discountPrice > 0 ? (
                <Typography
                  variant="h1"
                  style={{ fontSize: "0.8rem", fontWeight: "700" }}
                >
                  {priceProductSeparate(Number(String(discountPrice || 0)))}c
                </Typography>
              ) : (
                <Typography
                  variant="h1"
                  style={{ fontSize: "0.9rem", fontWeight: "700" }}
                >
                  {priceProductSeparate(Number(String(productPrice || 0)))}c
                </Typography>
              )}
              {discountPrice > 0 ? (
                <Styled_Price>
                  {priceProductSeparate(Number(String(productPrice || 0)))}c
                </Styled_Price>
              ) : null}
            </Box>
            <IconButton
              onClick={addBasketHandler}
              width="65%"
              height="2.5vw"
              title="Добавить в карзину"
              fontSize="0.5rem"
              icon={<CartIcon width="1.5vw" />}
            >
              В корзину
            </IconButton>
          </Grid>
        </CardActions>
      </Card_contend>

      <>
        <PopUp
          open={dropDown}
          handleClose={closeDropDown}
          addedTitle={text[0]}
          transitionTitle={text[1]}
          to={text[2]}
          durationSnackbar={2000}
          icon={true}
          vertical="bottom"
          horizontal="right"
        />

        {isModalOpen ? (
          <StyledModal
            handleClose={closeModalWindow}
            open={isModalOpen}
            state={true}
          >
            <Grid container spacing={1}>
              <Box className="text-box">
                <p>Войдите или зарегистрируйтесь</p>
                <p>{loginText}</p>
              </Box>
              <Grid item xs={12} className="flex center padding">
                <Typography component="h1" variant="h5" className="login-title">
                  Войти
                </Typography>
              </Grid>
            </Grid>
            <StyledForm
              component="form"
              className="flex column"
              onSubmit={handleSubmit}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <StyledInput
                    placeholder="Напишите email"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                  />
                  {errors.email && (
                    <Typography component="p" variant="body2" color="error">
                      {errors.email}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <StyledInput
                    placeholder="Напишите пароль"
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    type={!showPassword ? "password" : "text"}
                    endAdornment={
                      <>
                        {!showPassword ? (
                          <VisibilityOffIcon
                            className="pointer"
                            onClick={setShowPassword}
                          />
                        ) : (
                          <VisibilityOnIcon
                            className="pointer"
                            onClick={setShowPassword}
                          />
                        )}
                      </>
                    }
                  />
                  {errors.password && (
                    <Typography component="p" variant="body2" color="error">
                      {errors.password}
                    </Typography>
                  )}
                </Grid>
              </Grid>
              {error && (
                <Typography component="p" variant="body2" color="error">
                  Неправильно указан Email и/или пароль
                </Typography>
              )}
              <StyledButton type="submit">
                {isLoading ? <CircularProgress size={30} /> : "Войти"}
              </StyledButton>
            </StyledForm>

            <Box className="change_login flex center gap">
              <Typography component="p" variant="body1">
                Нет аккаунта?
              </Typography>
              <Link to="/sign-up" className="link">
                <Typography component="span" variant="body1">
                  Зарегистрироваться
                </Typography>
              </Link>
            </Box>
          </StyledModal>
        ) : (
          ""
        )}
      </>
    </StyledProductCard>
  );
};
export default React.memo(ProductCard);

const StyledModal = styled(Modal)(({ theme }) => ({
  "& .MuiDialog-container": {
    background: "rgba(0,0,0,0.2)",
  },

  "& .MuiDialogContent-root": {
    padding: " 10px 0 40px 0",
  },

  "& .link": {
    color: theme.palette.secondary.light,
  },

  "& .text-box": {
    paddingBottom: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "20px",
  },

  "& .login-title": {
    fontWeight: "600",
  },
}));

const StyledInput = styled(Input)(() => ({
  width: "100%",
  height: "43px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: "white !important",
  width: "100%",
}));

const StyledForm = styled(Box)(() => ({
  gap: "24px",
  padding: "0 40px 12px",
}));

const Card_contend = styled(CardContent)(() => ({
  "& span": {
    fontSize: "0.8rem",
  },
}));
const StyletTitle = styled("h1")(() => ({
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "500",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box ",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
}));
const Discount_Styled = styled("div")(() => ({
  color: "white",
  width: "2vw",
  height: "2vw",
  fontWeight: "900",
  borderRadius: "50%",
  background: "red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "0.5rem",
}));
const Styled_Count = styled("p")(() => ({
  fontSize: "70%",
  color: "#2FC509",
}));
const StyledProductCard = styled(Card)(() => ({
  height: "100%",
  width: "17.4vw",
  display: "grid",
  gridRowGap: "1rem",
  "&:hover": {
    boxShadow: "0 0 10px rgba(0,0,0,0.6)",
  },
  "& .carsContent": {
    display: "grid",
    gridRowGap: "1vh",
  },
}));
const CardMedia_Styled = styled("img")(() => ({
  width: "60%",
  height: "100%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  aspectRatio: "1/1",
  objectFit: "contain",
}));
const Styled_Price = styled("p")(() => ({
  color: "#909CB5",
  fontSize: "0.8rem",
  textDecoration: "line-through",
}));
