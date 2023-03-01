import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import CartProductInBasket from "../CartProductInBasket";

const BasketItem = ({
  image,
  rating,
  countOfReviews,
  vendorCode,
  orderCount,
  price,
}) => {
  const [count, setCount] = useState(orderCount);

  return (
    <>
      <Checkbox
        color="secondary"
        className="checkbox-product"
        title="Отметить"
        style={{
          alignSelf: "flex-start",
        }}
      />

      <CartProductInBasket
        image={image}
        rating={rating}
        reviewCount={countOfReviews}
        code={vendorCode}
        count={count}
        price={price}
        onPlus={() => setCount(count + 1)}
        onMinus={() => setCount(count - 1)}
        isMinusDisabled={count === 0}
        isPlusDisabled={count === 10}
      />
    </>
  );
};

export default BasketItem;
