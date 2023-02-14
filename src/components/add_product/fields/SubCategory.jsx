import { MenuItem, Select, styled, Typography } from "@mui/material";
import React from "react";
import { ArrowDownIcon } from "../../../assets";
import { catalogMenu_FAKE_DATA } from "../../../utils/constants";
import Input from "../../UI/input/Input";

const SubCategory = ({ values, handleChange }) => {
  const findedCategory = catalogMenu_FAKE_DATA.find(
    (category) => category.id === Number(values?.categoryId)
  );
  const findedSubCategory = findedCategory?.subcategories?.find(
    (item) => item.id === values?.subCategoryId
  );

  return (
    <>
      <Typography component="p" variant="body1">
        Выберите подкатегорию *
      </Typography>
      <Select
        displayEmpty
        value={values?.subCategoryId}
        onChange={handleChange}
        name="subCategoryId"
        IconComponent={() => <ArrowDownIcon width={23} height={23} />}
        input={<Input />}
        placeholder="Выбрать"
        renderValue={() => (
          <>
            {findedSubCategory?.title ? (
              <Typography variant="body1" component="span">
                {findedSubCategory?.title}
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
        {findedCategory?.subcategories?.map((catalog) => (
          <StyledMenuItem key={catalog.id} value={catalog.id}>
            {catalog.title}
          </StyledMenuItem>
        ))}
      </Select>
    </>
  );
};

export default SubCategory;

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
