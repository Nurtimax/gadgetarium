import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionAddProductSlice } from "../../../redux/slices/add-product";

const EditCountProduct = () => {
  const { editData } = useSelector((state) => state.addProduct);
  const [available, setAvailable] = useState(editData.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setAvailable(editData.count);
  }, [editData]);

  const editCountHandler = () => {
    dispatch(
      ActionAddProductSlice.editData({ isChecked: "count", count: available })
    );
  };

  return (
    <StyledEditCountProduct onClick={editCountHandler}>
      {available}
    </StyledEditCountProduct>
  );
};

export default EditCountProduct;

const StyledEditCountProduct = styled(Box)(({ theme }) => ({
  padding: "20px",
  background: theme.palette.secondary.main + "31",
  borderRight: `.1px solid ${theme.palette.grey[600]}`,
}));
