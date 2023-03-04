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
  price,
  countOfSubproduct,
  characteristics,
  color,
  productName,
  allChecked,
  id,
  setAllId,
  setSumOrderData,
  productCount,
}) => {
  const dispatch = useDispatch();

  const [check, setCheck] = useState(false);

  const onPlus = (id) => {
    setSumOrderData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            productCount: item.productCount + 1,
          };
        }

        return item;
      })
    );
  };

  const onMinus = (id) => {
    setSumOrderData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, productCount: item.productCount - 1 };
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
        price={price}
        color={color}
        memoryOfPhone={characteristics.memoryOfPhone}
        availableCount={countOfSubproduct}
        onPlus={onPlus}
        onMinus={onMinus}
        isMinusDisabled={productCount === 1}
        isPlusDisabled={productCount === countOfSubproduct}
        name={productName}
        onFavorite={onFavorite}
        onDelete={onDelete}
        id={id}
        productCount={productCount}
      />
    </>
  );
};

export default BasketItem;
