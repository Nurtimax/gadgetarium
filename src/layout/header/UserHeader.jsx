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

const UserHeader = () => {
  const [isScroll, setIsScroll] = useState(false);

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
    <Box className={isScroll ? "stop" : ""}>
      <AppBar position={isScroll ? "fixed" : "relative"}>
        <Container className={`${isScroll ? "none" : ""}`}>
          <Toolbar className="padding flex">
            <Grid container spacing={1} className="between">
              <Grid item xs={2.5}>
                <Logo />
              </Grid>
              <Grid item xs={5.5}>
                <NavLinks page={userPages} />
              </Grid>
              <Grid item xs={3.5} className={`height flex `}>
                <UserProfile />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
        <Divider color="grey[200]" />
        <Container>
          <Toolbar className="padding">
            <Grid container className="between flex gap">
              <Grid item xs={2} className={`${!isScroll ? "none" : ""}`}>
                <Logo />
              </Grid>
              <Grid item xs={1.5} className="flex gap2">
                <Box className="flexgrow flex height">
                  <ButtonStyled
                    className="gap capitalize"
                    variant="contained"
                    color="secondary"
                    icon={<CatalogIcon />}
                  >
                    Каталог {Math.round(Math.random() * 10)}
                  </ButtonStyled>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <SearchItem />
              </Grid>
              <Grid
                item
                xs={2}
                className={`flex-end ${isScroll ? "none" : ""}`}
              >
                <SocialIcons />
              </Grid>
              <Grid item xs={2} className="flex flex-end">
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
