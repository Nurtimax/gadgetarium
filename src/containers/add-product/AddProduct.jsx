import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import {
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { ArrowDownIcon, DownloadBannerIcon } from "../../assets";
import Input from "../../components/UI/input/Input";
import { catalogMenu_FAKE_DATA } from "../../utils/constants";
import { useState } from "react";

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
          <StyledFormControl size="small">
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
                  {chooseCatalog.subcategory.map((catalog) => (
                    <StyledMenuItem key={catalog.id}>
                      {catalog.title}
                    </StyledMenuItem>
                  ))}
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
              <Grid item xs={12}></Grid>
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

const StyledFormControl = styled(FormControl)(() => ({
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
  "&.MuiMenuItem-root:hover": {
    background: theme.palette.secondary.main,
    borderRadius: "11px",
    color: theme.palette.grey[200],
  },
}));

const StyledInput = styled(Input)(() => ({
  padding: 0,
}));
