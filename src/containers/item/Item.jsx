import { Container } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import ViewedProducts from "../../components/viewed-products/ViewedProducts";
import { fetchViewedProductThunk } from "../../redux/slices/viewed-product-slice";

const Item = () => {
  const dipatch = useDispatch();

  useEffect(() => {
    dipatch(fetchViewedProductThunk());
  }, []);

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
