import { styled } from "@mui/material";
import React from "react";
import ProductCardInBuscket from "../../components/ProductCardInBuscket";

const Cart = () => {
  return (
    <StyledCart>
      <ProductCardInBuscket />
    </StyledCart>
  );
};

export default Cart;

const StyledCart = styled("div")(() => ({
  width: "100%",
  height: "913px",
  backgroundColor: "#f4f4f4",
}));
