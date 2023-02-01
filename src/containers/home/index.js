import React from "react";
import Banner from "../../components/Banner";
import ProductCard from "../../components/UI/card/ProductCard";
import { product } from "../../assets/images";
import { Container } from "@mui/material";
const Home = () => {
  return (
    <Container>
      <Banner />
      <>
        {product.map((item) => (
          <ProductCard key={item.id} {...item} sort="DISCOUNT" />
        ))}
      </>
    </Container>
  );
};

export default Home;
