import { Box, Rating, styled, Typography } from "@mui/material";
import React from "react";
import { EmptyStarIcon, StarIcon } from "../../../assets";
import { priceProductSeparate } from "../../../utils/helpers/general";

const ViewedProductCard = () => {
  return (
    <StyledViewedProductCard image="https://gadgetarium-b7.s3.eu-central-1.amazonaws.com/1678370285804Rectangle.png">
      <Box className="image" />
      <Box className="padding">
        <Typography>Bluetooth Наушники Yison Е6</Typography>
        <Box className="box">
          Рейтинг
          <Rating
            name="simple-controlled"
            className="flex"
            value={5}
            readOnly
            icon={<StarIcon />}
            emptyIcon={<EmptyStarIcon />}
          />
          (19)
        </Box>
        <Typography component="h5" variant="h5">
          {priceProductSeparate(10000)} c
        </Typography>
      </Box>
    </StyledViewedProductCard>
  );
};

export default ViewedProductCard;

const StyledViewedProductCard = styled(Box)(({ image }) => ({
  width: "210px",
  height: "354px",
  borderRadius: "4px",
  background: "#FFFFFF",
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  "& .image": {
    width: "210px",
    height: "210px",
    background: `url(${image})`,
    borderRadius: "inherit",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  "& .box": {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "15px",
    color: "#909CB5",
    display: "flex",
    padding: "1px",
    gap: 6,
  },
}));
