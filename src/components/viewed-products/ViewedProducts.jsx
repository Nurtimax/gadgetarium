import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import ViewedProductCard from "../UI/card/ViewedProductCard";

const ViewedProducts = () => {
  return (
    <StyledViewedProduct>
      <Typography classes={{ root: "typography" }} variant="h5">
        Просмотренные товары
      </Typography>
      <Grid container spacing={1}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid item key={item}>
            <ViewedProductCard />
          </Grid>
        ))}
      </Grid>
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
