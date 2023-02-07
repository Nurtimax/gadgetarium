import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import {
  Container,
  Grid,
  IconButton,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import {
  ArrowDownIcon,
  ChooseColorIcon,
  DownloadBannerIcon,
  PlusIcon,
} from "../../assets";
import Input from "../../components/UI/input/Input";
import { catalogMenu_FAKE_DATA } from "../../utils/constants";
import { useState } from "react";
import Button from "../../components/UI/button/Button";
import { PRODUCTBRAND } from "../../utils/constants/add-product";

const steps = [
  "Добавление товара",
  "Установка цены и количества товара",
  "Описание и обзор",
];

const AddProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [chooseCatalog, setChooseCatalog] = useState({
    id: "",
    subcategory: [],
  });

  const query = searchParams.get("stepper");

  const changeParams = (stepper) => {
    setSearchParams({ stepper });
  };

  return (
    <StyledAddProduct>
      <Container>
        <Box className="add_item">
          <Typography component="h1" variant="h4">
            Добавление товара
          </Typography>
        </Box>
        <Stepper activeStep={Number(query)}>
          {steps.map((label, index) => {
            return (
              <Step key={label} completed={false}>
                <StepLabel onClick={() => changeParams(index)}>
                  <Typography variant="body1" component="span">
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <React.Fragment>
          <StyledFormControl component="form" size="small">
            <Grid container spacing={2.5}>
              <Grid item xs={3.5}>
                <Typography component="p" variant="body1">
                  Выберите категорию *
                </Typography>
                <Select
                  displayEmpty
                  IconComponent={() => <ArrowDownIcon width={23} height={23} />}
                  input={<Input />}
                  placeholder="Выбрать"
                  renderValue={() => (
                    <Typography
                      variant="body1"
                      component="span"
                      className="placeholder"
                    >
                      Выбрать
                    </Typography>
                  )}
                >
                  {catalogMenu_FAKE_DATA.map((catalog) => (
                    <StyledMenuItem
                      key={catalog.id}
                      onClick={() =>
                        setChooseCatalog({
                          id: catalog.id,
                          subcategory: catalog.subcategories,
                        })
                      }
                    >
                      {catalog.title}
                    </StyledMenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={6}>
                <Typography component="p" variant="body1">
                  Выберите подкатегорию *
                </Typography>
                <Select
                  displayEmpty
                  IconComponent={() => <ArrowDownIcon width={23} height={23} />}
                  input={<Input />}
                  placeholder="Выбрать"
                  renderValue={() => (
                    <Typography
                      variant="body1"
                      component="span"
                      className="placeholder"
                    >
                      Выбрать
                    </Typography>
                  )}
                >
                  {chooseCatalog.subcategory.map((catalog) => (
                    <StyledMenuItem key={catalog.id}>
                      {catalog.title}
                    </StyledMenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={3.5}>
                <Typography component="p" variant="body1">
                  Бренд *
                </Typography>
                <Select
                  displayEmpty
                  IconComponent={() => <ArrowDownIcon width={23} height={23} />}
                  input={<Input />}
                  startAdornment={<DownloadBannerIcon width={23} height={23} />}
                  renderValue={() => (
                    <Typography
                      variant="body1"
                      component="span"
                      className="placeholder"
                    >
                      Выберите бренд товара
                    </Typography>
                  )}
                >
                  {PRODUCTBRAND.map((catalog) => (
                    <StyledMenuItem key={catalog.id}>
                      <IconButton size="small">{catalog.icon}</IconButton>
                      {catalog.name}
                    </StyledMenuItem>
                  ))}
                  <StyledButton className="create_product" variant="text">
                    <PlusIcon /> Создать новый бренд
                  </StyledButton>
                </Select>
              </Grid>
              <Grid item xs={6}>
                <Typography component="p" variant="body1">
                  Гарантия (месяцев) *
                </Typography>
                <StyledInput placeholder="Введите гарантию товара" />
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="body1">
                  Название товара *
                </Typography>
                <StyledInput placeholder="Введите название товара" />
              </Grid>
              <Grid item xs={12} display="flex" gap="10px">
                <StyledButton variant="outlined" className="product_button">
                  Product 1
                </StyledButton>
                <StyledButton className="create_product" variant="text">
                  <PlusIcon /> Добавить продукт
                </StyledButton>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="body1">
                  Основной цвет
                </Typography>
                <StyledInput
                  placeholder="Основной цвет"
                  endAdornment={<ChooseColorIcon />}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="body1">
                  Объем памяти
                </Typography>
                <Select
                  displayEmpty
                  IconComponent={() => <ArrowDownIcon width={23} height={23} />}
                  input={<Input />}
                  renderValue={() => (
                    <Typography
                      variant="body1"
                      component="span"
                      className="placeholder"
                    >
                      Выберите объем памяти
                    </Typography>
                  )}
                >
                  {[2, 4, 8, 12, 16, 32].map((catalog) => (
                    <StyledMenuItem key={catalog.id}>
                      {catalog.title}
                    </StyledMenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="body1">
                  Оперативная память
                </Typography>
                <Select
                  displayEmpty
                  IconComponent={() => <ArrowDownIcon width={23} height={23} />}
                  input={<Input />}
                  renderValue={() => (
                    <Typography
                      variant="body1"
                      component="span"
                      className="placeholder"
                    >
                      Выберите оперативную память
                    </Typography>
                  )}
                >
                  {[2, 4, 8, 12, 16, 32].map((catalog) => (
                    <StyledMenuItem key={catalog.id}>
                      {catalog.title}
                    </StyledMenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="body1">
                  Кол-во SIM-карт
                </Typography>
                <Select
                  displayEmpty
                  IconComponent={() => <ArrowDownIcon width={23} height={23} />}
                  input={<Input />}
                  renderValue={() => (
                    <Typography
                      variant="body1"
                      component="span"
                      className="placeholder"
                    >
                      Выберите SIM-карты
                    </Typography>
                  )}
                >
                  {[2, 4, 8, 12, 16, 32].map((catalog) => (
                    <StyledMenuItem key={catalog.id}>
                      {catalog.title}
                    </StyledMenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="body1">
                  Добавьте фото
                </Typography>
                <StyledUploadImages>
                  <Grid container>
                    <Grid item xs={12} className="flex center upload_icon">
                      <DownloadBannerIcon width={36} height={33} />
                    </Grid>
                    <Grid xs={12} className="upload_img">
                      <Typography
                        component="div"
                        variant="body1"
                        className="flex center"
                      >
                        Нажмите или перетащите сюда файл
                      </Typography>
                      <Typography
                        className="flex center column flex-end lists"
                        component="ul"
                        variant="body1"
                      >
                        <Typography component="li">
                          Минимальное разрешение - 450x600
                        </Typography>
                        <Typography component="li">
                          максимальное количество - 10 фото
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </StyledUploadImages>
              </Grid>
              <Grid item xs={3.5} display="grid">
                <StyledButton className="next_button">Далее</StyledButton>
              </Grid>
            </Grid>
          </StyledFormControl>
        </React.Fragment>
      </Container>
    </StyledAddProduct>
  );
};

export default AddProduct;

const StyledAddProduct = styled(Box)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    height: "56px",
    width: "56px",
  },
  "& .Mui-active": {
    color: `${theme.palette.secondary.main} !important`,
  },
  "& .Mui-completed": {
    color: "rgba(0, 0, 0, 0.38)",
  },
  "& .MuiStepper-root": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60vw",
    padding: "40px 0",
  },
  "& .MuiStep-root": {
    flex: "none",
    padding: "0",
  },
  "& .MuiStepConnector-root": {
    flex: "none",
    width: "30px",
  },
  "& .MuiStepConnector-line": {
    borderColor: theme.palette.primary.light,
  },
  "& .add_item": {
    borderBottom: `1px solid ${theme.palette.grey[600]}`,
    padding: "20px 0",
  },
}));

const StyledFormControl = styled(Box)(() => ({
  padding: "60px 0 140px",
  "& .MuiInputBase-root": {
    width: "396px",
    height: "39px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  "& .MuiSelect-select": {
    padding: 0,
    display: "flex",
    alignItems: "center",
  },
  "& .placeholder": {
    fontFamily: "Inter",
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "19px",

    color: "#91969E",
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  width: "97%",
  margin: "0 auto",
  color: "black",
  "&.MuiMenuItem-root:hover": {
    background: theme.palette.secondary.main,
    borderRadius: "11px",
    color: theme.palette.grey[200],
  },
}));

const StyledInput = styled(Input)(() => ({
  padding: 0,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  "&.next_button": {
    background: theme.palette.secondary.main,
    color: "#fff !important",
    width: "99px",
    height: "43px",
    justifySelf: "flex-end",
  },
  "&.product_button": {
    padding: ".5rem",
    width: "107px",
    height: "35px",
    color: `${theme.palette.grey[800]} !important`,
    borderColor: `${theme.palette.grey[800]} !important`,
    "&:hover": {
      background: "none",
    },
  },
  "&.create_product": {
    width: "201px",
    height: "35px",
    color: `${theme.palette.secondary.main} !important`,
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    gap: 6,
    background: "inherit",
  },
}));

const StyledUploadImages = styled(Box)(({ theme }) => ({
  width: "396px",
  height: "168px",
  background: "#D2D4D880",
  border: "1px dashed",
  borderRadius: "4px",
  color: theme.palette.primary.dark,
  "& .upload_icon": {
    height: "75px",
    color: "inherit",
  },
  "& .lists": {
    fontSize: "12px",
    width: "90%",
    justifySelf: "flex-end",
    color: "inherit",
  },
  "& .upload_img": {
    display: "grid",
    color: "inherit",
  },
}));
