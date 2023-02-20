import { Box, Grid, MenuItem, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { useCallback } from "react";
import DropDown from "../../components/UI/DropDown";
import useDropDown from "../../hooks/useDropDown";
import { ITEM_SORT } from "../../utils/constants";

const Sort = ({
  anchorElCatalog,
  handleCloseCatalog,
  setSortField,
  setDiscountField,
}) => {
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
    setSortField("По акции");
    setDiscountField(value);
  };
  const clickSortHandler = (value) => () => {
    if (value !== "По акции") {
      setSortField(value);
    } else {
      setSortField(null);
      setDiscountField(clickSubSortHandler());
    }
  };

  const closeHandler = () => {
    handleCloseCatalog();
    setAnchorEl();
  };

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
                    <MenuItem onClick={clickSubSortHandler(catalog.title)}>
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
}));
