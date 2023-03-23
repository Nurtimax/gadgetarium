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
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GadgetariumSpinnerLoading from "../../components/GadgetariumSpinnerLoading";
import Form from "../../components/ordering/Form";
import { getUserData } from "../../redux/slices/ordering-slice";
import { ROUTES } from "../../utils/constants/routes";
import { priceProductSeparate } from "../../utils/helpers/general";

const steps = ["Варианты доставки", "Оплата", "Обзор заказа"];

const Ordering = () => {
  const { data, isLoading } = useSelector((state) => state.ordering);

  const { data: basketData, isLoading: loading } = useSelector(
    (state) => state.basket
  );

  const [activeStep, setActiveStep] = useState(0);

  const [isChecked, setIsChecked] = useState(false);

  const [sumOrderData, setSumOrderData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setSumOrderData(
      basketData?.length > 0
        ? basketData?.map((product) => ({ ...product, productCount: 1 }))
        : []
    );
  }, [basketData]);

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleDelivered = () => {
    setIsChecked(true);
  };

  const handlePickup = () => {
    setIsChecked(false);
  };

  const orderCount = sumOrderData?.reduce((acc, curr) => {
    return Number(acc) + Number(curr.orderCount);
  }, 0);

  const discount = sumOrderData?.reduce((acc, curr) => {
    return Number(acc) + Number(curr.amountOfDiscount);
  }, 0);

  const price = sumOrderData?.reduce((acc, current) => {
    return Number(acc) + Number(current.productCount) * Number(current.price);
  }, 0);

  return (
    <>
      {isLoading && loading ? (
        <GadgetariumSpinnerLoading />
      ) : (
        <MainContainer ischecked={isChecked.toString()}>
          <Typography className="ordering-title">Оформление заказа</Typography>

          <Box className="ordering">
            <Box className="box-1">
              <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>

              <Box className="card-container">
                <Typography className="variant-delivered">
                  Варианты доставки
                </Typography>

                <Box className="card-box">
                  <Box className="card-1" onClick={handlePickup}>
                    <Box className="checbox-box">
                      <Checkbox
                        classes={{ root: "checkbox" }}
                        checked={!isChecked ? true : false || false}
                        color="success"
                      />
                      Самовывоз из магазина
                    </Box>

                    <Box className="text-card">
                      <Typography>Забрать 20 июля,</Typography>
                      <Typography className="free">Бесплатно</Typography>
                    </Box>
                  </Box>
                  <Box className="card-2" onClick={handleDelivered}>
                    <Box className="checbox-box">
                      <Checkbox
                        classes={{ root: "checkbox" }}
                        checked={isChecked ? true : false || false}
                        color="success"
                      />
                      Доставка курьером
                    </Box>

                    <Box className="text-card">
                      <Typography>Забрать 20 июля,</Typography>
                      <Typography className="free">
                        Бесплатно свыше 10 000 с
                      </Typography>
                      <Typography> до 10 000 с — от 200 с</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Form data={data} handleNext={handleNext} isChecked={isChecked} />
            </Box>

            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
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
                    <Typography>{orderCount} шт.</Typography>
                    <Typography
                      className="discount"
                      style={{
                        display: "flex",
                        gap: "5px",
                      }}
                    >
                      –{" "}
                      {priceProductSeparate(
                        Number(String(parseInt(price / discount)))
                      )}
                      <li>c</li>
                    </Typography>
                    <Typography
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {priceProductSeparate(Number(String(parseInt(price))))}
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
                      Number(String(parseInt(price - price / discount)))
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
                        <p>Кол-во: {product.orderCount}</p>
                        <p>Цвет: {product.color}</p>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </MainContainer>
      )}
    </>
  );
};

export default Ordering;

const MainContainer = styled(Container)(({ theme, ischecked }) => ({
  paddingBottom: "120px",

  "& .product-container": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

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

  "& .card-container": {
    padding: "38px 0 40px",
    borderBottom: `1px solid ${theme.palette.grey[600]}`,
  },

  "& .free": {
    fontWeight: "700",
  },

  "& .card-box": {
    paddingTop: "30px",
    display: "flex",
    gap: "30px",
  },

  "& .checbox-box": {
    paddingBottom: "10px",
  },

  "& .card-1": {
    border: ischecked === "false" ? "2px solid #2FC509" : "none",
    backgroundColor: "#ffff",
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: "18px",
    borderRadius: "6px",
    height: "189px",
    width: "290px",
    padding: "26px 0 0 18px",

    "& .checkbox": {
      paddingRight: "26px",
      width: "16px",
      height: "16px",
    },
  },

  "& .card-2": {
    border: ischecked === "true" ? "2px solid #2FC509" : "none",
    backgroundColor: "#ffff",
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: "18px",
    borderRadius: "6px",
    height: "189px",
    width: "290px",
    padding: "26px 0 0 18px",

    "& .checkbox": {
      paddingRight: "26px",
      width: "16px",
      height: "16px",
    },
  },

  "& .variant-delivered": {
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: "24px",
  },

  "& .box-1": {
    width: "688px",
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
