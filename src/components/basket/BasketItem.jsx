import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  deleteProductBasket,
  postProductToFavorite,
} from "../../redux/slices/basket-slice";
import CartProductInBasket from "../CartProductInBasket";
import PopUp from "../UI/PopUp";

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
  orderCount,
}) => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [text, setText] = useState("");
  const [dropDown, setDropDown] = useState(false);

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

  const closeDropDown = () => {
    setDropDown(false);
  };

  const onFavorite = () => {
    dispatch(postProductToFavorite([id])).then(() => {
      setText("Товар успешно добавлен в избранное!");
      setDropDown(true);
    });
  };

  const onDelete = () => {
    dispatch(deleteProductBasket([id]));
  };

  return (
    <>
      <PopUp
        open={dropDown}
        handleClose={closeDropDown}
        transitionTitle="Перейти в корзину"
        addedTitle={text}
        durationSnackbar={2000}
        icon={true}
        vertical="top"
        horizontal="right"
        to="/cart"
      />

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
        isMinusDisabled={productCount + orderCount == 1}
        isPlusDisabled={productCount + orderCount == countOfSubproduct}
        name={productName}
        onFavorite={onFavorite}
        onDelete={onDelete}
        id={id}
        productCount={productCount}
        orderCount={orderCount}
      />
    </>
  );
};

export default BasketItem;
