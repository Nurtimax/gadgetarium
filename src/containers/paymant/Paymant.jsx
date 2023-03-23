import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Step,
  StepLabel,
  Stepper,
  styled,
  Typography,
} from "@mui/material";
import Button from "../../components/UI/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";
import { priceProductSeparate } from "../../utils/helpers/general";
import { getBasketProduct } from "../../redux/slices/basket-slice";
import { postOrdering } from "../../redux/slices/paymant-slice";

const steps = ["Варианты доставки", "Оплата", "Обзор заказа"];

const Paymant = () => {
  const { personalData, personalCardData } = useSelector(
    (state) => state.paymant
  );

  const { data: basketData, sumOrderData: sumData } = useSelector(
    (state) => state.basket
  );

  const [sumOrderData, setSumOrderData] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    setSumOrderData(
      basketData?.length > 0
        ? basketData?.map((product) => ({ ...product, productCount: 1 }))
        : []
    );
  }, [basketData]);

  useEffect(() => {
    dispatch(getBasketProduct());
  }, []);

  const ordersId = sumOrderData?.map(({ id }) => {
    return id;
  });

  const orderingHandler = () => {
    dispatch(
      postOrdering({
        firstName: personalData.firstName,
        lastName: personalData.lastName,
        email: personalData.email,
        phoneNumber: personalData.phoneNumber,
        address: personalData.address,
        countOfProduct: sumData.count,
        totalSum: parseInt(sumData.total),
        totalDiscount: parseInt(sumData.discount),
        payment: !personalCardData.paymantMethod
          ? "PAYMENT_WITH_CARD"
          : personalCardData.paymantMethod === true
          ? " PAYMANT_OFFLINE_WITH_CARD"
          : " CASH",
        orderType: personalData.orderType,
        subproductsId: ordersId,
      })
    );

    navigate("/cart");
  };

  return (
    <>
      <MainContainer>
        <Typography className="title">Оформление заказа</Typography>

        <Box className="container">
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

            <Typography className="view-order">Обзор заказа</Typography>

            <Box className="view-box">
              <Box>
                <p>Итого</p>
                <span>
                  {priceProductSeparate(
                    Number(String(parseInt(sumData.total)))
                  )}

                  <span>c</span>
                </span>
              </Box>

              <Box>
                <p>Доставка</p>

                <span>{personalData.address}</span>

                <p>
                  <Link to={`/${ROUTES.CART}/${ROUTES.ORDERING}`}>
                    Изменить
                  </Link>
                </p>
              </Box>

              <Box>
                <p>Оплата</p>

                <span>{personalCardData.paymantMethod}</span>

                <p>
                  <Link to={`/${ROUTES.CART}/${ROUTES.PAYMANT_METHOD}`}>
                    Изменить
                  </Link>
                </p>
              </Box>
            </Box>

            <StyledButton type="submit" onClick={orderingHandler}>
              Оформить заказ
            </StyledButton>
          </Box>

          <Box className="box-2">
            <Box className="sum-order-card">
              <Box className="title-box">
                <Typography>Сумма заказа</Typography>
                <Typography>
                  <Link to={`/${ROUTES.CART}`}>Изменить</Link>
                </Typography>
              </Box>

              <Box className="text-container">
                <Box>
                  <Typography>Количество товаров:</Typography>
                  <Typography>Ваша скидка:</Typography>
                  <Typography>Сумма:</Typography>
                </Box>

                <Box>
                  <Typography>{sumData.count} шт.</Typography>
                  <Typography
                    className="discount"
                    style={{
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    –{" "}
                    {priceProductSeparate(
                      Number(String(parseInt(sumData.discount)))
                    )}
                    <li>c</li>
                  </Typography>
                  <Typography
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {priceProductSeparate(
                      Number(String(parseInt(sumData.price)))
                    )}
                    <li>c</li>
                  </Typography>
                </Box>
              </Box>
              <Box className="total">
                <Typography>Итого</Typography>
                <Typography
                  style={{
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  {priceProductSeparate(
                    Number(String(parseInt(sumData.total)))
                  )}
                  <li>c</li>
                </Typography>
              </Box>
            </Box>

            <Box className="product-container">
              {basketData?.map((product, i) => (
                <Box
                  key={i}
                  className="product-box"
                  style={{
                    borderTop: i !== 0 ? "1px solid #CDCDCD" : "none",
                    paddingTop: i !== 0 ? "16px" : "0",
                  }}
                >
                  <img
                    src={product.image}
                    alt="image"
                    className="image-product"
                  />
                  <Box>
                    <Box className="product-name">
                      <Typography>{product.productName}</Typography>
                      <Typography>
                        {product.characteristics.memoryOfPhone}gb
                      </Typography>
                      <Typography>{product.color.toLowerCase()}</Typography>
                    </Box>

                    <Box className="rest-text">
                      <p>Артикул: {product.vendorCode}</p>
                      {/* <p>Кол-во: {product.orderCount}</p> */}
                      <p>Цвет: {product.color}</p>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </MainContainer>
    </>
  );
};

export default Paymant;

const MainContainer = styled(Container)(({ theme }) => ({
  paddingBottom: "120px",
  minHeight: "500px",
  "& .rest-text": {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "14px",
    color: "#384255",
    paddingTop: "7px",
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },

  "& .product-container": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  "& .product-name": {
    display: "flex",
    gap: "5px",
    flexWrap: "wrap",
  },

  "& .product-box": {
    display: "flex",
    gap: "16px",
  },

  "& .image-product": {
    mixBlendMode: "color-burn",
    width: "90px",
    height: "84px",
  },

  "& li": {
    textDecoration: "underline",
    listStyle: "none",
  },

  "& .total": {
    display: "flex",
    justifyContent: "space-between",
  },

  "& .sum-order-card": {
    width: "434px",
    padding: "20px 43px 20px 30px",
    backgroundColor: "#ffff",
  },

  "& .title-box": {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "12px",
    borderBottom: `1px solid ${theme.palette.grey[600]}`,

    "& p:first-of-type": {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "18px",
    },

    "& p:last-of-type": {
      fontFamily: "Inter",
      fontWeight: "700",
      fontSize: "14px",
      color: theme.palette.secondary.light,
    },
  },

  "& .discount": {
    color: theme.palette.error.main,
  },

  "& .text-container": {
    padding: "12px 0",
    display: "flex",
    justifyContent: "space-between",

    "& div:last-of-type": {
      textAlign: "right",
    },
  },

  "& .text-card": {
    paddingLeft: "36px",
    textAlign: "left",
  },

  "& .view-box": {
    width: "410px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    borderBottom: `1px solid ${theme.palette.grey[600]}`,
    paddingBottom: "13px",
    marginBottom: "30px",

    "& div:first-of-type": {
      paddingBottom: "13px",
      borderBottom: `1px solid ${theme.palette.grey[600]}`,
      display: "flex",
      gap: "90px",
      fontFamily: "Inter",
      fontWeight: "800",
      fontSize: "20px",
      color: theme.palette.secondary.main,

      "& span span": {
        textDecoration: "underline",
      },

      "& span": {
        display: "flex",
        gap: "5px",
      },
    },

    "& div:nth-of-type(2)": {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "Inter",
      fontWeight: "800",
      fontSize: "20px",

      "& p:first-of-type": {
        fontWeight: "700",
        fontSize: "16px",
      },

      "& p:last-of-type": {
        fontWeight: "700",
        fontSize: "14px",
        color: "#4B7EE8",
      },

      "& span": {
        fontWeight: "400",
        fontSize: "16px",
        color: "#384255",
        width: "150px",
      },
    },

    "& div:nth-of-type(3)": {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "Inter",
      fontWeight: "800",
      fontSize: "20px",

      "& p:first-of-type": {
        fontWeight: "700",
        fontSize: "16px",
        width: "110px",
      },

      "& p:last-of-type": {
        fontWeight: "700",
        fontSize: "14px",
        color: "#4B7EE8",
      },

      "& span": {
        width: "150px",
        fontWeight: "400",
        fontSize: "16px",
        color: "#384255",
      },
    },
  },

  "& .container": {
    paddingTop: "28px",
    display: "flex",
    justifyContent: "space-between",
  },

  "& .box-1": {
    width: "650px",
  },
  "& .box-2": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  "& .view-order": {
    padding: "38px 0 41px",
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "24px",
  },

  "& .title": {
    paddingBottom: "20px",
    fontFamily: "Ubuntu",
    fontWeight: "500",
    fontSize: "30px",
    color: theme.palette.primary.dark,
    borderBottom: `1px solid ${theme.palette.grey[600]}`,
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

  "& .MuiStepper-root div:nth-of-type(4)": {
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

    "& span span:first-of-type": {
      color: `${theme.palette.secondary.main} !important`,
      "& svg": {
        fill: theme.palette.secondary.main,
      },
    },
  },

  "& .MuiStepConnector-line": {
    borderTop: "3px solid #C6C6C6",
    position: "relative",
    bottom: "17px",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "63%",
  backgroundColor: theme.palette.secondary.main,
  color: "white !important",
}));
