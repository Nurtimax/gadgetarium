import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightWithoutColorIcon } from "../../assets";
import { catalogMenu_FAKE_DATA } from "../../utils/constants";
import DropDown from "../UI/DropDown";

const initialState = {
  id: "",
  title: "",
  subMenu: [],
};

const Catalog = ({ anchorElCatalog, handleCloseCatalog }) => {
  const [subMenuCatalog, setSubMenuCatalog] = useState(initialState);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  useEffect(() => {
    if (anchorElCatalog === null) {
      handleClose();
      setSubMenuCatalog(initialState);
    }
  }, [anchorElCatalog, anchorEl]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const subMenuCatalogHandler = (value) => (e) => {
    setSubMenuCatalog(value);
    handleClick(e);
  };

  const closeHandler = () => {
    handleClose();
    handleCloseCatalog();
    setSubMenuCatalog(initialState);
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
            {catalogMenu_FAKE_DATA.map((catalog) => (
              <MenuItem
                key={catalog.id}
                onMouseEnter={subMenuCatalogHandler({
                  id: catalog.id,
                  title: catalog.title,
                  subMenu: catalog.subcategories,
                })}
                className={
                  catalog.title === subMenuCatalog.title
                    ? "focused_menu_item"
                    : ""
                }
              >
                <IconButton size="large">{catalog.icon}</IconButton>
                <Link to={`${catalog.id}`} className="flexgrow">
                  {catalog.title}
                </Link>
                <ArrowRightWithoutColorIcon />
              </MenuItem>
            ))}
          </StyledDropDown>
        </Grid>
        <Grid item xs={6}>
          <StyledDropDown
            open={open}
            anchorEl={anchorEl}
            handleClose={handleClose}
            classes={{ paper: "subpaper" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography component="h1" variant="h5">
                  {subMenuCatalog.title}
                </Typography>
              </Grid>
              {subMenuCatalog.subMenu.map((catalog) => (
                <Grid item xs={12} key={catalog.id}>
                  <Link to={`${subMenuCatalog.id}/${catalog.id}`}>
                    <MenuItem onClick={closeHandler}>{catalog.title}</MenuItem>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </StyledDropDown>
        </Grid>
      </Grid>
    </StyledMenuCatalog>
  );
};
export default Catalog;

const StyledMenuCatalog = styled(Box)(() => ({
  position: "absolute",
  "& .grid_container": {
    position: "relative",
    background: "red",
    display: "flex",
    width: "390px",
  },
}));

const StyledDropDown = styled(DropDown)(({ theme }) => ({
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
  "& .flexgrow": {
    flexGrow: 1,
  },
  "& .paper .MuiMenuItem-root:hover": {
    background: theme.palette.secondary.main,
    borderRadius: "11px",
    color: theme.palette.grey[200],
  },
  "& .paper .MuiMenuItem-root.focused_menu_item": {
    background: theme.palette.secondary.main,
    borderRadius: "11px",
    color: theme.palette.grey[200],
  },
  "& .subpaper .MuiMenuItem-root": {
    color: theme.palette.text.secondary,
    padding: "0",
  },
  "& .subpaper .MuiMenuItem-root:hover": {
    background: "none",
    color: theme.palette.text.primary,
  },
  "& .MuiMenuItem-root": {
    padding: 0,
  },
}));
