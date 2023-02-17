import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { Container, styled } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import Forms from "../../components/add_product/Forms";
import { useDispatch } from "react-redux";
import { addProductThunk } from "../../redux/slices/add-product";

const steps = [
  "Добавление товара",
  "Установка цены и количества товара",
  "Описание и обзор",
];

const AddProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("stepper");

  const dispatch = useDispatch();

  const changeParams = (stepper) => {
    setSearchParams(stepper);
  };

  const sendData = (value) => {
    console.log(value);
    dispatch(addProductThunk(value));
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
                <StepLabel onClick={() => changeParams({ stepper: index })}>
                  <Typography variant="body1" component="span">
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Forms
          getData={sendData}
          searchParams={searchParams}
          setSearchParams={changeParams}
        />
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
