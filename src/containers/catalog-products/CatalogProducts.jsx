import React from "react";
import { Container, Grid, MenuItem, styled, Typography } from "@mui/material";
import ProductCard from "../../components/UI/card/ProductCard";
import { ArrowDownIcon } from "../../assets";
import { Box } from "@mui/system";
import DropDown from "../../components/UI/DropDown";
import useDropDown from "../../hooks/useDropDown";
import { ITEM_SORT } from "../../utils/constants";
import { useState } from "react";

const CatalogProducts = () => {
  const [sortEL, setSortEl] = useDropDown();
  const [sortEL2, setSortEl2] = useDropDown();
  const [subSortElement, setSubSortElement] = useState([]);

  const subMenuCatalogHandler = (value) => (e) => {
    setSubSortElement(value);
    setSortEl2(e);
  };

  console.log(subSortElement.length !== 0);
  return (
    <ContainerStyled>
      <Typography variant="h5" component="h1" className="text_header">
        Смартфоны
      </Typography>

      <Box className="sort-container" onClick={setSortEl}>
        <Typography variant="body2" component="span" className="sort-text">
          Сортировать
        </Typography>
        <ArrowDownIcon />
      </Box>
      <Grid container sx={{ width: "500px" }}>
        <Grid item xs={6}>
          <DropDown
            open={!!sortEL}
            anchorEl={sortEL}
            handleClose={setSortEl}
            PopoverClasses={{ paper: "paper" }}
            classes={{ paper: "paper" }}
            horizontal="right"
            vertical="top"
          >
            {ITEM_SORT.map((item) => (
              <MenuItem
                key={item.id}
                onMouseEnter={subMenuCatalogHandler(
                  item?.subcategories ? item.subcategories : []
                )}
              >
                {item.title}
              </MenuItem>
            ))}
          </DropDown>
        </Grid>
        {subSortElement.length !== 0 && (
          <Grid item xs={6}>
            <StyledDropDown
              open={!!sortEL2}
              anchorEl={sortEL2}
              handleClose={setSortEl2}
              classes={{ paper: "subpaper" }}
              horizontal="right"
              vertical="top"
            >
              {subSortElement.map((item) => (
                <MenuItem key={item.id}>{item.title}</MenuItem>
              ))}
            </StyledDropDown>
          </Grid>
        )}
      </Grid>

      <ProductCard />
    </ContainerStyled>
  );
};

export default CatalogProducts;
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
}));

const StyledDropDown = styled(DropDown)(() => ({
  position: "relative",
  width: "10rem",
  maxHeight: "62px",
  "& .paper": {
    top: "0 !important",
    left: "85% !important",
    maxHeight: "300px",
    minWidth: "20.5rem",
    padding: "0 8px",
  },
  "& .subpaper": {
    zIndex: 0,
    left: "165% !important",
    maxHeight: "33rem",
    padding: "20px 18px",
    textAlign: "left",
  },
  "& .MuiBackdrop-root": {
    position: "relative",
  },
}));
