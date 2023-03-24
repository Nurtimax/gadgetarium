import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  styled,
  Typography,
  IconButton as MuiIconButton,
} from "@mui/material";
import PopUp from "../PopUp";
import IconButton from "../IconButton";
import { CartIcon, DeleteIconInCart } from "../../../assets";
import { priceProductSeparate } from "../../../utils/helpers/general";
import { postProductToBasket } from "../../../redux/slices/basket-slice";

import { deleteCompareProductsById } from "../../../redux/slices/compare-slice";

const CompareProductCard = ({
  image,
  price,
  id,
  productName,
  paramsCompare,
}) => {
  const basketData = useSelector((state) => state.basket.data);
  const [dropDown, setDropDown] = useState(false);

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const closeDropDown = () => {
    setDropDown(false);
  };
  const deleteByIdHandle = (id) => {
    dispatch(
      deleteCompareProductsById({
        id,
        params: paramsCompare,
      })
    );
  };

  const addBasketHandler = () => {
    if (basketData?.some((item) => item.id === id)) {
      alert("Товар уже добавлен!");
    } else {
      dispatch(
        postProductToBasket({
          orderCount: 154,
          id,
        })
      ).then(() => {
        setText(["Товар успешно добавлен в корзину!"]);

        setDropDown(true);
      });
    }
  };

  return (
    <StyledViewedProductCard image={image}>
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

      <Box className="box-button" onClick={() => deleteByIdHandle(id)}>
        <MuiIconButton className="delete_button">
          <DeleteIconInCart />
        </MuiIconButton>
      </Box>

      <Box className="image" />

      <Box className="info">
        <Typography className="product-name">{productName}</Typography>
        <Typography component="h5" variant="h5" className="price">
          {priceProductSeparate(price)} c
        </Typography>
      </Box>

      <Box className="card-button">
        <IconButton
          onClick={addBasketHandler}
          width="179px"
          height="41px"
          title="Добавить в карзину"
          fontSize="14px"
          icon={<CartIcon width="22px" />}
        >
          В корзину
        </IconButton>
      </Box>
    </StyledViewedProductCard>
  );
};

export default CompareProductCard;
const StyledViewedProductCard = styled(Box)(({ image }) => ({
  width: "219px",
  height: "367px",
  borderRadius: "4px",
  background: "#FFFFFF",
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  "&:hover": {
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  },
  "& .box-button": {
    width: "206px",
    height: "33px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "end",
  },
  "& .delete_button": {
    width: "20px",
    height: "20px",
    border: "1px solid #dee2e9",
    borderRadius: "50%",
    padding: "0",
  },
  "& .image": {
    width: "200px",
    height: "190px",
    background: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    margin: "auto",
  },
  "& .info": {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    padding: "18px 0 12px 22px",
  },
  "& .price": {
    fontWeight: 700,
    fontSize: "18px",
  },
  "& .card-button": { display: "flex", justifyContent: "center" },
}));
