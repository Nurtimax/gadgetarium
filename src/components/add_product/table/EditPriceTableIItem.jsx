import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionAddProductSlice } from "../../../redux/slices/add-product";

const EditPriceTableIItem = ({ id, price }) => {
  const { editData } = useSelector((state) => state.addProduct);
  const [total, setTotal] = useState(price);

  const dispatch = useDispatch();

  useEffect(() => {
    setTotal(price);
  }, [price]);

  const editPriceHandler = () => {
    dispatch(
      ActionAddProductSlice.editData({
        ...editData,
        isChecked: "price",
        price: Number(total),
        id,
      })
    );
  };

  return (
    <StyledEditPriceTableItem
      onClick={editPriceHandler}
      className={editData.errorPriceId.includes(Number(id)) ? "error" : ""}
    >
      {total}
    </StyledEditPriceTableItem>
  );
};

export default EditPriceTableIItem;

const StyledEditPriceTableItem = styled(Box)(({ theme }) => ({
  padding: "28.5px",
  background: theme.palette.secondary.main + "31",
  "&.error": {
    border: "1px solid red",
  },
}));
