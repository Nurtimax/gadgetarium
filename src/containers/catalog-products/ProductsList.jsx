import { Box, styled } from "@mui/material";
import React, { useCallback } from "react";
import Button from "../../components/UI/button/Button";
import ProductCard from "../../components/UI/card/ProductCard";

const ProductsList = ({ data, setSize, size }) => {
  const onClickSize = useCallback(() => {
    setSize(size + 12);
  }, [size]);
  return (
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        paddingBottom: "20px",
      }}
    >
      {data.products?.map((item) => (
        <ProductCardStyled
          {...item}
          key={item.productName}
          productStatus={
            item.discountPrice > 0 ? "DISCOUNT" : item.productStatus
          }
        />
      ))}

      {data.products?.length >= 12 ? (
        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "32px 0px",
          }}
        >
          <Button onClick={onClickSize} height="43px" variant="outlined">
            Показать ещё
          </Button>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default ProductsList;

const ProductCardStyled = styled(ProductCard)(() => ({
  width: "227.5px !important",

  "& .css-1mwp0i7": {
    width: "80%",
  },
  "& .css-1ixqkpz": { fontSize: "12px" },
  "& .css-1qqw7q9": {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "22px",
    textTransform: "capitalize",
  },
  "& .MuiButtonBase-root": { fontSize: "14px" },
  "& .MuiTypography-h1": {
    fontSize: "14px",
    fontWeight: "700",
  },
  "& .MuiTypography-span": {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "12px",
    color: " #909CB5",
  },
}));
