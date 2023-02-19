import { Box } from "@mui/material";
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
        <ProductCard
          key={item.productName}
          img={item.productImage}
          title={item.productName}
          price={item.productPrice}
          status={item.productStatus}
          newprice={item.discountPrice}
          quantity={item.count}
          discount={item.discountPrice}
          rating={item.productRating}
          {...item}
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
