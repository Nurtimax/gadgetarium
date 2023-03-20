import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { Container, Grid, styled } from "@mui/material";
import { useFormik } from "formik";
import {
  PRODUCT_INITIALSTATE,
  PRODUCT_INITIALSTATESCHEMA,
} from "../../utils/constants/add-product";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  ActionAddProductSlice,
  addProductThunk,
} from "../../redux/slices/add-product-slice";
import { ROUTES } from "../../utils/constants/routes";
import Button from "../../components/UI/button/Button";

const AddProduct = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    activeStep,
    addProductFirstPart,
    values: AllValues,
  } = useSelector((state) => state.addProduct);

  const { values, handleSubmit, setValues, errors } = useFormik({
    initialValues: PRODUCT_INITIALSTATE,
    validationSchema: PRODUCT_INITIALSTATESCHEMA,
    onSubmit: (values, action) => {
      dispatch(addProductThunk(values))
        .unwrap()
        .then((response) => {
          if (response.status === "ok") {
            navigate(`${ROUTES.ADMIN}/${ROUTES.GOODS}`);
            toast.success(response.message, { autoClose: 2000 });
          }
        })
        .catch((error) => toast.error(error.message));
      dispatch(ActionAddProductSlice.resetAllValues());
      action.resetForm();
    },
    validateOnChange: false,
  });

  useEffect(() => {
    setValues((prevState) => ({ ...prevState, ...AllValues }));
  }, [AllValues]);

  useEffect(() => {
    const spreatValues = { ...values, ...addProductFirstPart };
    dispatch(ActionAddProductSlice.editValues(spreatValues));
    setValues((prevState) => ({ ...prevState, ...spreatValues }));
  }, [addProductFirstPart, dispatch]);

  useEffect(() => {
    dispatch(ActionAddProductSlice.getErrors(errors));
  }, [errors]);

  useEffect(() => {
    if (activeStep === 0) {
      navigate("part-1");
    } else if (activeStep === 1) {
      navigate("part-2");
    } else if (activeStep === 2) {
      navigate("part-3");
    } else {
      navigate("part-1");
    }
  }, [activeStep]);

  const steps = [
    {
      id: 1,
      title: "Добавление товара",
    },
    {
      id: 2,
      title: "Установка цены и количества товара",
    },
    {
      id: 3,
      title: "Описание и обзор",
    },
  ];

  return (
    <StyledAddProduct>
      <Container>
        <Box className="add_item">
          <Typography component="h1" variant="h4">
            {steps[activeStep].title}
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
        <Outlet />
        {activeStep === 2 ? (
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container className="padding" width="54.5vw">
              <Grid item xs={12} className="flex gap2 flex-end">
                <StyledButton className="cancel_button" type="button">
                  Отменить
                </StyledButton>
                <StyledButton className="add_button" type="submit">
                  Добавить
                </StyledButton>
              </Grid>
            </Grid>
          </Box>
        ) : null}
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

const StyledButton = styled(Button)(({ theme }) => ({
  width: "134px",
  height: "43px",
  fontSize: "1rem",
  fontWeight: 600,
  "&.cancel_button": {
    border: `1px solid ${theme.palette.secondary.main}`,
    "&:hover": {
      background: "white",
      color: theme.palette.secondary.main,
    },
  },
  "&.add_button": {
    background: theme.palette.secondary.main,
    color: "white",
  },
}));
