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
  Discount,
  Favorites,
  Comporation,
  // FavoritesRed,
  Like,
  New,
  ComporativePinkIcon,
  HeartActiveIcon,
} from "../../../assets";
const ProductCard = (props) => {
  const { title, price, img, sort } = props;
  const [rating, setRating] = useState(null);
  const [like, setLike] = useState(false);
  const [comporation, setComporation] = useState(false);
  const onChangeComporation = () => {
    setComporation((prev) => !prev);
  };
  const onChangeLike = () => {
    setLike(!like);
  };
  const onChangeRating = (e, newRating) => {
    setRating(newRating);
  };
  const sortState = (props) => {
    switch (props) {
      case "NEW":
        return <New title="Новинки" />;
      case "DISCOUNT":
        return <Discount title="Акции" />;
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
                  <ComporativePinkIcon
                    onClick={onChangeComporation}
                    cursor="pointer"
                    title="Удалить из сравнения"
                  />
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
                    cursor="pointer"
                    title="Добавить в избранное"
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
              В наличии (14)
            </Typography>

            <StyletTitle variant="h6" color="black">
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
              <Rating
                value={rating}
                onChange={onChangeRating}
                name="size-small"
                size="small"
              />
              (56)
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
                    {price} c
                  </Typography>
                  {sort !== "NEW" ? (
                    <Typography
                      variant="p"
                      color="#909CB5"
                      fontSize="16px"
                      style={{ textDecoration: "line-through" }}
                    >
                      109900 c
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
