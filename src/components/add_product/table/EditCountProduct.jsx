import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionAddProductSlice } from "../../../redux/slices/add-product-slice";

const EditCountProduct = ({ id, count }) => {
  const { editData } = useSelector((state) => state.addProduct);
  const [available, setAvailable] = useState(count);
  const dispatch = useDispatch();

  useEffect(() => {
    setAvailable(count);
  }, [count]);

  const editCountHandler = () => {
    dispatch(
      ActionAddProductSlice.editData({
        ...editData,
        isChecked: "countOfProduct",
        countOfProduct: Number(available),
        id,
      })
    );
  };

  return (
    <StyledEditCountProduct
      onClick={editCountHandler}
      className={editData.errorCountId.includes(Number(id)) ? "error" : ""}
    >
      {available}
    </StyledEditCountProduct>
  );
};

export default EditCountProduct;

const StyledEditCountProduct = styled(Box)(({ theme }) => ({
  padding: "28.5px",
  background: theme.palette.secondary.main + "31",
  borderRight: `.1px solid ${theme.palette.grey[600]}`,
  "&.error": {
    border: "1px solid red",
  },
}));
