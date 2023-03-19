import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Container,
  Step,
  StepLabel,
  Stepper,
  styled,
  Typography,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { ElCardIcon, MasterCardPaymant, VisaIcon } from "../../assets";
import PaymentCard from "../../components/payment-card/PaymentCard";
import Button from "../../components/UI/button/Button";
import { useFormik } from "formik";
import { paymantValidateSchema } from "../../utils/helpers/validate";
import { ActionsPaymant } from "../../redux/slices/paymant-slice";

const steps = ["Варианты доставки", "Оплата", "Обзор заказа"];

const Paymant = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCard = () => {
    setIsChecked(false);
  };

  const handleCardGetting = () => {
    setIsChecked(true);
  };

  const handleCash = () => {
    setIsChecked("cash");
  };

  const onSubmit = (values) => {
    const paymantMethod = !isChecked
      ? "Картой онлайн"
      : isChecked === true
      ? "Картой при получении"
      : "Наличными при получении";

    const token = uuidv4() + uuidv4() + uuidv4();

    const userPersonalCardData = {
      token,
      paymantMethod,
      data: {
        ...values,
      },
    };

    ActionsPaymant.getUserPersonalCardData(userPersonalCardData);
  };

  const { handleSubmit, handleBlur, values, touched, errors, handleChange } =
    useFormik({
      initialValues: {
        cardNumber: "",
        expiryDate: "",
        cvc: "",
        userName: "",
      },
      validationSchema: !isChecked ? paymantValidateSchema : "",
      validateOnChange: false,
      onSubmit,
    });

  return (
    <MainContainer ischecked={isChecked.toString()}>
      <Typography className="ordering-title">Оформление заказа</Typography>

      <Box className="ordering">
        <Box className="box-1">
          <Stepper>
            {steps.map((label) => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          <Box className="card-container">
            <Typography className="variant-delivered">Способ оплаты</Typography>

            <Box className="card-box">
              <Box className="card-1" onClick={handleCard}>
                <Box className="checbox-box">
                  <Checkbox
                    classes={{ root: "checkbox" }}
                    checked={!isChecked ? true : false || false}
                    color="success"
                  />
                  Оплата картой онлайн
                </Box>

                <Box>
                  <MasterCardPaymant />
                  <VisaIcon />
                  <ElCardIcon />
                </Box>
              </Box>
              <Box className="card-2" onClick={handleCardGetting}>
                <Box className="checbox-box">
                  <Checkbox
                    classes={{ root: "checkbox" }}
                    checked={isChecked === true ? true : false || false}
                    color="success"
                  />
                  Картой при получении
                </Box>

                <Typography>Предоплата не требуется.</Typography>

                <Box>
                  <MasterCardPaymant />
                  <VisaIcon />
                  <ElCardIcon />
                </Box>
              </Box>

              <Box className="card-3" onClick={handleCash}>
                <Box className="checbox-box">
                  <Checkbox
                    classes={{ root: "checkbox" }}
                    checked={isChecked === "cash" ? true : false || false}
                    color="success"
                  />
                  Наличными при
                </Box>
                <div className="get">получении</div>

                <Typography>Предоплата не требуется.</Typography>
              </Box>
            </Box>
          </Box>

          <form onSubmit={handleSubmit}>
            {!isChecked ? (
              <Box className="kredit-card">
                <PaymentCard
                  handleBlur={handleBlur}
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                />

                <Box>
                  Платеж защищен. Данные карты передаются только в <br />
                  зашифрованном виде по протоколу SSL, защищаются и <br />
                  обрабатываются по стандарту безопасности PCI DSS.
                </Box>
              </Box>
            ) : (
              ""
            )}

            <StyledButton type="submit">Продолжить</StyledButton>
          </form>
        </Box>
      </Box>
    </MainContainer>
  );
};

export default Paymant;

const MainContainer = styled(Container)(({ theme, ischecked }) => ({
  paddingBottom: "120px",

  "& .kredit-card": {
    display: "flex",
    alignItems: "center",
    gap: "46px",

    "& div:last-of-type": {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "14px",
      color: "#384255",
    },
  },

  "& .card-box": {
    paddingTop: "30px",
    display: "flex",
    gap: "30px",
  },

  "& .card-container": {
    padding: "38px 0 40px",
  },

  "& .card-1": {
    border: ischecked === "false" ? "2px solid #2FC509" : "none",
    backgroundColor: "#ffff",
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: "18px",
    borderRadius: "6px",
    padding: "32px 18px",
    width: "290px",
    height: "137.9px",

    "& .checkbox": {
      paddingRight: "26px",
      width: "16px",
      height: "16px",
    },

    "& div:last-of-type": {
      width: "200px",
      paddingTop: "13px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "13px",
    },
  },

  "& .card-2": {
    border: ischecked === "true" ? "2px solid #2FC509" : "none",
    backgroundColor: "#ffff",
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: "18px",
    padding: "32px 18px",
    borderRadius: "6px",
    width: "290px",
    height: "137.9px",

    "& .checkbox": {
      paddingRight: "26px",
      width: "16px",
      height: "16px",
    },

    "& p": {
      textAlign: "center",
      paddingLeft: "13px",
    },

    "& div:last-of-type": {
      width: "200px",
      paddingTop: "13px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "13px",
    },
  },

  "& .card-3": {
    border: ischecked === "cash" ? "2px solid #2FC509" : "none",
    backgroundColor: "#ffff",
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: "18px",
    padding: "32px 18px",
    borderRadius: "6px",
    width: "290px",
    height: "137.9px",

    "& .checkbox": {
      paddingRight: "26px",
      width: "16px",
      height: "16px",
    },

    "& p": {
      textAlign: "center",
      paddingLeft: "13px",
    },

    "& .get": {
      textAlign: "center",
      width: "165px",
    },
  },

  "& .variant-delivered": {
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: "24px",
  },

  "& .ordering-title": {
    paddingBottom: "20px",
    fontFamily: "Ubuntu",
    fontWeight: "500",
    fontSize: "30px",
    color: theme.palette.primary.dark,
    borderBottom: `1px solid ${theme.palette.grey[600]}`,
  },

  "& .ordering": {
    paddingTop: "28px",
    display: "flex",
    justifyContent: "space-between",
  },

  "& .MuiStepIcon-root": {
    height: "35px",
    width: "35px",
    fill: "#C6C6C6",
  },

  "& .MuiStepIcon-root.Mui-completed": {
    fill: theme.palette.secondary.main,
  },

  "& .Mui-active": {
    color: `${theme.palette.secondary.main} !important`,
    fill: theme.palette.secondary.main,
  },

  "& .MuiStepLabel-root": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "35px",
  },

  "& .MuiStepLabel-label": {
    width: "130px",
  },

  "& .MuiStepLabel-iconContainer": {
    padding: "0",
    display: "flex",
  },

  "& .MuiStep-root": {
    padding: "0",
  },

  "& .MuiStepper-root div:nth-of-type(2)": {
    "& span": {
      borderColor: theme.palette.secondary.main,
    },
  },

  "& .MuiStepper-root div:nth-of-type(3)": {
    "& span span:last-of-type": {
      paddingRight: "50px",
    },

    "& span span:first-of-type": {
      color: `${theme.palette.secondary.main} !important`,
      "& svg": {
        fill: theme.palette.secondary.main,
      },
    },
  },

  "& .MuiStepper-root div:nth-of-type(5)": {
    "& span span:last-of-type": {
      marginRight: "110px",
    },
  },

  "& .MuiStepConnector-line": {
    borderTop: "3px solid #C6C6C6",
    position: "relative",
    bottom: "17px",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "30px",
  width: "48%",
  backgroundColor: theme.palette.secondary.main,
  color: "white !important",
}));
