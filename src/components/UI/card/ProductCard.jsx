import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
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
const ProductCard = (props) => {
  const { title, price, img, sort, newprice, quantity, discount, rating } =
    props;
  const [like, setLike] = useState(false);
  const [comporation, setComporation] = useState(false);
  const onChangeComporation = () => {
    setComporation((prev) => !prev);
  };
  const onChangeLike = () => {
    setLike(!like);
  };

  const sortState = (props) => {
    switch (props) {
      case "NEW":
        return <New title="Новинки" />;
      case "DISCOUNT":
        return <Discount_Styled title="Акции">-{discount}%</Discount_Styled>;
      case "LIKE":
        return <Like title="Рекемендуем" />;

      default:
        return <div></div>;
    }
  };

  return (
    <StyledProductCard>
      <CardActions>
        <Grid className="between" container>
          {sortState(sort)}

          <Grid gap="16px" className="flex">
            {comporation ? (
              <>
                <ComporativePinkIcon
                  onClick={onChangeComporation}
                  cursor="pointer"
                  title="Удалить из сравнения"
                />
              </>
            ) : (
              <Comporation
                onClick={onChangeComporation}
                cursor="pointer"
                title="Добавить к сравнению"
              />
            )}

            {like ? (
              <HeartActiveIcon
                onClick={onChangeLike}
                cursor="pointer"
                title="Удалить из избранного"
              />
            ) : (
              <Favorites
                onClick={onChangeLike}
                width="22px"
                title="Добавить в избранное"
                cursor="pointer"
              />
            )}
          </Grid>
        </Grid>
      </CardActions>
      <CardMedia_Styled image={img} title={title} />
      <CardContent>
        <Typography component="div" color="#2FC509">
          В наличии ({quantity})
        </Typography>

        <StyletTitle variant="h6" color="black" title={title}>
          {title}
        </StyletTitle>
        <Typography variant="p" className="flex">
          Рейтинг
          <Rating size="small" defaultValue={rating} />({rating})
        </Typography>

        <CardActions>
          <Grid container className="flex between">
            <Box>
              <Typography variant="h4" fontSize="18px">
                {newprice} c
              </Typography>
              {sort !== "NEW" ? <Styled_Price>{price} c</Styled_Price> : null}
            </Box>
            <IconButton title="Добавить в карзину" icon={<CartIcon />}>
              В карзину
            </IconButton>
          </Grid>
        </CardActions>
      </CardContent>
    </StyledProductCard>
  );
};

export default ProductCard;

const StyletTitle = styled("h1")(() => ({
  fontSize: "16px",
  fontWeight: 500,
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
  width: "300px",
  "&:hover": {
    boxShadow: "0 0 10px rgba(0,0,0,0.6)",
  },
}));
const CardMedia_Styled = styled(CardMedia)(() => ({
  width: "180px",
  height: "236px",
  margin: "0 auto",
}));
const Styled_Price = styled("p")(() => ({
  color: "#909CB5",
  fontSize: "16px",
  textDecoration: "line-through",
}));
