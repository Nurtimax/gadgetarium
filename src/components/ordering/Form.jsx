import { Box, FormLabel, styled, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { PatternFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ActionsPaymant } from "../../redux/slices/paymant-slice";
import { ROUTES } from "../../utils/constants/routes";
import { showErrors } from "../../utils/helpers/catch-signup";
import {
  orderingValidateSchema,
  orderingValidateSchemaWithAdreess,
} from "../../utils/helpers/validate";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

const Form = ({ handleNext, data, isChecked }) => {
  const [schema, setSchema] = useState(orderingValidateSchema);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (values) => {
    handleNext();

    const phoneNumber = values.phoneNumber
      .split("-")
      .join("")
      .split("(")
      .join("")
      .split(")")
      .join("");

    const userPersonalData = {
      ...values,
      phoneNumber,
      orderType: isChecked ? "DELIVERY" : "PICKUP",
    };

    navigate(`/${ROUTES.CART}/${ROUTES.PAYMANT_METHOD}`);

    dispatch(ActionsPaymant.getUserPersonalData(userPersonalData));
  };

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    setValues,
    isSubmitting,
  } = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit,
  });

  useEffect(() => {
    setValues({
      ...values,
      ...data,
    });
  }, []);

  useEffect(() => {
    if (isChecked) {
      setSchema(orderingValidateSchemaWithAdreess);
    }
    return () => {
      setSchema(orderingValidateSchema);
    };
  }, [isChecked]);

  return (
    <MainContainer className="form-container" onSubmit={handleSubmit}>
      <Typography className="variant-delivered">Личные данные</Typography>

      <Box className="form-box">
        <Box className="box-input">
          <FormLabel htmlFor="firstName" required>
            Имя
          </FormLabel>
          <StyledInput
            placeholder="Напишите ваше имя"
            type="text"
            id="firstName"
            value={values.firstName}
            onChange={handleChange}
            error={Boolean(errors.firstName)}
            backcolor="white"
          />
        </Box>

        <Box className="box-input">
          <FormLabel required htmlFor="lastName">
            Фамилия
          </FormLabel>
          <StyledInput
            placeholder="Напишите вашу фамилию"
            type="text"
            id="lastName"
            value={values.lastName}
            onChange={handleChange}
            error={Boolean(errors.lastName)}
            backcolor="white"
          />
        </Box>

        <Box className="box-input">
          <FormLabel required htmlFor="email">
            E-mail
          </FormLabel>
          <StyledInput
            placeholder="Напишите ваш email"
            type="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            backcolor="white"
          />
        </Box>

        <Box className="box-input">
          <FormLabel required htmlFor="phoneNumber">
            Телефон
          </FormLabel>
          <StyledInputMask
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            className={errors.phoneNumber && "error"}
            format="+996 (###) ### ###"
            mask="_"
            placeholder="+996(_ _ _) _ _  _ _  _ _"
          />
        </Box>
        {isChecked ? (
          <Box className="address-input">
            <FormLabel htmlFor="address">Адрес доставки</FormLabel>
            <StyledInput
              placeholder="ул.Московская 120, кв 4, дом 9"
              id="address"
              value={values.address || ""}
              onChange={handleChange}
              error={Boolean(errors.address)}
              backcolor="white"
            />
          </Box>
        ) : (
          ""
        )}
      </Box>

      {showErrors(errors) && (
        <Typography
          component="p"
          variant="body2"
          color="error"
          className="error-text"
        >
          {showErrors(errors)}
        </Typography>
      )}
      <StyledButton type="submit" disabled={isSubmitting}>
        Продолжить
      </StyledButton>
    </MainContainer>
  );
};

export default Form;

const MainContainer = styled("form")(() => ({
  "& .MuiFormLabel-asterisk": {
    color: "red",
  },

  "& .error-text": {
    textAlign: "center",
    paddingTop: "20px",
  },

  "&.form-container": {
    paddingTop: "40px",
  },

  "& .form-box": {
    paddingTop: "30px",
    width: "690px",
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",

    "& .box-input": {
      width: "338px",
    },

    "& .address-input": {
      width: "100%",
    },
  },
}));

const StyledInputMask = styled(PatternFormat)(({ theme }) => ({
  marginTop: "8px",
  width: "100%",
  height: "48px",

  "&": {
    border: `0.1px solid ${theme.palette.grey[900]}`,
    background: "white",
    borderRadius: "5px",
    padding: "0 10px",
  },
  "&:focus": {
    border: `0.1px solid ${theme.palette.secondary.main}`,
    background: `${theme.palette.background.default}`,
    borderRadius: "5px",
    color: `${theme.palette.primary.dark}`,
    outline: "none",
  },
  "&.error": {
    border: "1px solid red",
  },
}));

const StyledInput = styled(Input)(() => ({
  marginTop: "8px",
  width: "100%",
  height: "48px",
  backgroundColor: "red",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "30px",
  width: "100%",
  backgroundColor: theme.palette.secondary.main,
  color: "white !important",
}));
