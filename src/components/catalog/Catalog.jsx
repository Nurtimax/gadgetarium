import {
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightWithoutColorIcon } from "../../assets";
import { catalogMenu_FAKE_DATA } from "../../utils/constants";

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
            id="account-menu"
            disablePortal
            aria-controls="subcategory-menu"
            open={Boolean(anchorElCatalog)}
            anchorEl={anchorElCatalog}
            onClose={handleCloseCatalog}
            classes={{ paper: "paper" }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
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
                <IconButton size="large" className="gadjet_icon">
                  {catalog.icon}
                </IconButton>
                <Link
                  to={`item/${catalog.id}`}
                  className="flexgrow"
                  onClick={closeHandler}
                >
                  {catalog.title}
                </Link>
                <ArrowRightWithoutColorIcon />
              </MenuItem>
            ))}
          </StyledDropDown>
        </Grid>
        <Grid item xs={6}>
          <StyledDropDown
            disablePortal
            id="subcategory-menu"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            classes={{ paper: "subpaper" }}
            marginThreshold={-380}
            transformOrigin={{ horizontal: "left", vertical: "bottom" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography component="h1" variant="h5">
                  {subMenuCatalog.title}
                </Typography>
              </Grid>
              {subMenuCatalog.subMenu.map((catalog) => (
                <Grid item xs={12} key={catalog.id}>
                  <MenuItem onClick={() => closeHandler()}>
                    <Link to={`item/${subMenuCatalog.id}/${catalog.id}`}>
                      {catalog.title}
                    </Link>
                  </MenuItem>
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
  "& .grid_container": {
    position: "absolute",
    display: "flex",
    width: "50%",
    zIndex: 199,
  },
}));

const StyledDropDown = styled(Menu)(({ theme }) => ({
  "& .MuiBackdrop-root": {
    position: "relative",
  },
  "& .flexgrow": {
    flexGrow: 1,
  },
  "& .paper": {
    maxHeight: "300px",
    maxWidth: "100%",
    padding: "0 8px",
    zIndex: 200,
  },
  "& .subpaper": {
    maxHeight: "33rem",
    padding: ".5rem",
    textAlign: "left",
    zIndex: 201,
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
  "& .MuiPaper-root": {
    position: "static",
  },
  "&.MuiPopover-root": {
    position: "static",
  },
}));
