import { Grid, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useDropDown from "../../../hooks/useDropDown";
import Button from "../../UI/button/Button";
import CreateDiscount from "../create-discount";

const AddProductButton = () => {
  const [openModal, setOpenModal] = useDropDown();

  return (
    <>
      <Grid item xs={4.5} className="flex gap2">
        <Link to="add-product/part-1">
          <StyledButton>Добавить товар</StyledButton>
        </Link>
        <CreateDiscount openModal={openModal} setOpenModal={setOpenModal} />
        <StyledButton onClick={setOpenModal}>Создать скидку</StyledButton>
      </Grid>
    </>
  );
};

export default AddProductButton;

const StyledButton = styled(Button)(({ theme }) => ({
  width: "184px",
  border: `1px solid ${theme.palette.secondary.main}`,
}));
