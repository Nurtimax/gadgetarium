import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/Banner";
import ProductCard from "../../components/UI/card/ProductCard";
import {
  CircularProgress,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import {
  fetchNewProduct,
  fetchRecomendationProduct,
  fetchDiscountProduct,
} from "../../redux/slices/product-slice";
import Button from "../../components/UI/button/Button";
import { getBasketProduct } from "../../redux/slices/basket-slice";
import { getFavoriteProducts } from "../../redux/slices/favorite-slice";

const Home = () => {
  const {
    product: {
      newProducts,
      recommendationProduct,
      discountsProducts,
      newStatus,
      disStatus,
      recStatus,
      newError,
      discountError,
      recomenError,
    },
  } = useSelector((store) => store);

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

  useEffect(() => {
    dispatch(fetchNewProduct(size.news));
  }, [size.news]);

  useEffect(() => {
    dispatch(fetchDiscountProduct(size.discount));
  }, [size.discount]);

  useEffect(() => {
    dispatch(fetchRecomendationProduct(size.recomendation));
  }, [size.recomendation]);

  useEffect(() => {
    dispatch(getBasketProduct());
    dispatch(getFavoriteProducts());
  }, [dispatch]);

  return (
    <>
      <Banner />
      <Container>
        <Container_Card>
          <div id="Promotion"></div>

          {discountError ? (
            <Styled_Error>Error {discountError} </Styled_Error>
          ) : (
            <Global_Card>
              <Typography variant="h4">Акции</Typography>
              <Grid container spacing={1}>
                {discountsProducts?.map((product) => (
                  <Grid item xs={2.4} key={product.productId}>
                    <ProductCard
                      categoryId={product.categoryId}
                      compared={product.compared}
                      count={product.count}
                      countOfReview={product.countOfReview}
                      discountPrice={product.discountPrice}
                      favorite={product.favorite}
                      productId={product.productId}
                      productImage={product.productImage}
                      productName={product.productName}
                      productPrice={product.productPrice}
                      productRating={product.productRating}
                      productStatus={product.productStatus}
                      viewed={product.viewed.toString()}
                      size={size}
                    />
                  </Grid>
                ))}
              </Grid>
              <Typography className="flex center gap" variant="div">
                {disStatus === "loading" ? (
                  <CircularProgress color="secondary" />
                ) : (
                  <Button
                    width="30vh"
                    height="5vh"
                    variant="outlined"
                    onClick={onClickSize}
                    id="discount"
                    disabled={discountsProducts.length !== size.discount}
                  >
                    Показать ещё
                  </Button>
                )}
              </Typography>
            </Global_Card>
          )}

          <div id="New"></div>

          {newError ? (
            <Styled_Error>Error {newError}</Styled_Error>
          ) : (
            <Global_Card>
              <Typography variant="h4">Новинки</Typography>
              <Grid container spacing={1}>
                {newProducts?.map((product) => (
                  <Grid item xs={2.4} key={product.productId}>
                    <ProductCard
                      categoryId={product.categoryId}
                      compared={product.compared}
                      count={product.count}
                      countOfReview={product.countOfReview}
                      discountPrice={product.discountPrice}
                      favorite={product.favorite}
                      productId={product.productId}
                      productImage={product.productImage}
                      productName={product.productName}
                      productPrice={product.productPrice}
                      productRating={product.productRating}
                      productStatus={product.productStatus}
                      viewed={product.viewed.toString()}
                      size={size}
                    />
                  </Grid>
                ))}
              </Grid>
              <Typography className="flex center" variant="div">
                {newStatus === "loading" ? (
                  <CircularProgress color="secondary" />
                ) : (
                  <Button
                    width="30vh"
                    height="5vh"
                    variant="outlined"
                    onClick={onClickSize}
                    id="news"
                    disabled={newProducts.length !== size.news}
                  >
                    Показать ещё
                  </Button>
                )}
              </Typography>
            </Global_Card>
          )}

          <div id="Recomendation"></div>

          {recomenError ? (
            <Styled_Error>Error {recomenError}</Styled_Error>
          ) : (
            <Global_Card>
              <Typography variant="h4">Рекемендуем</Typography>
              <Grid container spacing={2}>
                {recommendationProduct?.map((product) => (
                  <Grid item xs={2.4} key={product.productId}>
                    <ProductCard
                      categoryId={product.categoryId}
                      compared={product.compared}
                      count={product.count}
                      countOfReview={product.countOfReview}
                      discountPrice={product.discountPrice}
                      favorite={product.favorite}
                      productId={product.productId}
                      productImage={product.productImage}
                      productName={product.productName}
                      productPrice={product.productPrice}
                      productRating={product.productRating}
                      productStatus={product.productStatus}
                      viewed={product.viewed.toString()}
                      size={size}
                    />
                  </Grid>
                ))}
              </Grid>
              <Typography className="flex center" variant="div">
                {recStatus === "loading" ? (
                  <CircularProgress color="secondary" />
                ) : (
                  <Button
                    width="30vh"
                    height="5vh"
                    variant="outlined"
                    onClick={onClickSize}
                    id="recomendation"
                    disabled={
                      recommendationProduct.length !== size.recomendation
                    }
                  >
                    Показать ещё
                  </Button>
                )}
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
  maxWidth: "100% ",
  display: "grid",
  gap: 120,
  padding: "200px 0 130px 0",
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
