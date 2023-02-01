import React from "react";
import Banner from "../../components/Banner";
import ProductCard from "../../components/UI/card/ProductCard";
import { product } from "../../assets/images";
import { Container, styled } from "@mui/material";
const Home = () => {
  return (
    <Container>
      <Banner />
      <ContainerCard>
        {product.map((item) => (
          <ProductCard key={item.id} {...item} sort="DISCOUNT" />
        ))}
      </ContainerCard>
    </Container>
  );
};

export default Home;

const ContainerCard = styled("section")(() => ({
  marginTop: "50px",
}));
