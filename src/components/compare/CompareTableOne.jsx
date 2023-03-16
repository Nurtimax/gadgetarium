// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
// } from "@mui/material";
import React, { useEffect } from "react";

import {
  Box,
  styled,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCompareProduct } from "../../redux/slices/compare-slice";
import CompareProductCard from "../UI/card/CompareProductCard";

export default function CompareTable() {
  const { data } = useSelector((state) => state.compareProducts);
  console.log(data, "data");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompareProduct({ categoryName: "Планшеты", size: 6, page: 1 }));
  }, []);

  return (
    <BoxStyled>
      <Table>
        <TableRow>
          <TableHead></TableHead>
          {data.data?.map((product) => (
            <TableCell className="tr_image" key={product.id}>
              <CompareProductCard {...product} />
            </TableCell>
          ))}
        </TableRow>

        <TableRow>
          <TableHead className="tr-head">Бренд</TableHead>
          {data.data?.map((product) => (
            <TableCell className="td_product" key={product.id}>
              {product.productName}
            </TableCell>
          ))}
        </TableRow>

        <TableRow>
          <TableHead className="tr-head">Цвет</TableHead>
          {data.data?.map((product) => (
            <TableCell className="td_product" key={product.id}>
              {product.color}
            </TableCell>
          ))}
        </TableRow>

        <TableRow>
          <TableHead className="tr-head">Память</TableHead>
          {data.data?.map((product) => (
            <TableCell className="td_product" key={product.id}>
              {product.characteristics.memoryOfPhone} GB
            </TableCell>
          ))}
        </TableRow>

        <TableRow>
          <TableHead className="tr-head">Oперативная память</TableHead>
          {data.data?.map((product) => (
            <TableCell className="td_product" key={product.id}>
              {product.characteristics.ramOfPhone}
            </TableCell>
          ))}
        </TableRow>

        <TableRow>
          <TableHead className="tr-head">SIM-карты</TableHead>
          {data.data?.map((product) => (
            <TableCell className="td_product" key={product.id}>
              {product.characteristics.simCard}
            </TableCell>
          ))}
        </TableRow>
      </Table>
    </BoxStyled>
  );
}

const BoxStyled = styled(Box)(() => ({
  background: "white",
  "& .tr_image": {
    padding: "12px 0 52px 0",
    borderBottom: "none",
    margin: "0px",
  },
  "& .tr-head": {
    display: "flex",
    padding: "14px 0 15px",
    alignItems: "center",
    borderBottom: "1px solid #E8E8E8 ",
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: "16px",
  },
  "& .td_product": {
    textAlign: "start",
    padding: "14px 0",
  },
}));
