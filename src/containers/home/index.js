import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "../../components/Banner";
import ProductCard from "../../components/UI/card/ProductCard";
import { product } from "../../assets/images";
import { Container, styled } from "@mui/material";
import { ActionauthenticationSlice } from "../../redux/slices/authentication";
import { GADJEDTARIUM_LOGIN_INFO } from "../../utils/constants/fetch";
import { fetchProduct } from "../../redux/slices/productSlice";

const authSave = JSON.parse(localStorage.getItem(GADJEDTARIUM_LOGIN_INFO));
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionauthenticationSlice.authLogIn(authSave));
    dispatch(fetchProduct());
  }, []);

  return (
    <Container>
      <Banner />
      <ContainerCard>
        {product.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ContainerCard>
    </Container>
  );
};

export default Home;

const ContainerCard = styled("section")(() => ({
  marginTop: "50px",
}));
