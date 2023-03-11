import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import ViewedProducts from "../../components/viewed-products/ViewedProducts";

const Item = () => {
  return (
    <>
      <Outlet />
      <Container>
        <ViewedProducts />
      </Container>
    </>
  );
};

export default Item;
