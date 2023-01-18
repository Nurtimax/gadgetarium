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
import TabsPath from "../components/header/TabsPath";
import Catalog from "../components/header/Catalog";
import FunctionalIcons from "../components/header/FunctionalIcons";
import SocialIcons from "../components/header/SocialIcons";
import { useNavigate } from "react-router-dom";
import SearchItem from "../components/header/SearchItem";
import IsScroll from "../components/header/IsScroll";

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

  useEffect(() => {
    if (!admin) {
      setValue("Главная");
      navigate("/");
    } else {
      setValue("Товары");
      navigate("/");
    }
  }, [admin]);

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
                <Logo />
              </Grid>
              {!admin ? (
                <IsScroll
                  isScroll={isScroll}
                  admin={admin}
                  setValue={setValue}
                  value={value}
                />
              ) : (
                <TabsPath admin={admin} setValue={setValue} value={value} />
              )}
            </Grid>
          </Toolbar>
        </Container>
        <Divider color="grey[200]" />
        {!admin
          ? !isScroll && (
              <Container>
                <Toolbar className="padding">
                  <Grid container className="between flex gap">
                    <Grid item xs={1.5} className="flex gap2">
                      <Catalog />
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
