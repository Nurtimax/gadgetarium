import { Box, CircularProgress, styled } from "@mui/material";
import React, { useCallback } from "react";
import Button from "../../components/UI/button/Button";
import ProductCard from "../../components/UI/card/ProductCard";

const ProductsList = ({
  data,
  setSize,
  size,
  isLoading,
  sortField,
  discountField,
}) => {
  const onClickSize = useCallback(() => {
    setSize(size + 12);
  }, [size]);

  const changeProductStatusHelper = (
    sortedName,
    discountSortedName,
    discount,
    status
  ) => {
    if (sortedName === "Новинки") {
      return "NEW";
    }
    if (sortedName === "По акции") {
      if (discountSortedName) return "DISCOUNT";
    }
    if (sortedName === "Рекомендуемые") {
      return "RECOMMENDATION";
    }
    if (discount > 0) {
      return "DISCOUNT";
    }
    return status;
  };

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
          productStatus={changeProductStatusHelper(
            sortField,
            discountField,
            item.discountPrice,
            item.productStatus
          )}
        />
      ))}

      {isLoading ? (
        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "32px 0px",
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <>
          {data.products?.length >= 12 ? (
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "32px 0px",
              }}
            >
              <Button
                onClick={onClickSize}
                height="43px"
                variant="outlined"
                disabled={data.products.length !== size}
              >
                Показать ещё
              </Button>
            </Box>
          ) : (
            ""
          )}
        </>
      )}
    </Box>
  );
};

export default ProductsList;

const ProductCardStyled = styled(ProductCard)(() => ({
  width: "246.5px !important",

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
  "& .MuiButtonBase-root": { fontSize: "80%" },
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
