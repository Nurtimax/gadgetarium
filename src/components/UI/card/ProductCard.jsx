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
} from "../../../assets";
import { priceProductSeparate } from "../../../utils/helpers/general";
import { useDispatch, useSelector } from "react-redux";
import { postProductToBasket } from "../../../redux/slices/basket-slice";
import { toast } from "react-toastify";

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
    ...rest
  } = props;

  const basketData = useSelector((state) => state.basket.data);

  const dispatch = useDispatch();

  const addBasketHandler = () => {
    if (basketData?.some((item) => item.id === productId)) {
      alert("Товар уже добавлен!");
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
        return <div></div>;
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

  const onComponentLike = useMemo(() => {
    if (favorite) {
      return (
        <HeartActiveIcon
          cursor="pointer"
          title="Удалить из избранного"
          width="3.5vh"
          height="3.5vh"
        />
      );
    }
    return (
      <Favorites
        width="3.5vh"
        height="3.5vh"
        title="Добавить в избранное"
        cursor="pointer"
      />
    );
  }, [favorite]);

  return (
    <StyledProductCard {...rest}>
      <CardActions>
        <Grid className="between" container>
          {sortStatus}
          <Grid className="flex gap2">
            {onComponentComporation}
            {onComponentLike}
          </Grid>
        </Grid>
      </CardActions>
      <CardMedia_Styled
        src={productImage}
        title={productName}
        alt={productName}
      />
      <Card_contend className="carsContent">
        <Styled_Count>В наличии ({count})</Styled_Count>
        <StyletTitle color="black" title={productName}>
          {productName}
        </StyletTitle>
        <Typography variant="span" className="flex size">
          Рейтинг
          <Rating value={productRating} readOnly />({countOfReview})
        </Typography>
        <CardActions>
          <Grid container className="flex between ">
            <Box width="30%" marginLeft="-10px">
              {discountPrice > 0 ? (
                <Typography variant="h1" fontSize="0.8rem">
                  {priceProductSeparate(Number(String(discountPrice || 0)))}c
                </Typography>
              ) : (
                <Typography variant="h1" fontSize="0.8rem">
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
              width="70%"
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
    </StyledProductCard>
  );
};
export default React.memo(ProductCard);
const Card_contend = styled(CardContent)(() => ({
  "& span": {
    fontSize: "0.8rem",
  },
}));
const StyletTitle = styled("h1")(() => ({
  fontSize: "1rem",
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
  width: "16.5vw",
  height: "100%",
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
  fontSize: "0.7rem",
  textDecoration: "line-through",
}));
