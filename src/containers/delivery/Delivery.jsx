import { Box, Container, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { delivery, paymentMethod } from "../../utils/constants";

const Delivery = () => {
  return (
    <DeliveryStyled>
      <Container className="d_flex column root">
        <Box className="delivery-container">
          <Typography
            variant="h5"
            component="h1"
            className="d_flex delivery-caption"
          >
            Доставка
          </Typography>
        </Box>
        <Box className="general-box">
          <Box className="d_flex column root">
            <Typography variant="body1" component="div">
              Город доставки{" "}
              <Typography component="span" className="bishkek">
                Бишкек
              </Typography>
            </Typography>
            <Box className="d_flex column content">
              <Grid container rowSpacing={4}>
                {delivery.map((item) => (
                  <Grid
                    key={item.id}
                    item
                    xs={3.5}
                    className="container-delivery d_flex column"
                  >
                    <Box className="flex-delivery">
                      <Typography
                        variant="body1"
                        component="h6"
                        className="caption d_flex aligncenter"
                      >
                        {item.deliveryIcon}
                        {item.caption}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="div"
                        className="title"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <Box className="d_flex aligncenter text-waller">
                      {item.walletIcon}
                      <Typography>{item.text}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Box className="d_flex column box-method">
                <Typography
                  variant="body1"
                  component="div"
                  className="payment-method"
                >
                  Способы оплаты
                </Typography>
                <Grid container>
                  {paymentMethod.map((item) => (
                    <Grid key={item.id} item md={2.5}>
                      <Box className="d_flex aligncenter text-payment">
                        {item.paymentIcon}
                        <Typography>{item.paymentText}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </DeliveryStyled>
  );
};

export default Delivery;

const DeliveryStyled = styled(Box)(() => ({
  fontFamily: "Inter",
  backgroundColor: "#f4f4f4",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: "2.5rem",
  "& .bishkek": { fontWeight: "600", fontSize: "18px" },
  "& .delivery-container": {
    padding: "1rem 0",
    borderBottom: "1px solid #CDCDCD",
  },

  "& .delivery-caption": {
    fontFamily: "Ubuntu",
    fontWeight: "600",
    fontSize: "2rem",
    lineHeight: "2rem",
    gap: "5rem",
  },
  "& .root": {
    gap: "1.5rem",
    padding: "1rem 0",
  },

  "& .container-delivery": {
    gap: "15px",
  },
  "& .content": { gap: "60px" },
  "& .flex-delivery": {
    "& .caption": {
      gap: "10px",
      fontWeight: "600",
    },
    "& .title": { paddingLeft: "2.3rem" },
  },

  "& .text-waller": {
    gap: "10px",
  },
  "& .text-payment": {
    width: "200px",
    gap: "10px",
  },
  "& .box-method": {
    gap: "30px",
  },
  "& .payment-method": {
    fontWeight: "700",
  },
  "& .d_flex": {
    display: "flex",
  },
  "& .aligncenter": {
    alignItems: "center",
  },
  "& .column": {
    flexDirection: "column",
  },
}));
