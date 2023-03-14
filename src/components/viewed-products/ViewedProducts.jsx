import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import GadgetariumSpinnerLoading from "../GadgetariumSpinnerLoading";
import ViewedProductCard from "../UI/card/ViewedProductCard";

const ViewedProducts = () => {
  const { data, isLoading, errors } = useSelector((state) => state.viewed);

  if (isLoading) {
    return <GadgetariumSpinnerLoading />;
  }

  return (
    <StyledViewedProduct>
      <Typography classes={{ root: "typography" }} variant="h5">
        Просмотренные товары
      </Typography>
      {errors?.viewedProductError ? (
        <Typography classes={{ root: "typography" }} variant="h5">
          {errors.viewedProductError}
        </Typography>
      ) : (
        <>
          {!data?.viewedProducts.length ? (
            <Typography variant="h5">Нет продуктов</Typography>
          ) : (
            <Grid container spacing={1}>
              {data?.viewedProducts?.map((product) => (
                <Grid item key={product.productId}>
                  <ViewedProductCard {...product} />
                </Grid>
              ))}
            </Grid>
          )}
        </>
      )}
    </StyledViewedProduct>
  );
};

export default ViewedProducts;

const StyledViewedProduct = styled(Box)(() => ({
  padding: "80px 0 120px",
  "& .typography": {
    padding: "40px 0",
  },
}));
