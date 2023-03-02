import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionAddProductSlice } from "../../../redux/slices/add-product";

const EditPriceTableIItem = () => {
  const { editData } = useSelector((state) => state.addProduct);
  const [total, setTotal] = useState(editData.price);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotal(editData.price);
  }, [editData]);

  const editPriceHandler = () => {
    dispatch(
      ActionAddProductSlice.editData({ isChecked: "price", price: total })
    );
  };

  return (
    <StyledEditPriceTableItem onClick={editPriceHandler}>
      {total}
    </StyledEditPriceTableItem>
  );
};

export default EditPriceTableIItem;

const StyledEditPriceTableItem = styled(Box)(({ theme }) => ({
  padding: "20px",
  background: theme.palette.secondary.main + "31",
}));
