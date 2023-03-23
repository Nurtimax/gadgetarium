import { MenuItem, styled, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ArrowOrderIcon, ArrowOrderIconRotate } from "../../assets";
import { updateOrderProducts } from "../../redux/slices/orders-slice";
import {
  titlesOrderPopUpOne,
  titlesOrderPopUpTwo,
} from "../../utils/constants";
import { checkInOrderStatus } from "../../utils/helpers/general";
import DropDown from "../UI/DropDown";

const Select = ({ orderStatus, orderType, id }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchParams] = useSearchParams();
  const currentStatus = searchParams.get("orderStatus");
  const currentPage = searchParams.get("page_index");

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const openPopUpHandler = (e) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };

  const selectHandler = (e) => {
    setOpen(false);

    toast.promise(
      dispatch(
        updateOrderProducts({
          id,
          orderStatus: e.target.id,
          currentStatus,
          currentPage,
        })
      ),

      {
        pending: `Заказ ожидается в ${checkInOrderStatus(e.target.id)}`,
        success: `Заказ перемещён в ${checkInOrderStatus(e.target.id)}`,
        error: `Заказ не перемещён в ${checkInOrderStatus(e.target.id)}`,
      }
    );
  };

  const renderedMenuItems =
    orderType === "PICKUP" ? titlesOrderPopUpOne : titlesOrderPopUpTwo;

  return (
    <div>
      <StyledTextStatus
        onClick={openPopUpHandler}
        variant="span"
        title="Выбрать статус заказа"
      >
        {checkInOrderStatus(orderStatus || "Don't have")}
        {open ? <ArrowOrderIconRotate /> : <ArrowOrderIcon />}
      </StyledTextStatus>

      {open && (
        <StyledDropDown
          vertical="top"
          horizontal="right"
          open={open}
          handleClose={handleClose}
          anchorEl={anchorEl}
        >
          {renderedMenuItems.map((item, i) => (
            <MenuItem onClick={selectHandler} id={item.tab} key={i}>
              {checkInOrderStatus(orderStatus) !== item.text ? item.text : ""}
            </MenuItem>
          ))}
        </StyledDropDown>
      )}
    </div>
  );
};

export default Select;

const StyledTextStatus = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  color: theme.palette.secondary.dark,
  "& svg": {
    marginLeft: "5px",
  },
}));

const StyledDropDown = styled(DropDown)(({ theme }) => ({
  "& .MuiPaper-root": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 40px 20px 20px",
  },

  "& .MuiList-root": {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "14px",
    color: theme.palette.primary.main,
    textAlign: "left",

    " li": {
      cursor: "pointer",
    },
    " li:hover": {
      color: theme.palette.secondary.main,
    },
  },

  "& .MuiMenuItem-root": {
    padding: "0",
  },
}));
