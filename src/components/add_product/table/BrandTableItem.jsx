import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const BrandTableItem = () => {
  const { editData, Productbrand } = useSelector((state) => state.addProduct);
  const findedBrandItem = Productbrand.find(
    (product) => product.id === editData.brand
  );
  return (
    <StyledBrandTableItem>
      <Box className="brand_image">
        <img src={findedBrandItem?.image} alt="" />
      </Box>
      <Typography>{findedBrandItem?.brandName}</Typography>
    </StyledBrandTableItem>
  );
};

export default BrandTableItem;

const StyledBrandTableItem = styled(Box)(() => ({
  padding: "14px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiTypography-root": {
    padding: 0,
  },
  "& .brand_image": {
    "& img": {
      width: "20px",
      height: "20px",
      objectFit: "contain",
      mixBlendMode: "darken",
    },
  },
}));
