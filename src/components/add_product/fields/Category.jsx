import { FormLabel, MenuItem, Select, styled, Typography } from "@mui/material";
import React from "react";
import { ArrowDownIcon } from "../../../assets";
import { catalogMenu_FAKE_DATA } from "../../../utils/constants";
import Input from "../../UI/input/Input";

const Category = ({ values, handleChange, errors }) => {
  const findedCategory = catalogMenu_FAKE_DATA.find(
    (category) => category.id === Number(values?.categoryId)
  );

  return (
    <>
      <FormLabel required>Выберите категорию</FormLabel>
      <Select
        className="pointer"
        value={values?.categoryId}
        required
        onChange={handleChange}
        name="categoryId"
        displayEmpty
        endAdornment={
          <ArrowDownIcon className="pointer" width={18} height={18} />
        }
        input={<Input error={Boolean(errors.categoryId)} />}
        placeholder="Выбрать"
        renderValue={() => (
          <>
            {findedCategory?.title ? (
              <Typography variant="body1" component="span">
                {findedCategory.title}
              </Typography>
            ) : (
              <Typography
                variant="body1"
                component="span"
                className="placeholder"
              >
                Выбрать
              </Typography>
            )}
          </>
        )}
      >
        {catalogMenu_FAKE_DATA.map((catalog) => (
          <StyledMenuItem key={catalog.id} value={catalog.id}>
            {catalog.title}
          </StyledMenuItem>
        ))}
      </Select>
      {errors.categoryId && (
        <Typography component="p" variant="body2" color="error">
          {errors.categoryId}
        </Typography>
      )}
    </>
  );
};

export default Category;

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  width: "97%",
  margin: "0 auto",
  color: "black",
  "&.MuiMenuItem-root:hover": {
    background: theme.palette.secondary.main,
    borderRadius: "11px",
    color: theme.palette.grey[200],
  },
}));
