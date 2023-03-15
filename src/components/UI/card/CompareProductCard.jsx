import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  IconButton as MuiIconButton,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartIcon, DeleteIconInCart } from "../../../assets";
import { postProductToBasket } from "../../../redux/slices/basket-slice";
import { priceProductSeparate } from "../../../utils/helpers/general";
import IconButton from "../IconButton";
import PopUp from "../PopUp";

const CompareProductCard = ({
  productImage,
  productName,
  productId,
  productPrice,
  count,
  discountPrice,
  rest,
}) => {
  const basketData = useSelector((state) => state.basket.data);

  const [text, setText] = useState("");

  const [dropDown, setDropDown] = useState(false);

  const dispatch = useDispatch();

  const closeDropDown = () => {
    setDropDown(false);
  };

  const addBasketHandler = () => {
    if (basketData?.some((item) => item.id === productId)) {
      alert("Товар уже добавлен!");
    } else {
      dispatch(
        postProductToBasket({
          orderCount: count,
          productId,
        })
      ).then(() => {
        setText("Товар успешно добавлен в корзину!");
        setDropDown(true);
      });
    }
  };
  return (
    <div>
      <PopUp
        open={dropDown}
        handleClose={closeDropDown}
        transitionTitle="Перейти в корзину"
        addedTitle={text}
        durationSnackbar={2000}
        icon={true}
        vertical="bottom"
        horizontal="right"
        to="/cart"
      />

      <StyledProductCard {...rest}>
        <CardActions>
          <Grid className="between" container>
            <MuiIconButton>
              <DeleteIconInCart />
            </MuiIconButton>
          </Grid>
        </CardActions>
        <CardMedia
          component="img"
          image={productImage}
          title={productName}
          alt={productName}
        />
        <Card_contend className="carsContent">
          <StyletTitle color="black" title={productName}>
            {productName}
          </StyletTitle>

          <CardActions style={{ display: "flex", flexDirection: "column" }}>
            <Box width="100%" marginLeft="-10px">
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
              width="179px"
              height="2.5vw"
              title="Добавить в карзину"
              fontSize="0.5rem"
              icon={<CartIcon width="1.5vw" />}
            >
              В корзину
            </IconButton>
          </CardActions>
        </Card_contend>
      </StyledProductCard>
    </div>
  );
};

export default CompareProductCard;
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
// const Discount_Styled = styled("div")(() => ({
//   color: "white",
//   width: "2vw",
//   height: "2vw",
//   fontWeight: "900",
//   borderRadius: "50%",
//   background: "red",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   fontSize: "0.5rem",
// }));
// const Styled_Count = styled("p")(() => ({
//   fontSize: "70%",
//   color: "#2FC509",
// }));
const StyledProductCard = styled(Card)(() => ({
  width: "219px",
  height: "367px",
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
// const CardMedia_Styled = styled("img")(() => ({
//   width: "70%",
//   height: "100%",
//   margin: "0 auto",
//   display: "flex",
//   justifyContent: "center",
//   //   aspectRatio: "1/1",
//   //   objectFit: "contain",
//   backgroundBlendMode: "color-burn",
// }));
const Styled_Price = styled("p")(() => ({
  color: "#909CB5",
  fontSize: "0.7rem",
  textDecoration: "line-through",
}));
