import { Box, FormLabel, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "../../orders/DatePicker";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import Modal from "../../UI/Modal";

const CreateDiscount = ({ openModal, setOpenModal }) => {
  const [dates, setDates] = useState([null, null]);

  return (
    <StyledCreateDiscount>
      <StyledModal open={openModal} handleClose={setOpenModal}>
        <Typography component="h1" variant="h5" className="flex center">
          Создать скидку
        </Typography>
        <Box component="form" className="flex column gap2">
          <Box className="forms">
            <FormLabel required>Размер скидки</FormLabel>
            <StyledInput placeholder="0%" />
            <StyledDatePicker
              date={dates}
              setDate={setDates}
              FormLabelTitle={["Дата начала скидки", "Дата окончания скидки"]}
            />
          </Box>
          <Box className="flex center gap2 buttons">
            <StyledButton
              variant="outlined"
              className="cancel_button"
              onClick={setOpenModal}
              type="button"
            >
              Отменить
            </StyledButton>
            <StyledButton
              variant="contained"
              className="send_button"
              type="submit"
            >
              отправить
            </StyledButton>
          </Box>
        </Box>
      </StyledModal>
    </StyledCreateDiscount>
  );
};

export default CreateDiscount;

const StyledCreateDiscount = styled(Box)(() => ({}));

const StyledModal = styled(Modal)(() => ({
  "& .MuiDialogContent-root": {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width: "544px",
    alignItems: "center",
  },
  "& .buttons": {
    justifyContent: "space-between",
    width: "100%",
  },
  "& .forms": {
    width: "100%",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  "&.send_button": {
    background: theme.palette.secondary.main,
    borderRadius: 4,
    width: "230px",
    height: "39px",
    textTransform: "uppercase",
  },
  "&.cancel_button": {
    background: "inherit",
    borderRadius: 4,
    width: "230px",
    height: "39px",
    color: `${theme.palette.secondary.main} !important`,
  },
}));

const StyledInput = styled(Input)(() => ({
  width: "100%",
}));

const StyledDatePicker = styled(DatePicker)(() => ({
  "& .MuiInputBase-root": {
    width: "230px",
  },
}));
