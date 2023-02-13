import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/Banner";
import ProductCard from "../../components/UI/card/ProductCard";
import { Container, Grid, styled, Typography } from "@mui/material";
import { ActionauthenticationSlice } from "../../redux/slices/authentication";
import { GADJEDTARIUM_LOGIN_INFO } from "../../utils/constants/fetch";
import {
  fetchNewProduct,
  fetchRecomendationProduct,
  fetchDiscountProduct,
} from "../../redux/slices/productSlice";
import Button from "../../components/UI/button/Button";
import Skeleton from "../../components/UI/card/Skeleton";

const authSave = JSON.parse(localStorage.getItem(GADJEDTARIUM_LOGIN_INFO));

const Home = () => {
  const [size, setSize] = useState({
    news: 5,
    discount: 5,
    recomendation: 5,
  });
  const onClickSize = useCallback(
    (e) => {
      setSize((prev) => ({ ...prev, [e.target.id]: prev[e.target.id] + 5 }));
    },
    [size]
  );

  const dispatch = useDispatch();

  const {
    newProducts,
    recommendationProduct,
    discountsProducts,
    status,
    newError,
    discountError,
    recomenError,
  } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(ActionauthenticationSlice.authLogIn(authSave));
  }, []);

  useEffect(() => {
    dispatch(fetchRecomendationProduct(size.recomendation));
    dispatch(fetchNewProduct(size.news));
    dispatch(fetchDiscountProduct(size.discount));
  }, [size]);

  return (
    <>
      <Banner />
      <Container>
        <Container_Card>
          {discountError ? (
            <Styled_Error>Error {discountError} </Styled_Error>
          ) : (
            <Global_Card>
              {status === "loading" ? (
                <Sceleton_Card>
                  <Grid container className="flex   gap2" spacing={-3}>
                    {discountsProducts?.map((item) => (
                      <Grid item xs={2.3} key={item.productName}>
                        <Skeleton />
                      </Grid>
                    ))}
                  </Grid>
                </Sceleton_Card>
              ) : (
                <>
                  <Typography variant="h4">Акции</Typography>
                  <Grid container spacing={2.2}>
                    {discountsProducts?.map((item) => (
                      <Grid item xs={2.4} key={item.productName}>
                        <ProductCard {...item} productStatus="DISCOUNT" />
                      </Grid>
                    ))}
                  </Grid>
                  <Typography className="flex center gap" variant="div">
                    <Button
                      variant="outlined"
                      onClick={onClickSize}
                      id="discount"
                      disabled={discountsProducts.length !== 5}
                    >
                      Показать ещё
                    </Button>
                  </Typography>
                </>
              )}
            </Global_Card>
          )}

          {newError ? (
            <Styled_Error>Error {newError}</Styled_Error>
          ) : (
            <Global_Card>
              <Typography variant="h4">Новинки</Typography>
              <Grid container className="flex  gap2" spacing={2.2}>
                {newProducts?.map((item) => (
                  <Grid item xs={2.3} key={item.productName}>
                    <ProductCard {...item} />
                  </Grid>
                ))}
              </Grid>
              <Typography className="flex center" variant="div">
                <Button
                  variant="outlined"
                  onClick={onClickSize}
                  id="news"
                  disabled={newProducts.length !== 5}
                >
                  Показать ещё
                </Button>
              </Typography>
            </Global_Card>
          )}
          {recomenError ? (
            <Styled_Error>Error {recomenError}</Styled_Error>
          ) : (
            <Global_Card>
              <Typography variant="h4">Мы рекомендуем</Typography>
              <Grid container className="flex  gap2" spacing={2.5}>
                {recommendationProduct?.map((item) => (
                  <Grid item sx={2.3} key={item.productName}>
                    <ProductCard {...item} />
                  </Grid>
                ))}
              </Grid>
              <Typography className="flex center" variant="div">
                <Button
                  variant="outlined"
                  onClick={onClickSize}
                  id="recomendation"
                  disabled={recommendationProduct.length !== 5}
                >
                  Показать ещё
                </Button>
              </Typography>
            </Global_Card>
          )}
        </Container_Card>
      </Container>
    </>
  );
};

export default Home;
const Container_Card = styled("div")(() => ({
  maxWidth: "100%",
  display: "grid",
  gap: 120,
  padding: "130px 0",
  "& section:first-of-type": {
    marginTop: "147px",
  },
}));
const Global_Card = styled("section")(() => ({
  display: "grid",
  gap: 40,
}));

const Styled_Error = styled("h1")(() => ({
  color: "red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "7%",
}));
const Sceleton_Card = styled("div")(() => ({
  padding: " 30px 0 0 15px",
  display: "grid",
  gap: 4,
  marginTop: "60px",
}));
