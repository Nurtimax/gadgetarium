import React, { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  Container,
  Step,
  StepLabel,
  Stepper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { ElCardIcon, MasterCardPaymant, VisaIcon } from "../../assets";
import Button from "../../components/UI/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getBasketProduct } from "../../redux/slices/basket-slice";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymantCard from "../../components/PaymantCard";
import { ActionsPaymant, postCardData } from "../../redux/slices/paymant-slice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";

const steps = ["Варианты доставки", "Оплата", "Обзор заказа"];

const PaymantMethod = () => {
  const { data: basketData } = useSelector((state) => state.basket);

  const [sumOrderData, setSumOrderData] = useState([]);

  const navigate = useNavigate();

  const stripePromise = loadStripe(
    "pk_test_51Mg5pAK9GPipSvE7L0rvKziETu5J3giAzUXosXLDAmTBtPvjn9v7SvTYuYDp2ercXLkpKcllJfIXJLUnflmGt0DU00JuzyvD7O"
  );

  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);

  const [name, setName] = useState("");

  const handleCard = () => {
    setIsChecked(false);
  };

  const handleCardGetting = () => {
    setIsChecked(true);
  };

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

  const handleCash = () => {
    setIsChecked("cash");
  };

  const discount = sumOrderData?.reduce((acc, curr) => {
    return Number(acc) + Number(curr.amountOfDiscount);
  }, 0);

  const price = sumOrderData?.reduce((acc, current) => {
    return Number(acc) + Number(current.productCount) * Number(current.price);
  }, 0);

  const handleSubmitCard = (token) => {
    const data = {
      paymantMethod: !isChecked
        ? "Картой онлайн"
        : isChecked === true
        ? "Картой при получении"
        : "Наличными при получении",

      amount: parseInt(price - price / discount) || 0,
      userName: name,
      cardData: {
        ...token,
      },
    };

    if (isChecked === true) {
      navigate(`/${ROUTES.CART}/${ROUTES.PAYMANT}`);
      dispatch(ActionsPaymant.getUserPersonalCardData(data));
    } else if (isChecked === "cash") {
      navigate(`/${ROUTES.CART}/${ROUTES.PAYMANT}`);
      dispatch(ActionsPaymant.getUserPersonalCardData(data));
    }

    if (name) {
      dispatch(
        postCardData({ token: token.id, amount: data.amount, currency: "kgs" })
      );
      dispatch(ActionsPaymant.getUserPersonalCardData(data));
      navigate(`/${ROUTES.CART}/${ROUTES.PAYMANT}`);
    }
  };

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

          {!isChecked ? (
            <Box className="kredit-card">
              <Box>
                <Box className="icons">
                  <VisaIcon />
                  <MasterCardPaymant />
                  <ElCardIcon />
                </Box>

                <Elements stripe={stripePromise}>
                  <PaymantCard handleSubmitCard={handleSubmitCard} />
                </Elements>

                <StyledInput
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  id="standard-basic"
                  label="Имя владельца"
                  variant="standard"
                  err={name}
                />
              </Box>

              <Box>
                Платеж защищен. Данные карты передаются только в <br />
                зашифрованном виде по протоколу SSL, защищаются и <br />
                обрабатываются по стандарту безопасности PCI DSS.
              </Box>
            </Box>
          ) : (
            ""
          )}

          {!isChecked ? (
            ""
          ) : (
            <StyledButton type="submit" onClick={handleSubmitCard}>
              Продолжить
            </StyledButton>
          )}
        </Box>
      </Box>
    </MainContainer>
  );
};

export default PaymantMethod;

const MainContainer = styled(Container)(({ theme, ischecked }) => ({
  paddingBottom: "120px",
  minHeight: "500px",
  "& .kredit-card": {
    display: "flex",
    gap: "46px",
    alignItems: "center",

    "& div:last-of-type": {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "14px",
      color: "#384255",
    },

    "& .icons": {
      display: "flex",
      alignItems: "center",
      gap: "22px",
      position: "relative",
      top: "38px",
      left: "260px",
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

const StyledInput = styled(TextField)(() => ({
  position: "relative",
  bottom: "130px",
  left: "20px",
  width: "90%",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "30px",
  width: "48%",
  backgroundColor: theme.palette.secondary.main,
  color: "white !important",
}));
