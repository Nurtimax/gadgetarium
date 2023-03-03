import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  deleteProductBasket,
  postProductToFavorite,
} from "../../redux/slices/basket-slice";
import CartProductInBasket from "../CartProductInBasket";

const BasketItem = ({
  image,
  rating,
  countOfReviews,
  vendorCode,
  orderCount,
  price,
  countOfSubproduct,
  characteristics,
  color,
  productName,
  allChecked,
  id,
  setAllId,
  setSumOrderData,
}) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(orderCount);
  const [check, setCheck] = useState(false);

  const onPlus = (id) => {
    setCount((prev) => prev + 1);

    setSumOrderData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            orderCount: orderCount + count,
          };
        }

        return item;
      })
    );

    if (count === countOfSubproduct) {
      alert("Больше нету!");
    }
  };

  const onMinus = (id) => {
    setCount((prev) => prev - 1);

    setSumOrderData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, orderCount: count - 1 };
        }

        return item;
      })
    );
  };

  const onChecked = (e) => {
    setCheck((prev) => !prev);

    if (e.target.value === "false") {
      setAllId((prev) => [...prev, id]);
    }

    if (e.target.value === "true") {
      setAllId((prev) => prev.filter((ID) => ID !== id));
    }
  };

  const onFavorite = () => {
    toast.promise(dispatch(postProductToFavorite([id])), {
      pending: "Pending",
      success: "Fovorite",
      error: "Error",
    });
  };

  const onDelete = () => {
    toast.promise(dispatch(deleteProductBasket([id])), {
      pending: "Pending",
      success: "Deleted",
      error: "Error",
    });
  };

  return (
    <>
      <Checkbox
        color="secondary"
        className="checkbox-product"
        title="Отметить"
        style={{
          alignSelf: "flex-start",
        }}
        checked={allChecked || check}
        onClick={onChecked}
        value={check}
      />

      <CartProductInBasket
        image={image}
        rating={rating}
        reviewCount={countOfReviews}
        code={vendorCode}
        count={count}
        price={price}
        color={color}
        memoryOfPhone={characteristics.memoryOfPhone}
        availableCount={countOfSubproduct}
        onPlus={onPlus}
        onMinus={onMinus}
        isMinusDisabled={count === 1}
        isPlusDisabled={count === countOfSubproduct + 1}
        name={productName}
        onFavorite={onFavorite}
        onDelete={onDelete}
        id={id}
      />
    </>
  );
};

export default BasketItem;
