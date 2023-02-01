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
    <Grid container>
      <Grid item>
        <Card sx={{ width: "300px", height: "500px" }}>
          <CardActions>
            <Grid container justifyContent="space-between" alignItems="center">
              {sortState(sort)}

              <Grid display="flex" gap="16px" alignItems="center">
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
          <CardMedia
            sx={{ height: 236, width: 180, margin: "0 auto" }}
            image={img}
            title={title}
          />
          <CardContent>
            <Typography component="div" color="#2FC509">
              В наличии ({quantity})
            </Typography>

            <StyletTitle variant="h6" color="black" title={title}>
              {title}
            </StyletTitle>
            <Typography
              variant="p"
              color="grey"
              display="flex"
              fontSize="12px"
              alignItems="center"
              margin="8px  0 16px 0"
            >
              Рейтинг
              <Rating name="size-small" size="small" defaultValue={rating} />(
              {rating})
            </Typography>

            <CardActions>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                marginTop="20px"
              >
                <Box>
                  <Typography variant="h4" fontSize="18px">
                    {newprice} c
                  </Typography>
                  {sort !== "NEW" ? (
                    <Typography
                      variant="p"
                      color="#909CB5"
                      fontSize="16px"
                      style={{ textDecoration: "line-through" }}
                    >
                      {price} c
                    </Typography>
                  ) : null}
                </Box>
                <IconButton title="Добавить в карзину" icon={<CartIcon />}>
                  В карзину
                </IconButton>
              </Grid>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
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
