import { Box, styled, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import ReactInputMask from "react-input-mask";
import { showErrors } from "../../utils/helpers/catch-signup";
import { orderingValidateSchema } from "../../utils/helpers/validate";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

const Form = ({ handleNext, data, isChecked }) => {
  const onSubmit = (values) => {
    handleNext();

    const phoneNumber = values.phoneNumber
      .split("-")
      .join("")
      .split("(")
      .join("")
      .split(")")
      .join("");

    const registerData = {
      ...values,
      phoneNumber,
      orderType: isChecked ? "DELIVERY" : "PICKUP",
    };

    console.log(registerData);
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
      address: "No address",
    },
    validationSchema: orderingValidateSchema,
    onSubmit,
    validateOnChange: false,
  });

  useEffect(() => {
    setValues({
      ...values,
      ...data,
    });
  }, []);

  return (
    <MainContainer className="form-container" onSubmit={handleSubmit}>
      <Typography className="variant-delivered">Личные данные</Typography>

      <Box className="form-box">
        <Box className="box-input">
          <label htmlFor="firstName">Имя</label>
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
          <label htmlFor="lastName">Фамилия</label>
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
          <label htmlFor="email">E-mail</label>
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
          <label htmlFor="phoneNumber">Телефон</label>
          <StyledInputMask
            mask="+996(999)99-99-99"
            placeholder="+996 (_ _ _) _ _  _ _  _ _"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            className={errors.phoneNumber && "error"}
          />
        </Box>
        {isChecked ? (
          <Box className="address-input">
            <label htmlFor="address">Адрес доставки</label>
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
  "& label:after": {
    content: '" *"',
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

const StyledInputMask = styled(ReactInputMask)(({ theme }) => ({
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
