import { Box, styled } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { DeleteIcon, EditIcon } from "../../../assets";
import { removeProductsThunk } from "../../../redux/slices/goods-slice";

const TableCellEditAndDelete = ({ id }) => {
  const dispatch = useDispatch();

  const { params } = useSelector((state) => state.goods);

  const removeProducts = () => {
    dispatch(removeProductsThunk({ id, params })).then((res) => {
      if (res.payload.status === "ok") {
        return toast.success("Продукт успешно удален!");
      }
      return toast.error("Что-то не так с сервером или данными");
    });
  };

  return (
    <StyledTableCellEditAndDelete className="flex-start gap2">
      <Box className="pointer edit_icon">
        <EditIcon />
      </Box>
      <Box className="pointer delete_icon" onClick={removeProducts}>
        <DeleteIcon />
      </Box>
    </StyledTableCellEditAndDelete>
  );
};

export default TableCellEditAndDelete;

const StyledTableCellEditAndDelete = styled(Box)(() => ({
  height: "100%",
  width: " 100%",
  padding: "5px 0",
}));
