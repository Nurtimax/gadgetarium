import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, MenuItem, styled, Typography } from "@mui/material";
import DropDown from "../UI/DropDown";
import useDropDown from "../../hooks/useDropDown";
import { ITEM_SORT } from "../../utils/constants";
import { filteredCatalogSliceAction } from "../../redux/slices/catalog-filter-slice";

const Sort = ({ anchorElCatalog, handleCloseCatalog }) => {
  const { fieldToSort, discountField } = useSelector(
    (state) => state.filteredCatalog
  );

  const dispatch = useDispatch();
  const [subMenuCatalog, setSubMenuCatalog] = useState([]);
  const [anchorEl, setAnchorEl] = useDropDown();

  const open = Boolean(anchorEl);

  const subMenuCatalogHandler = useCallback(
    (value) => (e) => {
      setSubMenuCatalog(value);
      setAnchorEl(e);
    },
    []
  );

  const clickSubSortHandler = (value) => () => {
    dispatch(filteredCatalogSliceAction.sortField("По акции"));
    dispatch(filteredCatalogSliceAction.discountField(value));
    closeHandler();
  };
  const clickSortHandler = (value) => () => {
    if (value !== "По акции") {
      handleCloseCatalog();
      dispatch(filteredCatalogSliceAction.sortField(value));
    } else {
      dispatch(filteredCatalogSliceAction.sortField(null));
      dispatch(filteredCatalogSliceAction.discountField(clickSubSortHandler()));
    }
  };

  const closeHandler = useCallback(() => {
    handleCloseCatalog();
    setAnchorEl();
  }, [anchorElCatalog]);

  return (
    <StyledMenuCatalog onMouseLeave={closeHandler}>
      <Grid container className="grid_container">
        <Grid item xs={6}>
          <StyledDropDown
            open={Boolean(anchorElCatalog)}
            anchorEl={anchorElCatalog}
            handleClose={handleCloseCatalog}
            PopoverClasses={{ paper: "paper" }}
            classes={{ paper: "paper" }}
            horizontal="right"
            vertical="top"
          >
            {ITEM_SORT.map((catalog) => (
              <MenuItem
                key={catalog.id}
                onMouseEnter={subMenuCatalogHandler(
                  catalog?.subcategories ? catalog.subcategories : []
                )}
                onClick={clickSortHandler(catalog.title)}
                className={
                  fieldToSort === catalog.title ? "selectedSortField" : ""
                }
                classes={{ root: "sort_dropdown" }}
              >
                {catalog.title}
              </MenuItem>
            ))}
          </StyledDropDown>
        </Grid>
        {subMenuCatalog.length !== 0 && (
          <Grid item xs={6}>
            <StyledDropDown
              open={open}
              anchorEl={anchorEl}
              handleClose={setAnchorEl}
              classes={{ paper: "subpaper" }}
            >
              <Grid container spacing={1} display="grid">
                <Grid item xs={12}>
                  <Typography component="h1" variant="h5">
                    {subMenuCatalog.title}
                  </Typography>
                </Grid>
                {subMenuCatalog.map((catalog) => (
                  <Grid item xs={12} key={catalog.id}>
                    <MenuItem
                      className={
                        discountField === catalog.title
                          ? "selectedSortField"
                          : ""
                      }
                      onClick={clickSubSortHandler(catalog.title)}
                    >
                      {catalog.title}
                    </MenuItem>
                  </Grid>
                ))}
              </Grid>
            </StyledDropDown>
          </Grid>
        )}
      </Grid>
    </StyledMenuCatalog>
  );
};
export default Sort;

const StyledMenuCatalog = styled(Box)(() => ({
  position: "absolute",
  "& .grid_container": {
    position: "relative",
    background: "red",
    display: "flex",
    width: "390px",
  },
}));

const StyledDropDown = styled(DropDown)(() => ({
  position: "relative",
  width: "10rem",
  maxHeight: "62px",
  "& .paper": {
    top: "22px !important",
    left: "-90px !important",
    minHeight: "206px",
    minWidth: "220px",
    padding: "4px 8px",
    display: "flex",
  },

  "& .subpaper": {
    zIndex: 0,
    left: "-265% !important",
    minWidth: "140px",
    display: "flex",
    justifyContent: "center",
    minHeight: "150px",
    textAlign: "center",
    borderRadius: "4px 0px 0px 4px",
  },
  "& .MuiBackdrop-root": {
    position: "relative",
  },

  "& .selectedSortField": {
    background: "#CB11AB",
    "&.MuiMenuItem-root": {
      "&.selectedSortField": {
        background: "#CB11AB",
      },
      color: "black !important",
      ":hover": { background: "none", color: "#CB11AB !important" },
    },
  },
}));
