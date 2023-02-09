import { Checkbox, Grid, styled } from "@mui/material";
import { useState } from "react";

const TableItem = ({ obj }) => {
  const [state, setState] = useState(false);

  return (
    <ContainerTableBodyList
      key={obj.id}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      <Grid container>
        {state ? (
          <Grid item xs={0.64} style={{ padding: "10px 0 0 17px" }}>
            <TableCheckbox />
          </Grid>
        ) : (
          <Grid item xs={0.64} style={{ padding: "10px 0 0 17px" }}>
            {obj.id}
          </Grid>
        )}
        <Grid item xs={0.88}>
          <img src={obj.photo} alt="tablePhoto" />
        </Grid>

        <Grid item xs={1.19}>
          {obj.vendor}
        </Grid>

        <Grid item xs={2.38}>
          <div>{obj.nameOfProduct.quantityProduct}</div>
          <div>{obj.nameOfProduct.model}</div>
        </Grid>

        <Grid item xs={1.7}>
          <div>{obj.createOfDate.date}</div>
          <div>{obj.createOfDate.time}</div>
        </Grid>

        <Grid item xs={1.4}>
          {obj.quantity}
        </Grid>

        <Grid item xs={1.4}>
          <div>{obj.priceOfProduct.price}</div>
          <div>{obj.priceOfProduct.discount}</div>
        </Grid>

        <Grid item xs={1.6}>
          {obj.currentPrice}
        </Grid>

        <Grid item>
          {obj.action.edit}
          {obj.action.delete}
        </Grid>
      </Grid>
    </ContainerTableBodyList>
  );
};

export default TableItem;

const TableCheckbox = styled(Checkbox)(() => ({
  width: "20px",
  height: "20px",
}));

const ContainerTableBodyList = styled("div")(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[600]}`,
  padding: "5px",
  display: "flex",
  borderRadius: "6px",

  "&:hover": {
    backgroundColor: theme.palette.grey[600],
  },

  "& div:first-of-type": {
    display: "flex",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    color: theme.palette.primary.dark,
  },

  "& div:nth-of-type(3)": {
    paddingTop: "10px",
  },

  "& div:nth-of-type(4)": {
    paddingTop: "10px",
    "div:last-of-type": {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "14px",
      color: theme.palette.grey[900],
    },
  },

  "& div:nth-of-type(5)": {
    paddingTop: "10px",
    "div:last-of-type": {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "14px",
      color: theme.palette.grey[900],
    },
  },

  "& div:nth-of-type(6)": {
    paddingTop: "10px",
  },

  "& div:nth-of-type(7)": {
    paddingTop: "10px",
    "div:first-of-type": {
      color: theme.palette.secondary.light,
    },

    "div:last-of-type": {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "14px",
      color: theme.palette.error.main,
    },
  },

  "& div:nth-of-type(8)": {
    paddingTop: "10px",
    color: theme.palette.secondary.light,
  },

  "& div:nth-of-type(9)": {
    paddingTop: "10px",
    display: "flex",
    gap: "24.17px",
  },
}));
