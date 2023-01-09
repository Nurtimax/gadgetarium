import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  styled,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  CartIcon,
  CatalogIcon,
  ComparativeIcon,
  FaceBookIcon,
  HeartIcon,
  InstagramIcon,
  Logo,
  ProfileIcon,
  WhatsAppIcon,
} from "../assets";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Search from "../components/UI/Search";

const Header = ({ isAdmin = false }) => {
  const [admin, setAdmin] = useState(isAdmin);
  const [value, setValue] = useState("");
  const [anchorState, setAnchorState] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    const scroll = e.target.documentElement.scrollTop;
    if (scroll > 50) {
      setIsScroll(true);
      return;
    }
    setIsScroll(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleAdminHandler = () => {
    setAdmin((prev) => prev);
  };

  const toggleAnchorStateHandler = () => {
    setAnchorState((prevState) => !prevState);
  };

  useEffect(() => {
    if (!admin) {
      setValue("Главная");
    } else {
      setValue("Товары");
    }
  }, [admin]);

  const userPages = [
    { id: 11, theme: "Главная" },
    { id: 12, theme: "О магазине" },
    { id: 13, theme: "Доставка" },
    { id: 14, theme: "FAG" },
    { id: 15, theme: "Контакты" },
  ];
  const adminPage = [
    { id: 22, theme: "Товары" },
    { id: 23, theme: "Заказы" },
    { id: 24, theme: "Отзывы и рейтинг" },
  ];

  const pageIsAdmin = !admin ? userPages : adminPage;

  if (!value) {
    return <h1>Loading...</h1>;
  }

  const catalog = (
    <Box className="flexgrow flex height">
      <ButtonStyled
        className="gap capitalize"
        variant="contained"
        color="secondary"
      >
        <CatalogIcon />
        Каталог
      </ButtonStyled>
    </Box>
  );

  const icons = (
    <Box className="flex gap2 height flex-end">
      <Badge badgeContent={1} color="error">
        <ComparativeIcon />
      </Badge>
      <Badge badgeContent={4} color="error">
        <HeartIcon />
      </Badge>
      <Badge badgeContent={4} color="error">
        <CartIcon />
      </Badge>
    </Box>
  );

  const userProfile = (
    <Box className="flex gap flexgrow flex-end">
      <Typography variant="body1" component="div">
        +996 (400) 00-00-00
      </Typography>
      <IconButton size="large" color="inherit">
        <ProfileIcon />
      </IconButton>
    </Box>
  );

  const adminProfile = (
    <Box className="flex gap">
      <Box>
        <ButtonStyled className="createlink">Создать рассылку</ButtonStyled>
      </Box>
      <Divider flexItem orientation="vertical" variant="middle" color="white" />
      <Box>
        <AvatarStyled>G</AvatarStyled>
      </Box>
      <Box
        className="flex color-white pointer"
        onClick={toggleAnchorStateHandler}
      >
        <Typography component="div" variant="body2">
          Администратор
        </Typography>
        <IconButton
          color="inherit"
          className={anchorState ? "transition arrowAnimation" : "transition"}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  );

  const navLinks = (
    <Box className="flex">
      <Tabs
        textColor="inherit"
        value={value}
        onChange={handleChange}
        indicatorColor="none"
      >
        {pageIsAdmin?.map((adminList) => (
          <TabStyled
            key={adminList.id}
            value={adminList.theme}
            label={adminList.theme}
          />
        ))}
      </Tabs>
    </Box>
  );

  const tabsPath = (
    <>
      <Grid item xs={5}>
        {navLinks}
      </Grid>
      <Grid item xs={4} className="height flex">
        {!admin ? userProfile : adminProfile}
      </Grid>
    </>
  );

  return (
    <HeaderStyled>
      <AppBar position={admin ? "fixed" : isScroll ? "fixed" : "relative"}>
        <Container>
          <Toolbar>
            <Grid container spacing={1} className="between">
              <Grid item xs={2.5}>
                <Logo onClick={toggleAdminHandler} />
              </Grid>
              {!admin ? (
                !isScroll ? (
                  tabsPath
                ) : (
                  <>
                    <Grid item xs={1.5}>
                      {catalog}
                    </Grid>
                    <Grid item xs={6}>
                      <Search
                        width="100%"
                        placeholder="Поиск по каталогу магазина"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      {icons}
                    </Grid>
                  </>
                )
              ) : (
                tabsPath
              )}
            </Grid>
          </Toolbar>
        </Container>
        <Divider color="grey[200]" />
        {!admin
          ? !isScroll && (
              <Container>
                <Toolbar>
                  <Grid container className="between">
                    <Grid item xs={1} className="flex gap2">
                      {catalog}
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
                      <Search
                        width="100%"
                        placeholder="Поиск по каталогу магазина"
                      />
                    </Grid>
                    <Grid item xs={2} className="">
                      <Box className="flex gap2 height">
                        <Badge badgeContent={4} color="success">
                          <FaceBookIcon />
                        </Badge>
                        <Badge badgeContent={4} color="success">
                          <InstagramIcon />
                        </Badge>
                        <Badge badgeContent={4} color="success">
                          <WhatsAppIcon />
                        </Badge>
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      {icons}
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
  "& .flexgrow": {
    flexGrow: 1,
  },
  "& .flex": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& .gap": {
    gap: theme.spacing(1),
  },
  "& .gap2": {
    gap: theme.spacing(2),
  },
  "& .capitalize": {
    textTransform: "capitalize",
  },
  "& .height": {
    height: "100%",
  },
  "& .flex-end": {
    justifyContent: "flex-end",
  },
  "& .pointer": {
    cursor: "pointer",
  },
  "& .color-white": {
    color: "white",
  },
  "& .arrowAnimation": {
    transform: "rotate(90deg)",
  },
  "& .transition": {
    transition: "0.3s",
  },
  "& .between": {
    justifyContent: "space-between",
  },
}));

const TabStyled = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    border: `1px solid ${theme.palette.primary.light}`,
    background: "#f8f7f733",
    borderRadius: "3px",
  },
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "700",
  padding: theme.spacing(1),
  "&:hover": {
    background: theme.palette.secondary.main,
  },
  "&.createlink": {
    background: theme.palette.secondary.main,
    color: "white",
    borderRadius: "46px",
    fontWeight: 500,
    fontSize: 12,
  },
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.secondary.main,
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "26px",
  lineHeight: "31px",
}));
