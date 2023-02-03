import { styled } from "@mui/material";
import React from "react";
import { ImageProductCardInBuscket } from "../../assets";
import ProductCardInBuscket from "../../components/ProductCardInBuscket";

const Cart = () => {
  return (
    <StyledCart>
      <ProductCardInBuscket
        nameProduct="Samsung Galaxy S21 128gb синий"
        serialNumber="9(MLP3RU)"
        ImageProductCardInBuscket={ImageProductCardInBuscket}
        gradeNumber={138}
        rating={5}
        inStock={42}
        codeProduct={393478}
        initialValueCount={1}
        resetValueCount={0}
        maxNumberCount={42}
        minNumberCount={0}
        priceProduct={123456}
      />
    </StyledCart>
  );
};

export default Cart;

const StyledCart = styled("div")(() => ({
  width: "100%",
  height: "913px",
  backgroundColor: "#f4f4f4",
}));
