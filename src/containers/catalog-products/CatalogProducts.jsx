import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Container,
  styled,
  Typography,
  Box,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";
import { ArrowDownIcon, DeleteIconInCart } from "../../assets";
import useDropDown from "../../hooks/useDropDown";
import { catalogMenu_FAKE_DATA, chip_item } from "../../utils/constants";
import { fetchDataCatalog } from "../../redux/slices/catalog";
import Sort from "./Sort";
import FilterProducts from "./FilterProducts";
import ProductsList from "./ProductsList";

const CatalogProducts = () => {
  const [sortEL, setSortEl] = useDropDown();
  const [sortField, setSortField] = useState(null);
  const [discountField, setDiscountField] = useState(null);
  const { catalogItem } = useParams();
  const { data, isLoading, errorMessage } = useSelector(
    (state) => state.catalog
  );

  const dispatch = useDispatch();

  const findedCatalogItem = catalogMenu_FAKE_DATA.find(
    (catalog) => catalog.id === Number(catalogItem)
  );
  const [size, setSize] = useState(12);

  useEffect(() => {
    dispatch(
      fetchDataCatalog({
        categoryName: findedCatalogItem.title,
        page: 1,
        fieldToSort: sortField,
        discountField: discountField,
        size: size,
      })
    );
  }, [findedCatalogItem, sortField, discountField, size]);

  return (
    <ContainerStyled>
      <Typography variant="h5" component="h1" className="text_header">
        {findedCatalogItem.title}
      </Typography>

      <Box className="general-box">
        <Box className="filter-box">
          <Typography style={{ height: "32px" }}>
            Найдено 167 Товаров
          </Typography>
          <Box className="filter-lists">
            <FilterProducts />
          </Box>
        </Box>

        <Box className="product-container">
          <Box className="chip-and-sort">
            <Box className="chip-container">
              <div style={{ width: "100%", display: "flex", gap: "12px" }}>
                {chip_item.map((item) => (
                  <Button
                    className="chip"
                    key={item.id}
                    style={{ display: "flex", gap: "10px" }}
                  >
                    {item.title}

                    <Svg />
                  </Button>
                ))}
              </div>
            </Box>
            <Grid item xs={1.5} className="flex gap2">
              <Box className="flexgrow flex height" onClick={setSortEl}>
                <Sort
                  anchorElCatalog={sortEL}
                  handleCloseCatalog={setSortEl}
                  setDiscountField={setDiscountField}
                  setSortField={setSortField}
                />
                <Box className="sort-container" onClick={setSortEl}>
                  <Typography className="gap capitalize sort-text  pointer">
                    Сортировать
                  </Typography>
                  <ArrowDownIcon />
                </Box>
              </Box>
            </Grid>
          </Box>

          {errorMessage ? (
            <Typography variant="body" component="h1" className="error">
              Error :{errorMessage}
            </Typography>
          ) : (
            ""
          )}

          {isLoading ? (
            <Box className="isLoading-style">
              {[...new Array(8)].map((_, i) => (
                <div key={i} className="circular-progress">
                  <CircularProgress color="secondary" />
                </div>
              ))}
            </Box>
          ) : (
            <ProductsList data={data} setSize={setSize} size={size} />
          )}
        </Box>
      </Box>
    </ContainerStyled>
  );
};

export default CatalogProducts;

const Svg = styled(DeleteIconInCart)(() => ({
  path: {
    fill: "black",
  },
}));
const ContainerStyled = styled(Container)(() => ({
  "& .text_header": {
    height: "83px",
    display: "flex",
    alignItems: "center",
    fontFamily: "Ubuntu",
    fontWeight: "500",
    fontSize: "30px",
    borderBottom: "1px solid #CDCDCD",
  },
  "& .general-box": {
    width: "100%",
    display: "flex",
    gap: "34px",
    paddingTop: "40px",
  },
  "& .filter-box": { width: "351px" },
  "& .filter-lists": {
    width: "351px",
    display: "flex",
    justifyContent: "center",
  },
  "& .product-container": {
    width: "1240px",
  },
  "& .chip-and-sort": {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "18px",
  },
  "& .chip-container": { display: "flex" },
  "& .sort-container": {
    display: "flex",
    alignItems: "center",
    gap: "10.5px",
  },

  "& .sort-text": {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    color: "#384255",
  },
  "& .chip": {
    height: "32px",
    borderRadiuse: "0px",
    background: "#E8E8E8",
    border: "1px solid #CDCDCD",
  },
  "& .error": { color: "red" },
  "& .isLoading-style": {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  "& .circular-progress": {
    width: "227px",
    height: "423px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
