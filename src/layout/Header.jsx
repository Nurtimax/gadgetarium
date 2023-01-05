import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  styled,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  CartIcon,
  CatalogIcon,
  ComparativeIcon,
  FaceBookIcon,
  HeartIcon,
  InstagramIcon,
  Logo,
  ProfileIcon,
  SearchIcon,
  WhatsAppIcon,
} from "../assets";

const Header = () => {
  const [value, setValue] = useState("Главная");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const pages = ["Главная", "О магазине", "Доставка", "FAG", "Контакты"];

  return (
    <HeaderStyled>
      <AppBar>
        <Container>
          <Toolbar>
            <Box className="flexgrow">
              <Logo />
            </Box>
            <Box className="flexgrow">
              <Tabs
                textColor="inherit"
                value={value}
                onChange={handleChange}
                indicatorColor="none"
              >
                {pages.map((page) => (
                  <TabStyled
                    key={page}
                    value={page}
                    label={page}
                    className="capitalize"
                  />
                ))}
              </Tabs>
            </Box>
            <Box className="flex gap flexgrow">
              <Typography variant="body1" component="div">
                +996 (400) 00-00-00
              </Typography>
              <IconButton size="large" color="inherit">
                <ProfileIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
        <Divider color="grey[200]" />
        <Container>
          <Toolbar>
            <Grid container>
              <Grid item xs={1} className="flex">
                <Box className="flexgrow">
                  <ButtonStyled
                    className="gap capitalize"
                    variant="contained"
                    color="secondary"
                  >
                    <CatalogIcon />
                    Каталог{showPassword}
                  </ButtonStyled>
                </Box>
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
                <Box>
                  <FormControlStyled>
                    <OutlinedInput
                      placeholder="Поиск по каталогу магазина"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControlStyled>
                </Box>
              </Grid>
              <Grid item xs={2} className="flex gap2">
                <Badge badgeContent={4} color="info">
                  <FaceBookIcon />
                </Badge>
                <Badge badgeContent={4} color="info">
                  <InstagramIcon />
                </Badge>
                <Badge badgeContent={4} color="info">
                  <WhatsAppIcon />
                </Badge>
              </Grid>
              <Grid item xs={2} className="flex gap2">
                <Badge badgeContent={4} color="error">
                  <ComparativeIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                  <HeartIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                  <CartIcon />
                </Badge>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
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
    background: theme.palette.secondary.main + "",
  },
}));

// const TextFieldStyled = styled(TextField)(({ theme }) => ({
//   "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
//     borderColor: theme.palette.background.default,
//   },
//   "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
//     height: "1.5px",
//   },
// }));

const FormControlStyled = styled(FormControl)(() => ({
  width: "100%",
  border: `1px solid white`,
  padding: 2,
  borderRadius: "10px",
  "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
    height: "7px",
    color: "white",
  },
  "& .MuiFormLabel-root": {
    top: "1%",
    height: "100%",
  },
}));
