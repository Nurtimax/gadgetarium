import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { DeleteIcon } from "../../assets";
import Button from "../UI/button/Button";
import Modal from "../UI/Modal";

const Delete = () => {
  const [open, setOpen] = useState(false);

  const openModalWindow = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <StyledDeleteIcon onClick={openModalWindow} />
      {open && (
        <StyledModal open={openModalWindow} handleClose={handleClose}>
          <Typography className="Box" variant="div">
            <Typography>Вы уверены, что хотите удалить товар</Typography>
            <Typography>Айзат Жумагуловой?</Typography>
          </Typography>
          <Box className="flex center gap2">
            <ButtonStyled
              variant="outlined"
              className="cancel_button"
              onClick={handleClose}
            >
              Отменить
            </ButtonStyled>
            <ButtonStyled variant="contained" className="logout_button">
              Удалить
            </ButtonStyled>
          </Box>
        </StyledModal>
      )}
    </div>
  );
};

export default Delete;

const StyledDeleteIcon = styled(DeleteIcon)(() => ({
  cursor: "pointer",
}));

const StyledModal = styled(Modal)(() => ({
  "& .MuiDialog-container": {
    background: "rgba(0,0,0,0.2)",
  },

  "& .MuiDialogContent-root": {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width: "458px",
  },

  "& .Box": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "18px",
    color: "#000000",
    " p:last-of-type": {
      fontWeight: "600",
    },
  },
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: "white !important",
  borderRadius: "46px",
  fontWeight: 700,
  fontSize: 16,
  padding: "10px 15px",
  width: "190px",
  "&.logout_button": {
    background: theme.palette.secondary.main,
    borderRadius: 4,
    width: "100px",
    height: "39px",
  },
  "&.cancel_button": {
    background: "inherit",
    borderRadius: 4,
    width: "130px",
    height: "39px",
    color: `${theme.palette.secondary.main} !important`,
  },
}));
