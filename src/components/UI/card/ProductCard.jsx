import React, { useMemo, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Rating,
  CardActions,
  Box,
  // CardMedia,
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
const ProductCard = (props) => {
  const {
    productName,
    discountPrice,
    productImage,
    productStatus,
    productPrice,
    count,
    // discount,
    productRating,
    countOfReview,
  } = props;
  const [like, setLike] = useState(false);
  const [comporation, setComporation] = useState(false);
  const onChangeComporation = () => {
    setComporation((prev) => !prev);
  };
  const onChangeLike = () => {
    setLike(!like);
  };

  const productSale = useMemo(() => {
    return Math.round((discountPrice / productPrice) * 100) - 100;
  });

  const sortStatus = useMemo(() => {
    switch (productStatus) {
      case "NEW":
        return <New title="Новинки" />;
      case "DISCOUNT":
        return <Discount_Styled title="Акции">{productSale}%</Discount_Styled>;
      case "RECOMMENDATION":
        return <Like title="Рекемендуем" />;

      default:
        return <div></div>;
    }
  }, [productStatus]);

  const onComponentComporation = useMemo(() => {
    switch (comporation) {
      case true:
        return (
          <ComporativePinkIcon
            onClick={onChangeComporation}
            cursor="pointer"
            title="Добавить к сравнению"
          />
        );
      case false:
        return (
          <Comporation
            onClick={onChangeComporation}
            cursor="pointer"
            title="Удалить из сравнения"
          />
        );
      default:
        return null;
    }
  }, [comporation]);
  const onComponentLike = useMemo(() => {
    switch (like) {
      case true:
        return (
          <HeartActiveIcon
            onClick={onChangeLike}
            cursor="pointer"
            title="Удалить из избранного"
          />
        );
      case false:
        return (
          <Favorites
            onClick={onChangeLike}
            width="22px"
            title="Добавить в избранное"
            cursor="pointer"
          />
        );
      default:
        return null;
    }
  }, [like]);
  return (
    <StyledProductCard>
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
      <CardContent tent className="carsContent">
        <Typography component="div" color="#2FC509">
          В наличии ({count})
        </Typography>

        <StyletTitle variant="h6" color="black" title={productName}>
          {productName}
        </StyletTitle>
        <Typography variant="p" className="flex size14">
          Рейтинг
          <Rating defaultValue={productRating} readOnly />({countOfReview})
        </Typography>
        <CardActions>
          <Grid container className="flex between ">
            <Box width="50px">
              {discountPrice > 0 ? (
                <Discount_Price>{discountPrice}c</Discount_Price>
              ) : (
                <Discount_Price>{productPrice}c</Discount_Price>
              )}

              {discountPrice > 0 ? (
                <Styled_Price>{productPrice}c</Styled_Price>
              ) : null}
            </Box>
            <IconButton
              title="Добавить в карзину"
              icon={<CartIcon style={{ width: "16px" }} />}
            >
              В_карзину
            </IconButton>
          </Grid>
        </CardActions>
      </CardContent>
    </StyledProductCard>
  );
};

export default React.memo(ProductCard);

const StyletTitle = styled("h1")(() => ({
  fontSize: "16px",
  // fontWeight: 500,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box ",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
}));
const Discount_Styled = styled("div")(() => ({
  color: "white",
  width: "36px",
  height: "36px",
  fontWeight: "900",
  borderRadius: "50%",
  background: "red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px",
}));

const StyledProductCard = styled(Card)(() => ({
  width: "210px",
  "&:hover": {
    boxShadow: "0 0 10px rgba(0,0,0,0.6)",
  },
  "& .carsContent": {
    display: "grid",
    gridRowGap: "5px",
  },
}));
const CardMedia_Styled = styled("img")(() => ({
  width: "180px",
  height: "236px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  aspectRatio: "3/2",
  objectFit: "contain",
}));
const Styled_Price = styled("p")(() => ({
  color: "#909CB5",
  fontSize: "14px",
  textDecoration: "line-through",
}));
const Discount_Price = styled("h1")(() => ({
  fontSize: "12px",
}));
