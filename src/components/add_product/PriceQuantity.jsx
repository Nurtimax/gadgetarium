import { Box, Grid, styled, Typography } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionAddProductSlice } from "../../redux/slices/add-product";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import AddProductTable from "./table";

const PriceQuantity = ({ tableData, setFieldValue, values, handleNext }) => {
  const { editData } = useSelector((state) => state.addProduct);

  const [value, setValue] = useState(editData[editData.isChecked]);
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(editData[editData.isChecked]);
  }, [editData]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      ActionAddProductSlice.editData({
        [editData.isChecked]: value,
      })
    );

    setFieldValue(
      "subProductRequests",
      values.subProductRequests.map((item, index) => {
        if (index === Number(editData.id)) {
          const newData = {
            ...item,
            [editData.isChecked]: value ? value : 1,
          };
          return newData;
        }
        return item;
      })
    );
    dispatch(
      ActionAddProductSlice.editData({
        [editData.isChecked]: "",
      })
    );
  };

  const nextStepperHandler = () => {
    const emptyFieldsPrice = values.subProductRequests.map((product, index) => {
      if (!Number(product.price)) {
        return index;
      }
      return null;
    });
    const emptyFieldsCount = values.subProductRequests.map((product, index) => {
      if (!Number(product.countOfProduct)) {
        return index;
      }
      return null;
    });

    dispatch(
      ActionAddProductSlice.editData({
        errorPriceId: emptyFieldsPrice,
        errorCountId: emptyFieldsCount,
      })
    );

    if (emptyFieldsPrice.includes(null)) {
      handleNext();
    }
  };

  const findId = useMemo(() => {
    return values.categoryId;
  }, [values.categoryId]);

  return (
    <StyledPriceQuantity component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2.5} className="flex">
        <Grid item>
          <Typography>Общая цена</Typography>
          <StyledInput value={value} onChange={handleChange} type="number" />
        </Grid>
        <Grid item xs={10} className="setting_price_button">
          <StyledButton type="submit">Установить цену</StyledButton>
        </Grid>
        <Grid item xs={12}>
          <AddProductTable tableData={tableData} id={findId} />
        </Grid>
        <Grid item xs={12} className="flex flex-end">
          <StyledButton
            className="next_button"
            type="button"
            onClick={nextStepperHandler}
          >
            Далее
          </StyledButton>
        </Grid>
      </Grid>
    </StyledPriceQuantity>
  );
};

export default PriceQuantity;

const StyledPriceQuantity = styled(Box)(() => ({
  padding: "60px 0",
  "& .flex": {
    alignItems: "flex-end",
  },
}));

const StyledInput = styled(Input)(() => ({
  width: "140px",
  height: "47px",

  background: "#FFFFFF",
  border: "1px solid rgba(144, 156, 181, 0.5)",
  borderRadius: "6px",
}));
const StyledButton = styled(Button)(({ theme }) => ({
  width: "12rem",
  height: "47px",
  fontSize: "1rem",
  color: "#FFFFFF !important",
  background: theme.palette.secondary.main,
  "&:first-of-type": {
    textTransform: "capitalize",
  },
  "&.next_button": {
    width: "100px",
  },
}));
