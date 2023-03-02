import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { Container, styled } from "@mui/material";
import Forms from "../../components/add_product/Forms";
import { useFormik } from "formik";
import {
  PRODUCT_INITIALSTATE,
  PRODUCT_INITIALSTATESCHEMA,
} from "../../utils/constants/add-product";
import PriceQuantity from "../../components/add_product/PriceQuantity";
import DescriptionOverview from "../../components/add_product/DescriptionOverview";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const AddProduct = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setValues, setFieldValue, values, handleChange } = useFormik({
    initialValues: PRODUCT_INITIALSTATE,
    validationSchema: PRODUCT_INITIALSTATESCHEMA,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
    validateOnChange: false,
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const sendData = (value) => {
    // dispatch(addProductThunk(value));
    setValues((prevState) => ({ ...prevState, ...value }));
    handleNext();
    setSearchParams({ stepper: steps[activeStep].title });
  };

  const steps = [
    {
      id: 1,
      title: "Добавление товара",
      link: "",
      component: <Forms getData={sendData} handleNext={handleNext} />,
    },
    {
      id: 2,
      title: "Установка цены и количества товара",
      link: "",
      component: (
        <PriceQuantity
          handleNext={handleNext}
          tableData={values.subProductRequests}
          setFieldValue={setFieldValue}
          values={values}
        />
      ),
    },
    {
      id: 3,
      title: "Описание и обзор",
      link: "",
      component: (
        <DescriptionOverview
          setFieldValue={setFieldValue}
          values={values}
          handleChange={handleChange}
        />
      ),
    },
  ];

  useEffect(() => {
    setSearchParams({ stepper: steps[activeStep].title });
  }, [activeStep]);

  const stepper = searchParams.get("stepper");

  return (
    <StyledAddProduct>
      <Container>
        <Box className="add_item">
          <Typography component="h1" variant="h4">
            {stepper || steps[activeStep].title}
          </Typography>
        </Box>
        <Stepper activeStep={Number(activeStep)}>
          {steps.map((label) => {
            return (
              <Step key={label.id} completed={false}>
                <StepLabel>
                  <Typography variant="body1" component="span">
                    {label.title}
                  </Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {steps[activeStep].component}
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
