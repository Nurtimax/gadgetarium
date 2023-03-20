import React from "react";
import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";
import CompareProductCard from "../UI/card/CompareProductCard";

const CompareTable = ({ productTable }) => {
  const { compare } = useSelector((state) => state.compareProducts);
  console.log(compare, "fuseTea");
  console.log(
    compare.map((product) => product.categoryName),
    "Смартфоны"
  );

  console.log(productTable, "productTable");
  return (
    <BoxStyled>
      <Table className="table">
        <TableRow className="row-head">
          {productTable.description?.map((header) => (
            <TableHead key={header} className={header ? "tr-head" : ""}>
              {header}
            </TableHead>
          ))}
        </TableRow>
        {compare.find((product) => product.categoryName === "Смартфоны")
          ? compare.map((product) => (
              <TableBody className="row-body" key={product.id}>
                <TableCell className="tr_image">
                  <CompareProductCard {...product} />
                </TableCell>
                <TableCell className="td_product">
                  {product.productName}
                </TableCell>
                <TableCell className="td_product">{product.color}</TableCell>
                <TableCell className="td_product">
                  {product.characteristics.memoryOfPhone} GB
                </TableCell>
                <TableCell className="td_product">
                  {product.characteristics.ramOfPhone}
                </TableCell>
                <TableCell className="td_product">
                  {product.characteristics.simCard}
                </TableCell>
              </TableBody>
            ))
          : compare.find((product) => product.categoryName === "Ноутбуки")
          ? compare.map((product) => (
              <TableRow className="row-body" key={product.id}>
                <TableCell className="tr_image">
                  <CompareProductCard {...product} />
                </TableCell>
                <TableCell className="td_product">
                  {product.productName}
                </TableCell>
                <TableCell className="td_product">{product.color}</TableCell>
                <TableCell className="td_product">
                  {product.characteristics.laptopCPU}
                </TableCell>
                <TableCell className="td_product">
                  {product.characteristics.screenResolutionLaptop}
                </TableCell>
                <TableCell className="td_product">
                  {product.characteristics.screenSizeLaptop}
                </TableCell>
                <TableCell className="td_product">
                  {product.characteristics.videoCardMemory} GB
                </TableCell>
              </TableRow>
            ))
          : compare.find((product) => product.categoryName === "Планшеты")
          ? compare.map((product) => (
              <TableRow className="row-body" key={product.id}>
                <TableCell className="tr_image">
                  <CompareProductCard {...product} />
                </TableCell>
                <TableCell className="td_product">
                  {product.productName}
                </TableCell>
                <TableCell className="td_product">{product.color}</TableCell>
                <TableCell className="td_product">
                  {product.characteristics.screenResolutionOfTablet}
                </TableCell>
                <TableCell className="td_product">
                  {product.characteristics.memoryOfTablet}
                </TableCell>
                <TableCell className="td_product">
                  {product.characteristics.ramOfTablet}
                </TableCell>
                <TableCell className="td_product_of-table">
                  {product.characteristics.batteryCapacityOfTablet}
                </TableCell>
                <TableCell className="td_product">
                  {product.characteristics.screenDiagonalOfTablet}
                </TableCell>
                <TableCell className="td_product">
                  {product.characteristics.screenSizeOfTablet}
                </TableCell>
              </TableRow>
            ))
          : compare.find(
              (product) => product.categoryName === "Смарт-часы и браслеты"
            )
          ? compare.map((product) => (
              <TableRow className="row-body" key={product.id}>
                <TableCell className="tr_image">
                  <CompareProductCard {...product} />
                </TableCell>
                <TableCell className="td_product">
                  {product.productName}
                </TableCell>
                <TableCell className="td_product">{product.color}</TableCell>
                <TableCell className="td_product">
                  {product.characteristics.caseShape}
                </TableCell>
                <TableCell className="td_product_of-table">
                  {product.characteristics.braceletMaterial}
                </TableCell>
                <TableCell className="td_product">
                  {product.characteristics.gender}
                </TableCell>
                <TableCell className="td_product">
                  {product.characteristics.wirelessInterface}
                </TableCell>
                <TableCell className="td_product">
                  {product.characteristics.memoryOfSmartWatch} GB
                </TableCell>
                <TableCell className="td_product">
                  {product.characteristics.screenDiagonalOfSmartWatch}
                </TableCell>
                <TableCell className="td_product">
                  {product.characteristics.waterProof}
                </TableCell>
                <TableCell className="td_product">
                  {product.characteristics.housingMaterial}
                </TableCell>
              </TableRow>
            ))
          : ""}
      </Table>
    </BoxStyled>
  );
};

export default CompareTable;
const BoxStyled = styled(Box)(() => ({
  background: "white",

  "& .table": { display: "flex" },
  "& .tr_image": {
    padding: "12px 0 42px 0",
    borderBottom: "none",
    margin: "0px",
  },
  "& .tr-head": {
    display: "flex",
    padding: "14px 0px 15px ",
    alignItems: "center",
    borderBottom: "1px solid #E8E8E8 ",
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: "18px",
    // position: "sticky",
    // left: 0,
    // background: "white",
    // boxShadow: "5px 2px 5px grey",
  },
  "& .td_product": {
    textAlign: "start",
    padding: "14px 0",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
  },
  "& .td_product_of-table": {
    textAlign: "start",
    padding: "14px 0 14px 0px",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    height: "72.5px",
    // background: "red",
  },
  "& .row-head": { paddingTop: "421.5px", width: "260px" },
  "& .row-body": {
    color: "inherit",
    display: "inline-grid",
    verticalAlign: "middle",
    outline: "0",
    width: "250px",
  },
}));
