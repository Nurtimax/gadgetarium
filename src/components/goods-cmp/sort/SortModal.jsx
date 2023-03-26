import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, MenuItem, styled, Typography } from "@mui/material";
import { actionGoodSlice } from "../../../redux/slices/goods-slice";
import useDropDown from "../../../hooks/useDropDown";
import DropDown from "../../UI/DropDown";
import { ITEM_SORT } from "../../../utils/constants";

const SortModal = ({ anchorElCatalog, handleCloseCatalog }) => {
  const { params } = useSelector((state) => state.goods);

  const { fieldToSort, discountField } = params;

  const dispatch = useDispatch();
  const [subMenuCatalog, setSubMenuCatalog] = useState([]);
  const [anchorEl, setAnchorEl] = useDropDown();

  const open = Boolean(anchorEl);

  const clickSubSortHandler = useCallback((value) => {
    dispatch(
      actionGoodSlice.changeParams({ key: "fieldToSort", value: "По акции" })
    );
    dispatch(actionGoodSlice.changeParams({ key: "discountField", value }));
    closeHandler();
  }, []);

  const clickSortHandler = useCallback(
    (value, e) => {
      if (value !== "По акции") {
        handleCloseCatalog();
        if (fieldToSort === value) {
          return dispatch(
            actionGoodSlice.changeParams({ value: null, key: "fieldToSort" })
          );
        } else {
          dispatch(actionGoodSlice.changeParams({ value, key: "fieldToSort" }));
          return dispatch(
            actionGoodSlice.changeParams({ key: "discountField", value: null })
          );
        }
      }
      return setAnchorEl(e);
    },
    [handleCloseCatalog]
  );

  const closeHandler = useCallback(() => {
    handleCloseCatalog();
    setAnchorEl();
  }, [handleCloseCatalog, setAnchorEl]);

  const subMenuCatalogHandler = useCallback(
    (value) => (e) => {
      if (value.length) {
        setSubMenuCatalog(value);
        return setAnchorEl(e);
      }
      return setAnchorEl();
    },
    [setAnchorEl]
  );

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
                onClick={(e) => clickSortHandler(catalog.title, e)}
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
                      onClick={() => clickSubSortHandler(catalog.title)}
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
export default SortModal;

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
