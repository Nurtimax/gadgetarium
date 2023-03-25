import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  styled,
  Typography,
  Box,
  Button,
  Grid,
} from "@mui/material";
import useDropDown from "../../hooks/useDropDown";
import { catalogMenu_FAKE_DATA } from "../../utils/constants";

import Sort from "../../components/catalog-products/Sort";
import {
  catalogSliceAction,
  fetchDataCatalog,
  fetchColorCatalog,
} from "../../redux/slices/catalog-slice.js";
import { ArrowDownIcon, DeleteIconInCart } from "../../assets";
import ProductsList from "../../components/catalog-products/ProductsList";
import FilterProducts from "../../components/catalog-products/FilterProducts";
import { filteredCatalogSliceAction } from "../../redux/slices/catalog-filter-slice";
import { CATALOG_PRODUCTS_FILTERS_KEYS } from "../../utils/constants/catalog-product-filter";
import { useState } from "react";

const CatalogProducts = () => {
  const filteredCatalog = useSelector((state) => state.filteredCatalog);

  const { data, isLoading, errorMessage, colorResponses } = useSelector(
    (state) => state.catalog
  );

  const dispatch = useDispatch();

  const [chips, setChips] = useState([]);

  useEffect(() => {
    const getChips = CATALOG_PRODUCTS_FILTERS_KEYS.reduce((acc, current) => {
      const newChips = filteredCatalog[current].map((chip) => chip);
      const result = newChips.reduce((childAcc, item) => {
        return [
          ...childAcc,
          {
            key: current,
            title: item,
            id: Math.round(Math.random() * 1000000),
          },
        ];
      }, []);
      return [...acc, ...result];
    }, []);
    setChips(getChips);
  }, [filteredCatalog]);

  const [sortEL, setSortEl] = useDropDown();

  const { catalogItem } = useParams();

  const findedCatalogItem = catalogMenu_FAKE_DATA.find(
    (catalog) => catalog.id === Number(catalogItem)
  );

  const handelResetAllFilters = () => {
    dispatch(filteredCatalogSliceAction.resetState());
    dispatch(catalogSliceAction.resetAllFilters());
  };

  useEffect(() => {
    dispatch(filteredCatalogSliceAction.resetState());
    dispatch(catalogSliceAction.resetAllFilters());
  }, [catalogItem]);

  const removeCatalogValueByChips = (key, title) => {
    dispatch(filteredCatalogSliceAction.removeByChip({ key, title }));
  };

  useEffect(() => {
    dispatch(
      fetchDataCatalog({
        ...filteredCatalog,
        categoryName: findedCatalogItem.title,
        colors: filteredCatalog.colors.join(","),
        subCategoryNames: filteredCatalog.subCategoryNames.join(","),
        memories: filteredCatalog.memories.join(","),
        rams: filteredCatalog.rams.join(","),
        laptopCPUs: filteredCatalog.laptopCPUs.join(","),
        screenSizes: filteredCatalog.screenSizes.join(","),
        screenResolutions: filteredCatalog.screenResolutions.join(","),
        screenDiagonals: filteredCatalog.screenDiagonals.join(","),
        batteryCapacities: filteredCatalog.batteryCapacities.join(","),
        wirelessInterfaces: filteredCatalog.wirelessInterfaces.join(","),
        caseShapes: filteredCatalog.caseShapes.join(","),
        braceletMaterials: filteredCatalog.braceletMaterials.join(","),
        housingMaterials: filteredCatalog.housingMaterials.join(","),
        genders: filteredCatalog.genders.join(","),
        waterProofs: filteredCatalog.waterProofs.join(","),
      })
    );
    dispatch(filteredCatalogSliceAction.resetState());
    dispatch(catalogSliceAction.resetAllFilters());
  }, [catalogItem]);

  const catalogData = {
    ...filteredCatalog,
    categoryName: findedCatalogItem.title,
    colors: filteredCatalog.colors.join(","),
  };

  useEffect(() => {
    dispatch(fetchDataCatalog(catalogData));
    dispatch(fetchColorCatalog({ categoryId: catalogItem }));
  }, [findedCatalogItem, filteredCatalog, catalogItem]);

  useEffect(() => {
    // dispatch(filteredCatalogSliceAction.resetState());
    dispatch(catalogSliceAction.resetAllFilters());
  }, [catalogItem]);

  return (
    <ContainerStyled>
      <Typography variant="h5" component="h1" className="text_header">
        {findedCatalogItem.title}
      </Typography>

      <Box className="general-box">
        <Box className="filter-box">
          <Typography className="find-products">
            Найдено {data.products.sizeOfProducts} Товаров
          </Typography>

          <Box className="filter-lists">
            <FilterProducts
              handelResetAllFilters={handelResetAllFilters}
              colorResponses={colorResponses}
            />
          </Box>
        </Box>

        <Box className="product-container">
          <Box className="chip-and-sort">
            <Box className="chip-container">
              <Box className="chips">
                {chips?.map((item) => (
                  <Button
                    className="chip"
                    key={item.id}
                    onClick={() =>
                      removeCatalogValueByChips(item.key, item.title)
                    }
                  >
                    {item.title}
                    <Svg />
                  </Button>
                ))}
              </Box>
            </Box>

            <Grid item xs={1.5} className="flex gap2">
              <Box className="flexgrow flex height" onClick={setSortEl}>
                <Sort anchorElCatalog={sortEL} handleCloseCatalog={setSortEl} />
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

          <ProductsList
            dataCatalog={catalogData}
            isLoading={isLoading}
            data={data}
            sortField={filteredCatalog.fieldToSort}
            discountField={filteredCatalog.discountField}
          />
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
  minHeight: "500px",
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
  "& .find-products": {
    height: "50px",
    color: "#91969E",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    fontFamily: "Inter",
  },
  "& .filter-lists": {
    width: "351px",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "80px",
  },
  "& .product-container": {
    width: "80%",
  },
  "& .chip-and-sort": {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "18px",
  },
  "& .chip-container": {
    display: "flex",
    width: "57vw",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "& .chip": {
      minWidth: "13%",
    },
  },

  "& .chips": {
    width: "100%",
    display: "flex",
    gap: "12px",
  },
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
    display: "flex",
    alignItems: "center",
  },
  "& .chip": {
    display: "flex",
    justifyContent: "space-around",
    height: "32px",
    borderRadiuse: "0px",
    background: "#E8E8E8",
    border: "1px solid #CDCDCD",
  },
  "& .error": { color: "red" },
}));
