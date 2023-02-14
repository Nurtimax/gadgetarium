import { Box, Grid, MenuItem, Select, styled, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useCallback } from "react";
import { CompactPicker } from "react-color";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { ArrowDownIcon, ChooseColorIcon, PlusIcon } from "../../assets";
import { addProductThunk } from "../../redux/slices/add-product";
import { PRODUCT_INITIALSTATE } from "../../utils/constants/add-product";
import { CompactPickerColors } from "../../utils/constants/compact-picker";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import Brand from "./fields/Brand";
import Category from "./fields/Category";
import PhoneLaptopTablet from "./fields/PhoneLaptopTablet";
import SubCategory from "./fields/SubCategory";
import UploadImages from "./UploadImages";

const Forms = () => {
  const dispatch = useDispatch();
  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: PRODUCT_INITIALSTATE,
    onSubmit: (values) => {
      dispatch(addProductThunk(values));
    },
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const addNewProduct = useCallback(() => {
    setFieldValue("subProductRequests", [
      ...values.subProductRequests,
      {
        price: 0,
        countOfProduct: 0,
        color: "",
        images: [],
        characteristics: {},
      },
    ]);
  }, [values.subProductRequests]);

  const chooseProductDataHandler = (e) => {
    setSearchParams({ productId: e.target.id });
  };

  const changeHandlerColor = (e) => {
    setFieldValue(
      "subProductRequests",
      values.subProductRequests.map((subproduct, index) => {
        if (index === Number(getProductIdParam)) {
          const newData = {
            ...subproduct,
            color: e.hex,
          };
          return newData;
        }
        return subproduct;
      })
    );
  };
  const changeHandlerPrice = (e) => {
    setFieldValue(
      "subProductRequests",
      values.subProductRequests.map((subproduct, index) => {
        if (index === Number(getProductIdParam)) {
          const newData = {
            ...subproduct,
            price: e.target.value,
          };
          return newData;
        }
        return subproduct;
      })
    );
  };

  const getProductIdParam = searchParams.get("productId");

  const findedSubProductData =
    values.subProductRequests[Number(getProductIdParam)];

  return (
    <StyledFormControl component="form" size="small" onSubmit={handleSubmit}>
      <Grid container spacing={2.5}>
        <Grid item xs={3.5}>
          <Category handleChange={handleChange} values={values} />
        </Grid>
        <Grid item xs={6}>
          <SubCategory handleChange={handleChange} values={values} />
        </Grid>
        <Grid item xs={3.5}>
          <Brand handleChange={handleChange} values={values} />
        </Grid>
        <Grid item xs={6}>
          <Typography component="p" variant="body1">
            Гарантия (месяцев) *
          </Typography>
          <StyledInput
            onChange={handleChange}
            value={values.guarantee}
            name="guarantee"
            type="number"
            placeholder="Введите гарантию товара"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography component="p" variant="body1">
            Название товара *
          </Typography>
          <StyledInput
            onChange={handleChange}
            values={values.productName}
            name="productName"
            placeholder="Введите название товара"
          />
        </Grid>
        {values.categoryId ? (
          values.subProductRequests.length !== 0 ? (
            <>
              <Grid item xs={12} display="flex" gap="10px">
                {values.subProductRequests.map((subProduct, index) => (
                  <StyledButton
                    key={index}
                    variant="outlined"
                    className={`product_button ${
                      index === Number(getProductIdParam)
                        ? "selected_product"
                        : ""
                    }`}
                    id={index}
                    onClick={chooseProductDataHandler}
                  >
                    Product {index + 1}
                  </StyledButton>
                ))}
                <StyledButton
                  className="create_product"
                  variant="text"
                  onClick={addNewProduct}
                >
                  <PlusIcon /> Добавить продукт
                </StyledButton>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="body1">
                  Основной цвет
                </Typography>
                <Select
                  displayEmpty
                  onChange={changeHandlerColor}
                  value={findedSubProductData.color}
                  IconComponent={() => <ChooseColorIcon />}
                  startAdornment={
                    findedSubProductData.color && (
                      <StyledChooseColor color={findedSubProductData.color} />
                    )
                  }
                  input={<Input />}
                  renderValue={() => (
                    <>
                      {findedSubProductData.color ? (
                        <Typography variant="body1" component="span">
                          {findedSubProductData.color}
                        </Typography>
                      ) : (
                        <Typography
                          variant="body1"
                          component="span"
                          className="placeholder"
                        >
                          Основной цвет
                        </Typography>
                      )}
                    </>
                  )}
                >
                  <StyledCompactPicker
                    onChange={changeHandlerColor}
                    color={findedSubProductData.color}
                    colors={CompactPickerColors}
                  />
                </Select>
              </Grid>
              <Grid item xs={12}>
                <PhoneLaptopTablet
                  handleChange={handleChange}
                  values={values}
                  setFieldValue={setFieldValue}
                  findedSubProductData={findedSubProductData}
                  getProductIdParam={getProductIdParam}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="body1">
                  price
                </Typography>
                <Select
                  displayEmpty
                  onChange={changeHandlerPrice}
                  value={findedSubProductData.price}
                  IconComponent={() => <ArrowDownIcon width={23} height={23} />}
                  input={<Input />}
                  renderValue={() => (
                    <>
                      {findedSubProductData.price ? (
                        <Typography variant="body1" component="span">
                          {findedSubProductData.price}
                        </Typography>
                      ) : (
                        <Typography
                          variant="body1"
                          component="span"
                          className="placeholder"
                        >
                          Price
                        </Typography>
                      )}
                    </>
                  )}
                >
                  {[100000].map((catalog) => (
                    <StyledMenuItem key={catalog} value={catalog}>
                      {catalog}
                    </StyledMenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={11}>
                <UploadImages
                  handleChange={handleChange}
                  values={values}
                  setFieldValue={setFieldValue}
                  findedSubProductData={findedSubProductData}
                  getProductIdParam={getProductIdParam}
                />
              </Grid>
              <Grid item xs={3.5} display="grid">
                <StyledButton className="next_button" type="submit">
                  Далее
                </StyledButton>
              </Grid>
            </>
          ) : null
        ) : null}
      </Grid>
    </StyledFormControl>
  );
};

export default Forms;

const StyledInput = styled(Input)(() => ({
  padding: 0,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  "&.next_button": {
    background: theme.palette.secondary.main,
    color: "#fff !important",
    width: "99px",
    height: "43px",
    justifySelf: "flex-end",
  },
  "&.product_button": {
    padding: ".5rem",
    width: "107px",
    height: "35px",
    color: `${theme.palette.grey[800]} !important`,
    borderColor: `${theme.palette.grey[800]} !important`,
    "&:hover": {
      background: "none",
    },
  },
  "&.product_button.selected_product": {
    border: `1px solid ${theme.palette.secondary.main} !important`,
    color: `${theme.palette.secondary.main} !important`,
  },
  "&.create_product": {
    width: "201px",
    height: "35px",
    color: `${theme.palette.secondary.main} !important`,
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    gap: 6,
    background: "inherit",
  },
  "&.create_brand": {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
}));

const StyledFormControl = styled(Box)(() => ({
  padding: "60px 0 140px",
  "& .MuiInputBase-root": {
    width: "396px",
    height: "39px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  "& .MuiSelect-select": {
    padding: 0,
    display: "flex",
    alignItems: "center",
  },
  "& .placeholder": {
    fontFamily: "Inter",
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "19px",

    color: "#91969E",
  },
}));
const StyledCompactPicker = styled(CompactPicker)(() => ({
  width: "400px !important",
  height: "270px",
  "& .flexbox-fix": {
    display: "none !important",
  },
  "& .compact-picker": {
    width: "100%",
    height: "100%",
  },
  "&.compact-picker div span div": {
    height: "28px !important",
    width: "28px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "&.compact-picker div span div div": {
    height: "8px !important",
    width: "8px !important",
    transform: "translate(60%, 60%)",
  },
}));

const StyledChooseColor = styled(Box)(({ color }) => ({
  width: "35px",
  height: "28px",
  background: color,
  borderRadius: "inherit",
}));

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
