import { MenuItem, Select, styled, Typography } from "@mui/material";
import React from "react";
import { ArrowDownIcon } from "../../../assets";
import { catalogMenu_FAKE_DATA } from "../../../utils/constants";
import Input from "../../UI/input/Input";

const Category = ({ values, handleChange }) => {
  if (!values && !handleChange) {
    return <h1>Loading...</h1>;
  }

  const findedCategory = catalogMenu_FAKE_DATA.find(
    (category) => category.id === Number(values?.categoryId)
  );

  return (
    <>
      <Typography component="p" variant="body1">
        Выберите категорию *
      </Typography>
      <Select
        value={values?.categoryId}
        onChange={handleChange}
        name="categoryId"
        displayEmpty
        IconComponent={() => <ArrowDownIcon width={23} height={23} />}
        input={<Input />}
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
