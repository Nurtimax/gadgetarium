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
  MenuItem,
  Paper,
  styled,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  tooltipClasses,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  CatalogIcon,
  FaceBookIcon,
  InstagramIcon,
  Logo,
  ProfileIcon,
  WhatsAppIcon,
} from "../assets";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Search from "../components/UI/Search";
import DropDown from "../components/UI/DropDown";
import { adminPage, iconsData, userPages } from "../utils/constants";

const Header = ({ isAdmin = false }) => {
  const [admin, setAdmin] = useState(isAdmin);
  const [value, setValue] = useState("");
  const [anchorState, setAnchorState] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (!open) {
      setAnchorEl(event.currentTarget);
      return;
    }
    setAnchorEl(null);
  };

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleAdminHandler = () => {
    setAdmin((prev) => !prev);
    setValue("");
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
    <Box className="flex gap2 height flex-end pointer">
      {iconsData.map((icon) => (
        <StyledTooltip
          key={icon.id}
          placement={icon.placementTooltip}
          title={
            icon.title === "cart" ? (
              !icon.cartItem.length ? (
                <Box>
                  <Item>item1</Item>
                </Box>
              ) : (
                <StyledEmptyCart />
              )
            ) : icon.focused ? (
              icon.tooltip_title_compative_remove
            ) : (
              icon.tooltip_title_compative_add
            )
          }
          className={icon.className}
        >
          <Badge badgeContent={icon.badgeContent.length} color={icon.color}>
            {icon.iconDefault}
          </Badge>
        </StyledTooltip>
      ))}
    </Box>
  );

  const userProfile = (
    <Box className="flex gap flexgrow flex-end">
      <Typography variant="body1" component="div">
        +996 (400) 00-00-00
      </Typography>
      <Box className="relative">
        <IconButton size="large" color="inherit" onClick={handleClick}>
          <ProfileIcon />
        </IconButton>
        <StyledDropDown
          open={open}
          handleClose={handleClick}
          anchorEl={anchorEl}
          vertical="bottom"
          horizontal="center"
        >
          <Grid container spacing={1} className="pointer">
            <Grid item xs={12}>
              <MenuItem>Войти</MenuItem>
            </Grid>
            <Grid item xs={12}>
              <MenuItem>Регистрация</MenuItem>
            </Grid>
          </Grid>
        </StyledDropDown>
      </Box>
    </Box>
  );

  const adminProfile = (
    <Box className="flex gap between">
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
        classes={{ flexContainer: "gap" }}
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
      <Grid item xs={5.5}>
        {navLinks}
      </Grid>
      <Grid item xs={3.5} className="height flex">
        {!admin ? userProfile : adminProfile}
      </Grid>
    </>
  );

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
                <Toolbar className="padding">
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
                      <Box className="flex gap2 height pointer">
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
  "& .padding": {
    padding: "20px",
  },
  "& .relative": {
    position: "relative",
  },
}));

const TabStyled = styled(Tab)(() => ({
  "&.Mui-selected": {
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

const StyledDropDown = styled(DropDown)(() => ({
  position: "absolute",
}));

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`&.show_cart_items .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
  [`&.show_cart_items .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(0.2),
    color: theme.palette.common.black,
  },
}));

export const StyledEmptyCart = styled("div")(({ image }) => ({
  background: `url(${image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
