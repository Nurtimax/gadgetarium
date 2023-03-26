import React from "react";
import {
  Box,
  CircularProgress,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import CompareProductCard from "../UI/card/CompareProductCard";
import { ArrowRightPinkIcon } from "../../assets";
import EmptyCompare from "./EmptyCompare";
import ColorName from "../add_product/fields/ColorName";

const CompareTable = ({
  productTable,
  paramsCompare,
  handleQuantityProducts,
}) => {
  const { compareByCategoryId, isLoading } = useSelector(
    (state) => state.compareProducts
  );
  return (
    <BoxStyled>
      {isLoading ? (
        <Box className="loading-box">
          <CircularProgress color="secondary" />
        </Box>
      ) : compareByCategoryId.length > 0 ? (
        <Table className="table">
          <TableRow className="row-head">
            {productTable.description?.map((header) => (
              <TableHead key={header} className={header ? "tr-head" : ""}>
                {header}
              </TableHead>
            ))}
          </TableRow>

          {compareByCategoryId.find(
            (product) => product.categoryName === "Смартфоны"
          )
            ? compareByCategoryId.map((product) => (
                <TableBody className="row-body" key={product.id}>
                  <TableCell className="tr_image">
                    <CompareProductCard
                      paramsCompare={paramsCompare}
                      {...product}
                    />
                  </TableCell>
                  <TableCell className="td_product">
                    {product.productName}
                  </TableCell>
                  <TableCell className="td_product">
                    <ColorName color={product.color} />
                  </TableCell>
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
            : compareByCategoryId.find(
                (product) => product.categoryName === "Ноутбуки"
              )
            ? compareByCategoryId.map((product) => (
                <TableRow className="row-body" key={product.id}>
                  <TableCell className="tr_image">
                    <CompareProductCard
                      paramsCompare={paramsCompare}
                      subproductId={product.subproductId.join("")}
                      {...product}
                    />
                  </TableCell>
                  <TableCell className="td_product">
                    {product.productName}
                  </TableCell>
                  <TableCell className="td_product">
                    <ColorName color={product.color} />
                  </TableCell>
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
            : compareByCategoryId.find(
                (product) => product.categoryName === "Планшеты"
              )
            ? compareByCategoryId.map((product) => (
                <TableRow className="row-body" key={product.id}>
                  <TableCell className="tr_image">
                    <CompareProductCard
                      paramsCompare={paramsCompare}
                      {...product}
                    />
                  </TableCell>
                  <TableCell className="td_product">
                    {product.productName}
                  </TableCell>
                  <TableCell className="td_product">
                    <ColorName color={product.color} />
                  </TableCell>
                  <TableCell className="td_product">
                    {product.characteristics.screenResolutionOfTablet}
                  </TableCell>
                  <TableCell className="td_product">
                    {product.characteristics.memoryOfTablet} GB
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
            : compareByCategoryId.find(
                (product) => product.categoryName === "Смарт-часы и браслеты"
              )
            ? compareByCategoryId.map((product) => (
                <TableRow className="row-body" key={product.id}>
                  <TableCell className="tr_image">
                    <CompareProductCard
                      paramsCompare={paramsCompare}
                      {...product}
                    />
                  </TableCell>
                  <TableCell className="td_product">
                    {product.productName}
                  </TableCell>
                  <TableCell className="td_product">
                    <ColorName color={product.color} />
                  </TableCell>
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
      ) : (
        <>
          <EmptyCompare
            mainTitle={
              <Typography component="div" variant="h5">
                В категории{" "}
                <span style={{ fontSize: "24px", fontWeight: "700" }}>
                  {productTable.categoryName}
                </span>{" "}
                товаров для сравнения нет{" "}
              </Typography>
            }
            buttonText="К покупкам"
          />
        </>
      )}
      {compareByCategoryId.length > 5 ? (
        <IconButton className="arrow-btn" onClick={handleQuantityProducts}>
          <ArrowRightPinkIcon />
        </IconButton>
      ) : (
        ""
      )}
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
    height: "56.8px",
  },
  "& .td_product": {
    textAlign: "start",
    padding: "14px 0px 15px ",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    height: "56.8px",
  },
  "& .td_product_of-table": {
    textAlign: "start",
    padding: "14px 0 20px 0",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    height: "56.8px",
  },
  "& .row-head": { paddingTop: "421px", width: "260px" },
  "& .row-body": {
    color: "inherit",
    display: "inline-grid",
    verticalAlign: "middle",
    outline: "0",
    width: "250px",
  },
  "& .loading-box": { display: "flex", justifyContent: "center" },
}));
