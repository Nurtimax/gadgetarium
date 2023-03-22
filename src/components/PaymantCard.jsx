import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { styled } from "@mui/material";
import Button from "./UI/button/Button";

const PaymantCard = ({ handleSubmitCard }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { token } = await stripe.createToken(
        elements.getElement(CardElement)
      );

      handleSubmitCard(token);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <CardElement
        options={{
          classes: {
            base: "stripe-container",
          },
        }}
      />

      <StyledButton type="submit">Продолжить</StyledButton>
    </StyledForm>
  );
};

export default PaymantCard;

const StyledForm = styled("form")(() => ({
  width: "450px",

  "& .stripe-container": {
    backgroundColor: "white",
    padding: "50px 20px 80px",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "30px",
  width: "100%",
  backgroundColor: theme.palette.secondary.main,
  color: "white !important",
}));
