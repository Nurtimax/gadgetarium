import React from "react";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  Grid,
  Input,
  InputLabel,
  styled,
} from "@mui/material";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { ElCardIcon, MasterCard, VisaIcon } from "../../assets";

const PaymentCard = ({ values, handleChange, errors, touched, handleBlur }) => {
  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    wrapperProps,
    meta: { isTouched },
  } = usePaymentInputs({
    errorMessages: {
      emptyCardNumber: "Введите номер карты",
      invalidCardNumber: "Номер карты недействителен",
    },
  });

  const inputStyled = {
    border: "none",
    boxShadow: "none",
  };

  return (
    <BoxStyled className="container">
      <Card className="card">
        <CardContentStyled>
          <Box className="payment-icon">
            <div className="icon">
              <VisaIcon />
              <MasterCard />
              <ElCardIcon />
            </div>
          </Box>

          <Grid container className="payment-container">
            <Grid item xs={12}>
              <PaymentInputsWrapper
                {...wrapperProps}
                styles={{
                  inputWrapper: {
                    base: inputStyled,
                    focused: inputStyled,
                    errored: inputStyled,
                  },
                }}
              >
                <FormControlStyled variant="standard">
                  <InputLabel
                    classes={{ root: "input-label", focused: "focused" }}
                  >
                    Номер карты
                  </InputLabel>
                  <Input
                    classes={{
                      root: "root",
                      focused: "focused",
                      disabled: "disabled",
                    }}
                    value={values?.cardNumber}
                    onChange={handleChange}
                    className="number-input"
                    inputProps={{
                      ...getCardNumberProps(),
                      placeholder: "",
                      maxLength: 19,
                    }}
                  />
                </FormControlStyled>
              </PaymentInputsWrapper>
            </Grid>

            <Grid item xs={6}>
              <PaymentInputsWrapper
                styles={{
                  inputWrapper: {
                    base: inputStyled,
                    focused: inputStyled,
                    errored: inputStyled,
                  },
                }}
                {...wrapperProps}
              >
                <FormControlStyled variant="standard">
                  <InputLabel
                    classes={{ root: "input-label", focused: "focused" }}
                    className="input-label-center"
                  >
                    MM / YY
                  </InputLabel>
                  <Input
                    classes={{
                      root: "root",
                      focused: "focused",
                      disabled: "disabled",
                    }}
                    className="date-input"
                    inputProps={{
                      ...getExpiryDateProps({
                        placeholder: "",
                      }),
                    }}
                    value={values?.expiryDate}
                    onChange={handleChange}
                  />
                </FormControlStyled>
              </PaymentInputsWrapper>
            </Grid>

            <Grid item xs={6}>
              <PaymentInputsWrapper
                styles={{
                  inputWrapper: {
                    base: inputStyled,
                    focused: inputStyled,
                    errored: inputStyled,
                  },
                }}
                {...wrapperProps}
              >
                <FormControlStyled variant="standard">
                  <InputLabel
                    classes={{ root: "input-label", focused: "focused" }}
                    className="input-label-center"
                  >
                    CVC
                  </InputLabel>
                  <Input
                    classes={{
                      root: "root",
                      focused: "focused",
                      disabled: "disabled",
                    }}
                    className="cvc-input"
                    inputProps={{ ...getCVCProps(), placeholder: "" }}
                    value={values?.cvc}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormControlStyled>
              </PaymentInputsWrapper>
            </Grid>
            <Grid item xs={12}>
              <FormControlStyled variant="standard" className="error-lable">
                <InputLabel
                  classes={{ root: "input-label", focused: "focused" }}
                  className="input-label-name"
                >
                  Имя владельца
                </InputLabel>
                <Input
                  name="userName"
                  type="text"
                  classes={{
                    root: "root",
                    focused: "focused",
                    disabled: "disabled",
                  }}
                  className="name-input"
                  value={values?.userName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {isTouched || (errors?.userName && touched?.userName) ? (
                  <p className="error-name">{errors?.userName}</p>
                ) : (
                  ""
                )}
              </FormControlStyled>
            </Grid>
          </Grid>
        </CardContentStyled>
      </Card>
    </BoxStyled>
  );
};

export default PaymentCard;

const BoxStyled = styled(Box)(() => ({
  height: "340px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "& .card": {
    width: "446px",
    height: "268px",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1);",
  },
  "& .ldUoUi": {
    margin: 0,
    padding: "0.5rem",
  },
}));
const CardContentStyled = styled(CardContent)(() => ({
  height: "280px",
  display: "flex",
  paddingTop: "30px",
  flexDirection: "column",
  justifyContent: "flex-end",
  "& .payment-icon": {
    width: "405px",
    display: "flex",
    justifyContent: "flex-end",
  },
  "& .icon": {
    width: "170px",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
  },
  "& .payment-container": {
    height: "200px",
    display: "flex",
    alignItem: "end",
  },
}));

const FormControlStyled = styled(FormControl)(() => ({
  "& .input-label": {
    color: "#91969E",
    fontFamily: "Inter",
    fontWeight: "500",
  },
  "& .input-label.focused": {
    color: "#91969E",
  },

  "& .input-label-center": {
    width: "100%",
    textAlign: "center",
    fontSize: "18px",
  },
  "& .input-label-name": {
    paddingLeft: "10px",
  },
  "& .number-input": {
    width: "398px",
    padding: "4px",
  },
  "& .name-input": {
    width: "398px",
  },
  "& .date-input": {
    width: "132px",
    padding: "6px",
    display: "flex",
    justifyContent: "center",
  },
  "& .cvc-input": {
    width: "114px",
    padding: "6px",
    display: "flex",
    justifyContent: "center",
  },

  "& .error-name": {
    color: "#c9444d",
    fontSize: " 0.75rem",
  },

  "& .root": {
    "&:before": {
      borderBottom: "1px solid #CDCDCD",
    },
    "&:after": {
      borderBottom: "1px solid #CDCDCD ",
    },
    "&.focused:after": {
      borderBottom: "none ",
    },
    "&:hover:not(.disabled):before": {
      borderBottom: "1px solid #CDCDCD ",
    },
    "&.focused": {
      backgroundColor: "#E8F0FD",
      borderRadius: " 4px 4px 0px 0px",
    },
  },
  "&.error-lable": {
    padding: "0.4em 0.6em",
  },
}));
