import { Box, styled, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ImageEmptyBasket } from "../../assets";
import Button from "../UI/button/Button";
import Modal from "../UI/Modal";

const EmptyBasket = () => {
  const {
    data: orderData,
    personalData,
    status,
  } = useSelector((state) => state.paymant);

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (status === 200) {
      setOpen(true);
    }

    return () => {
      setOpen(false);
    };
  }, [status]);

  return (
    <>
      <StyledModal handleClose={handleClose} open={open} state={true}>
        <Box className="modal">
          <div>
            Спасибо! <br /> Заявка успешна оформлена!
          </div>

          <div>
            Номер заявки <div>{orderData?.orderNumber}</div>
          </div>

          <div>
            Ваша заявка №{orderData?.orderNumber} от - {orderData.dateOfOrder} -
            оформлена
            <br />
            Вся актуальная информация о статусе исполнения <br /> заказа придет
            на указанный email: <br /> {personalData.email}
          </div>
        </Box>

        <Link to="/">
          <StyledButton>Продолжить покупки</StyledButton>
        </Link>
      </StyledModal>

      <MainContainer>
        <img src={ImageEmptyBasket} alt="image" />
        <Typography className="first-text">Ваша корзина пуста</Typography>
        <Typography className="second-text">
          Но вы всегда можете ее наполнить
        </Typography>

        <Link to="/">
          <StyledButton>К покупкам</StyledButton>
        </Link>
      </MainContainer>
    </>
  );
};

export default EmptyBasket;

const StyledModal = styled(Modal)(({ theme }) => ({
  "& .MuiDialog-container": {
    background: "rgba(0,0,0,0.2)",
  },

  "& .modal": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "18px",
    color: theme.palette.primary.main,

    "& div:nth-of-type(2)": {
      padding: "24px 0 22px",
      fontWeight: "600",
      fontSize: "24px",
      display: "flex",
      gap: "10px",
      "& div": {
        color: theme.palette.secondary.main,
      },
    },

    "& div:nth-of-type(3)": {
      fontWeight: "400",
      fontSize: "16px",
    },
  },

  "& .MuiDialogContent-root": {
    width: "563px",
    height: "403px",
    textAlign: "center",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "30px",
  backgroundColor: theme.palette.secondary.main,
  color: "white !important",
  width: "221px",
  height: "43px",
}));

const MainContainer = styled(Box)(({ theme }) => ({
  paddingTop: "120px",
  textAlign: "center",

  "& .first-text": {
    paddingTop: "5px",
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "24px",
    color: theme.palette.primary.main,
  },
  "& .second-text": {
    paddingTop: "5px",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "18px",
    color: theme.palette.primary.main,
  },
}));
