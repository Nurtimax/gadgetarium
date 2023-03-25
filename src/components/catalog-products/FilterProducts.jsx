import React, { useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Button,
  Paper,
  Slider,
  styled,
  Container,
} from "@mui/material";
import Colors from "./Colors";
import SubproductsFilter from "./SubproductsFilter";
import { catalogProductData } from "../../utils/constants/catalog-product-filter";
import { ArrowDownIcon, ArrowUpIcon } from "../../assets";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { priceProductSeparate } from "../../utils/helpers/general";
import { filteredCatalogSliceAction } from "../../redux/slices/catalog-filter-slice";
import SubcategoryName from "./SubcategoryName";

const FilterProducts = ({ handelResetAllFilters, colorResponses }) => {
  const [value, setValue] = useState();
  const [showCategory, setShowCategory] = useState(5);

  const { subCategoryNames, minPrice, maxPrice, colors } = useSelector(
    (state) => state.filteredCatalog
  );

  const dispatch = useDispatch();

  const { catalogItem } = useParams();

  const findedCatalogFilter = React.useMemo(() => {
    return catalogProductData.find(
      (product) => product.id === Number(catalogItem)
    );
  }, [catalogItem]);

  const showDataHandler = (_, value) => {
    if (showCategory === 5) {
      setShowCategory(
        (prevState) =>
          prevState + findedCatalogFilter.category.subCategory?.length ||
          colorResponses?.length
      );
    } else {
      setShowCategory(5);
    }
    setValue(value);
  };

  const handleToggle = (_, title) => {
    if (subCategoryNames.includes(title)) {
      return dispatch(filteredCatalogSliceAction.subCategoryNameElse(title));
    }
    return dispatch(filteredCatalogSliceAction.subCategoryName(title));
  };

  const handleChangeColor = (colorCode) => {
    if (colors.includes(colorCode)) {
      return dispatch(filteredCatalogSliceAction.colors(colorCode));
    }
    return dispatch(filteredCatalogSliceAction.colorsRemove(colorCode));
  };

  const handleChange = (_, newValue) => {
    dispatch(filteredCatalogSliceAction.minPriceProduct(newValue[0]));
    dispatch(filteredCatalogSliceAction.maxPriceProduct(newValue[1]));
  };

  return (
    <FilterProductsStyled>
      <Paper classes={{ root: "paper" }}>
        <Container classes={{ root: "container" }}>
          <Typography
            className="remove-data pointer"
            onClick={handelResetAllFilters}
          >
            Сбросить все фильтры
          </Typography>
          <Accordion classes={{ root: "accordion" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="arrow-icon" />}
            >
              <Typography
                variant="body2"
                component="div"
                classes={{ root: "product_title" }}
              >
                {findedCatalogFilter.category.type}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {findedCatalogFilter.category.subCategory
                .slice(0, showCategory)
                .map((category) => (
                  <SubcategoryName
                    key={category.id}
                    subCategoryNames={subCategoryNames}
                    handleToggle={handleToggle}
                    {...category}
                  />
                ))}
            </AccordionDetails>
            {findedCatalogFilter.category.subCategory?.length > 5 ? (
              <Button
                value={value}
                onClick={() => showDataHandler()}
                className="show-more-button"
              >
                {showCategory < 6 ? (
                  <>
                    <ArrowDownIconStyled />
                    Еще {findedCatalogFilter.category.subCategory?.length - 5}
                  </>
                ) : (
                  <>
                    <ArrowUpIconStyled />
                    Скрыть
                  </>
                )}
              </Button>
            ) : null}
          </Accordion>
          <Accordion classes={{ root: "accordion" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="arrow-icon" />}
            >
              <Typography
                variant="body2"
                component="div"
                classes={{ root: "product_title" }}
              >
                Стоимость
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion-details">
              <Box className="price-box">
                <Button className="price-button" variant="outlined">
                  <span className="span-styled">от</span>
                  {priceProductSeparate(Number(String(minPrice)))}
                </Button>
                <Button className="price-button" variant="outlined">
                  <span className="span-styled">до</span>
                  {priceProductSeparate(Number(String(maxPrice)))}
                </Button>
              </Box>

              <Box className="slider-box">
                <Slider
                  value={[minPrice, maxPrice]}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  min={500}
                  max={250000}
                  color="secondary"
                />
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion classes={{ root: "accordion" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="arrow-icon" />}
            >
              <Typography
                variant="body2"
                component="div"
                classes={{ root: "product_title" }}
              >
                Цвет
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {colorResponses.slice(0, showCategory).map((category) => (
                <Colors
                  key={category.colorName}
                  handleChangeColor={handleChangeColor}
                  colors={colors}
                  {...category}
                />
              ))}
            </AccordionDetails>
            {colorResponses?.length > 5 ? (
              <Button
                value={value}
                onClick={() => showDataHandler()}
                className="show-more-button"
              >
                {showCategory < 6 ? (
                  <>
                    <ArrowDownIconStyled />
                    Еще {colorResponses?.length - 5}
                  </>
                ) : (
                  <>
                    <ArrowUpIconStyled />
                    Скрыть
                  </>
                )}
              </Button>
            ) : null}
          </Accordion>
          {findedCatalogFilter.categories.map((product) => (
            <SubproductsFilter key={product.id} {...product} />
          ))}
        </Container>
      </Paper>
    </FilterProductsStyled>
  );
};

export default FilterProducts;
const FilterProductsStyled = styled(Box)(() => ({
  height: "1500px",
  overflowY: "auto",
  overflowX: "hidden",

  "& .paper": {
    width: "351px",
  },
  "::-webkit-scrollbar": { width: "8px" },

  "::-webkit-scrollbar-track": {
    background: "#E8E8E8",
    borderRadius: "4px",
  },
  "::-webkit-scrollbar-thumb": {
    height: "130px",
    background: " rgba(145, 150, 158, 0.5)",
    borderRadius: "4px",
  },

  "& .paper:hover": {},
  "& .remove-data": {
    width: "291px",
    height: "70px",
    borderBottom: "1px solid #E8E8E8",
    paddingTop: "30px",
    margin: "0 auto",
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "16px",
    color: "#2C68F5",
  },
  "& .container": {
    maxWidth: "95%",
    padding: "0px",
  },
  "& .accordion": {
    borderBottom: "1px solid #E8E8E8",
    borderRadius: "0px",
    boxShadow: "none",
    padding: "0px",
  },

  "& .product_title": {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "19px",
  },
  "& .arrow-icon": { fill: "#CB11AB" },
  "& .form-control-label": {
    height: "40px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  "& .accordion-details": {
    width: "100%",
    display: "flex",
    justifyContant: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  "& .price-box": {
    width: "351px",
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: "25px",
  },
  "& .price-button": {
    border: "1px solid #D5D5D5",
    height: "37px",
    width: "121px",
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "10px !important",
    gap: "8px",
  },
  "& .span-styled": { color: "#91969E", textTransform: "lowercase" },
  "& .slider-box": { width: "95%" },

  "& .subcategory-box": { display: "flex", flexDirection: "column", ml: 3 },
  "& .show-more-button": {
    color: "#2C68F5",
    display: "flex",
    gap: "8px",
    alignItems: "center",
    fontFamily: "Inter",
    fontWeight: "500",
    paddingTop: "10px !important",
  },
  "& .MuiCollapse-wrapperInner": { paddingBottom: "20px" },
  "& .MuiPaper-root .MuiPaper-elevation ": { width: "291px" },
  "& .MuiAccordionDetails-root": { padding: "0px" },
  "& .MuiButtonBase-root": {
    padding: "0px",
  },
  "& .MuiPaper-root .MuiPaper-root": { margin: "0 auto" },
  "& .MuiSlider-rail": { height: "2px" },
  "& .MuiSlider-track  ": { height: "2px" },
  "& .MuiBox-root ": { margin: "0px 10px " },
}));
const ArrowDownIconStyled = styled(ArrowDownIcon)(() => ({
  path: {
    fill: "#2C68F5",
  },
}));
const ArrowUpIconStyled = styled(ArrowUpIcon)(() => ({
  path: {
    fill: "#2C68F5",
  },
}));
