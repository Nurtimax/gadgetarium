import { Box, Rating, styled, Typography } from "@mui/material";
import React from "react";
import { EmptyStarIcon, StarIcon } from "../../assets";

const HistoryCard = () => {
  return (
    <div>
      <StyledViewedProductCard image="https://mstore.kg/wp-content/uploads/2021/11/iphone-13-pink-select-2021-1.png">
        <Box className="image" />
        <Box className="padding info">
          <Typography component="p" className="title">
            iphone 14 pro max
          </Typography>
          <Box className="box">
            Рейтинг
            <Rating
              name="simple-controlled"
              className="flex"
              // value={productRating / 5}
              value={4}
              readOnly
              icon={<StarIcon />}
              emptyIcon={<EmptyStarIcon />}
            />
            {/* ({productRating}) */}
          </Box>
          <Typography component="h5" variant="h5" className="price">
            {/* {priceProductSeparate(productPrice)} c */}2000c
          </Typography>
        </Box>
      </StyledViewedProductCard>
    </div>
  );
};

export default HistoryCard;
const StyledViewedProductCard = styled(Box)(({ image }) => ({
  width: "210px",
  height: "354px",
  borderRadius: "4px",
  background: "#FFFFFF",
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  "& .image": {
    width: "200px",
    height: "220px",
    background: `url(${image})`,
    borderRadius: "inherit",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
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
  "& .info": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "40%",
  },
  "& .price": {
    fontWeight: 700,
    fontSize: "18px",
  },
  "& .title": {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    color: "#292929",
  },
}));
