import { Checkbox, Grid, styled } from "@mui/material";
import { useState } from "react";
import { ArrowOrderIcon, ArrowOrderIconRotate } from "../../assets";
import {
  titlesOrderPopUpOne,
  titlesOrderPopUpTwo,
} from "../../utils/constants";
import DropDown from "../UI/DropDown";

const OrderTableItem = ({ obj }) => {
  const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const openPopUpHandler = (e) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };

  return (
    <>
      <ContainerTableBodyList
        key={obj.id}
        onMouseEnter={() => setState(true)}
        onMouseLeave={() => setState(false)}
      >
        <Grid container>
          {state ? (
            <Grid item xs={0.65}>
              <TableCheckbox />
            </Grid>
          ) : (
            <Grid item xs={0.65}>
              {obj.id}
            </Grid>
          )}

          <Grid item xs={1.69}>
            {obj.username}
          </Grid>

          <Grid item xs={1.79}>
            <span>{obj.numberDate.number}</span>
            <span>{obj.numberDate.date}</span>
          </Grid>

          <Grid item xs={1.4}>
            {obj.quantity}
          </Grid>

          <Grid item xs={1.85}>
            {obj.allPrice}
          </Grid>

          <Grid item xs={2}>
            {obj.oformlenieOrder}
          </Grid>

          <Grid item xs={2.1} onClick={openPopUpHandler}>
            В обработке {open ? <ArrowOrderIconRotate /> : <ArrowOrderIcon />}
          </Grid>

          <Grid item>{obj.deleteIcon}</Grid>
        </Grid>
        {open && (
          <StyledDropDown
            vertical="top"
            horizontal="center"
            open={open}
            handleClose={handleClose}
            anchorEl={anchorEl}
          >
            {obj.oformlenieOrder === "Самовывоз"
              ? titlesOrderPopUpOne.map((text) => <li key={text}>{text}</li>)
              : titlesOrderPopUpTwo.map((text, i) => <li key={i}>{text}</li>)}
          </StyledDropDown>
        )}
      </ContainerTableBodyList>
    </>
  );
};

export default OrderTableItem;

const StyledDropDown = styled(DropDown)(({ theme }) => ({
  "& .MuiPaper-root": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  " ul": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "14px",
    color: theme.palette.primary.dark,
  },
}));

const TableCheckbox = styled(Checkbox)(() => ({
  width: "20px",
  height: "20px",
}));

const ContainerTableBodyList = styled("div")(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[600]}`,
  display: "flex",
  height: "74px",
  borderRadius: "6px",

  "&:hover": {
    backgroundColor: theme.palette.grey[600],
  },

  "& div:first-of-type": {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    color: theme.palette.primary.dark,

    " div:first-of-type": {
      padding: "15px 0 0 17px",
    },

    " div:nth-of-type(2)": {
      paddingTop: "15px",
    },

    " div:nth-of-type(3)": {
      paddingTop: "15px",
      display: "flex",
      flexDirection: "column",
      " span:first-of-type": {
        color: theme.palette.secondary.light,
      },

      " span:last-of-type": {
        color: theme.palette.grey[900],
        fontSize: "14px",
      },
    },

    " div:nth-of-type(4)": {
      paddingTop: "15px",
    },

    " div:nth-of-type(5)": {
      paddingTop: "15px",
    },

    " div:nth-of-type(6)": {
      paddingTop: "15px",
    },

    " div:nth-of-type(7)": {
      paddingTop: "15px",
      color: theme.palette.secondary.dark,
      cursor: "pointer",
    },

    " div:nth-of-type(8)": {
      paddingTop: "15px",
    },
  },
}));
