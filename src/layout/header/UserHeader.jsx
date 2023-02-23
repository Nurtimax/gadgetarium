import {
  AppBar,
  Box,
  Container,
  Divider,
  Grid,
  styled,
  Toolbar,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { CatalogIcon, Logo } from "../../assets";
import FunctionalIcons from "../../components/header/FunctionalIcons";
import SocialIcons from "../../components/header/SocialIcons";
import SearchItem from "../../components/header/SearchItem";
import NavLinks from "../../components/header/NavLinks";
import UserProfile from "../../components/header/UserProfile";
import { userPages } from "../../utils/constants";
import IconButton from "../../components/UI/IconButton";
import Catalog from "../../components/catalog/Catalog";
import useDropDown from "../../hooks/useDropDown";

const UserHeader = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [anchorEl, setAnchorEl] = useDropDown();

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = useCallback((e) => {
    const scroll = e.target.documentElement.scrollTop;
    if (scroll > 90) {
      setIsScroll(true);
      return;
    }
    setIsScroll(false);
  }, []);

  return (
    <Box className={isScroll ? "user_stop" : ""}>
      <AppBar position={isScroll ? "fixed" : "relative"}>
        <Container className={`${isScroll ? "none" : ""}`}>
          <Toolbar className="padding flex">
            <Grid container spacing={1} className="flex between">
              <Grid item xl={2} lg={2} md={1.9}>
                <Logo width="100%" height="100%" />
              </Grid>
              <NavLinks page={userPages} />
              <Grid item xl={3} lg={2.7} md={2.6} className={`height flex `}>
                <UserProfile />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
        <Divider color="grey[200]" />
        <Container>
          <Toolbar className="padding">
            <Grid container className="between flex gap">
              <Grid
                item
                xl={2}
                lg={2.5}
                className={`${!isScroll ? "none" : ""}`}
              >
                <Logo />
              </Grid>
              <Grid item xl={1.5} lg={1.6} className="flex gap2">
                <Box className="flexgrow flex height">
                  <Catalog
                    anchorElCatalog={anchorEl}
                    handleCloseCatalog={setAnchorEl}
                  />
                  <ButtonStyled
                    className="gap capitalize"
                    variant="contained"
                    color="secondary"
                    icon={<CatalogIcon />}
                    onClick={setAnchorEl}
                  >
                    Каталог
                  </ButtonStyled>
                </Box>
              </Grid>
              <Grid item xl={6} lg={5} md={5.6}>
                <SearchItem />
              </Grid>
              <Grid
                item
                xs={2}
                className={`flex-end ${isScroll ? "none" : ""}`}
              >
                <SocialIcons />
              </Grid>
              <Grid item xl={2} lg={1.5} className="flex flex-end">
                <FunctionalIcons />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default UserHeader;

const ButtonStyled = styled(IconButton)(({ theme }) => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "700",
  padding: theme.spacing(1),
  width: "136px",
  "&:hover": {
    background: theme.palette.secondary.main,
  },
}));
