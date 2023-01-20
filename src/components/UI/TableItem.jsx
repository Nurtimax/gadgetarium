import { Checkbox, styled, TableBody, TableCell } from "@mui/material";
import React, { useState } from "react";

const TableItem = ({ obj }) => {
  const [state, setState] = useState(false);

  return (
    <ContainerTableBodyList
      key={obj.id}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      {state ? (
        <TableCell>
          <TableCheckbox />
        </TableCell>
      ) : (
        <TableCell>{obj.id}</TableCell>
      )}
      <img src={obj.photo} alt="tablePhoto" />
      <TableCell>{obj.vendor}</TableCell>
      <td>
        <div>{obj.nameOfProduct.quantityProduct}</div>
        <div>{obj.nameOfProduct.model}</div>
      </td>
      <td>
        <div>{obj.createOfDate.date}</div>
        <div>{obj.createOfDate.time}</div>
      </td>
      <TableCell>{obj.quantity}</TableCell>
      <td>
        <div>{obj.createOfDate.date}</div>
        <div>{obj.createOfDate.time}</div>
      </td>
      <TableCell>{obj.currentPrice}</TableCell>
      <td>
        {obj.action.edit}
        {obj.action.delete}
      </td>
    </ContainerTableBodyList>
  );
};

export default TableItem;

const TableCheckbox = styled(Checkbox)(() => ({
  width: "20px",
  height: "20px",
}));

const ContainerTableBodyList = styled(TableBody)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[600]}`,
  padding: "5px",
  display: "flex",
  borderRadius: "6px",

  "&:hover": {
    backgroundColor: theme.palette.grey[600],
  },

  "& td:nth-of-type(1)": {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    width: "20px",
    height: "20px",
    color: theme.palette.primary.dark,
    border: "none",
    paddingRight: "46px",
  },

  "& td:nth-of-type(2)": {
    border: "none",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    color: theme.palette.primary.dark,
    paddingLeft: "42px",
  },

  "& td:nth-of-type(3)": {
    paddingLeft: "36px",
    paddingTop: "17px",

    "& div:first-of-type": {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "16px",
      color: theme.palette.primary.dark,
    },

    "& div:last-child": {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "17px",
      color: theme.palette.grey[900],
    },
  },

  "& td:nth-of-type(4)": {
    paddingLeft: "70px",
    paddingTop: "17px",

    "& div:first-of-type": {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "16px",
      color: theme.palette.primary.dark,
    },

    "& div:last-child": {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "17px",
      color: theme.palette.grey[900],
    },
  },

  "& td:nth-of-type(5)": {
    paddingLeft: "89px",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    border: "none",
    color: theme.palette.primary.dark,
  },

  "& td:nth-of-type(6)": {
    paddingLeft: "120px",
    paddingTop: "17px",

    "& div:first-of-type": {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "16px",
      color: theme.palette.secondary.light,
    },

    "& div:last-child": {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "16px",
      color: theme.palette.error.main,
    },
  },

  "& td:nth-of-type(7)": {
    paddingLeft: "75px",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    border: "none",
    color: theme.palette.secondary.light,
  },

  "& td:nth-of-type(8)": {
    paddingTop: "17px",
    paddingLeft: "100px",
    display: "flex",
    gap: "24.17px",
  },
}));
