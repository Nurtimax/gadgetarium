import {
  AppBar,
  Container,
  Divider,
  Grid,
  styled,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Logo } from "../assets";
import { adminPage, userPages } from "../utils/constants";
import TabsPath from "../components/header/TabsPath";
import Catalog from "../components/header/Catalog";
import FunctionalIcons from "../components/header/FunctionalIcons";
import SocialIcons from "../components/header/SocialIcons";
import { useNavigate } from "react-router-dom";
import SearchItem from "../components/header/SearchItem";

const Header = ({ isAdmin = false }) => {
  const [admin, setAdmin] = useState(isAdmin);
  const [value, setValue] = useState("");
  const [isScroll, setIsScroll] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setAdmin(isAdmin);
    setValue("");
  }, [isAdmin]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    const scroll = e.target.documentElement.scrollTop;
    if (scroll > 80) {
      setIsScroll(true);
      return;
    }
    setIsScroll(false);
  };

  const toggleAdminHandler = () => {
    setAdmin((prev) => !prev);
    setValue("");
  };

  useEffect(() => {
    if (!admin) {
      setValue("Главная");
      navigate("/");
    } else {
      setValue("Товары");
      navigate("/");
    }
  }, [admin]);

  const pageIsAdmin = !admin ? userPages : adminPage;

  if (!value) {
    return <h1>Loading...</h1>;
  }

  return (
    <HeaderStyled>
      <AppBar position={admin ? "fixed" : isScroll ? "fixed" : "relative"}>
        <Container>
          <Toolbar className="padding flex">
            <Grid container spacing={1} className="between">
              <Grid item xs={2.5}>
                <Logo onClick={toggleAdminHandler} />
              </Grid>
              {!admin ? (
                !isScroll ? (
                  <TabsPath
                    admin={admin}
                    pageIsAdmin={pageIsAdmin}
                    setValue={setValue}
                    value={value}
                  />
                ) : (
                  <>
                    <Grid item xs={1.5}>
                      <Catalog />
                    </Grid>
                    <Grid item xs={6}>
                      <SearchItem />
                    </Grid>
                    <Grid item xs={2}>
                      <FunctionalIcons />
                    </Grid>
                  </>
                )
              ) : (
                <TabsPath
                  admin={admin}
                  pageIsAdmin={pageIsAdmin}
                  setValue={setValue}
                  value={value}
                />
              )}
            </Grid>
          </Toolbar>
        </Container>
        <Divider color="grey[200]" />
        {!admin
          ? !isScroll && (
              <Container>
                <Toolbar className="padding">
                  <Grid container className="between flex">
                    <Grid item xs={1} className="flex gap2">
                      <Catalog />
                    </Grid>
                    <Grid item xs={1}>
                      <Divider
                        orientation="vertical"
                        color="white"
                        variant="middle"
                        flexItem
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <SearchItem />
                    </Grid>
                    <Grid item xs={2} className="flex-end">
                      <SocialIcons />
                    </Grid>
                    <Grid item xs={2} className="flex flex-end">
                      <FunctionalIcons />
                    </Grid>
                  </Grid>
                </Toolbar>
              </Container>
            )
          : null}
      </AppBar>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled("header")(({ theme }) => ({
  "& .gap": {
    gap: theme.spacing(1),
  },
  "& .gap2": {
    gap: theme.spacing(2),
  },
}));
