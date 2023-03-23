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
  fetchColorCatalog,
  fetchDataCatalog,
} from "../../redux/slices/catalog-slice.js";
import { ArrowDownIcon, DeleteIconInCart } from "../../assets";
import ProductsList from "../../components/catalog-products/ProductsList";
import FilterProducts from "../../components/catalog-products/FilterProducts";
import { filteredCatalogSliceAction } from "../../redux/slices/catalog-filter-slice";

const CatalogProducts = () => {
  const filteredCatalog = useSelector((state) => state.filteredCatalog);

  const { data, isLoading, errorMessage, filterSlice, colorResponses } =
    useSelector((state) => state.catolog);

  const dispatch = useDispatch();

  const [sortEL, setSortEl] = useDropDown();

  const { catalogItem } = useParams();

  const findedCatalogItem = catalogMenu_FAKE_DATA.find(
    (catalog) => catalog.id === Number(catalogItem)
  );

  const handleChangeChips = (title, id, colorCode) => {
    dispatch(catalogSliceAction.chipsFromFilterRemove({ title }));
    dispatch(
      filteredCatalogSliceAction.removeCheckedProduct({
        key: typeof id === "number" ? "subCategoryName" : id,
        title,
        colorCode,
      })
    );
  };

  const handelResetAllFilters = () => {
    dispatch(filteredCatalogSliceAction.resetState());
    dispatch(catalogSliceAction.resetAllFilters());
  };

  useEffect(() => {
    dispatch(
      fetchDataCatalog({
        ...filteredCatalog,
        categoryName: findedCatalogItem.title,
        colors: filteredCatalog.colors.join(","),
      })
    );
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
                {filterSlice?.map((item) => (
                  <Button
                    className="chip"
                    key={item.id}
                    onClick={() =>
                      handleChangeChips(item.title, item.id, item?.colorCode)
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
    width: "1240px",
  },
  "& .chip-and-sort": {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "18px",
  },
  "& .chip-container": { display: "flex" },
  "& .chips": { width: "100%", display: "flex", gap: "12px" },
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
    gap: "10px",
    height: "32px",
    borderRadiuse: "0px",
    background: "#E8E8E8",
    border: "1px solid #CDCDCD",
  },
  "& .error": { color: "red" },
}));
