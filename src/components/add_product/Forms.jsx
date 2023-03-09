import {
  Box,
  FormLabel,
  Grid,
  Select,
  styled,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useMemo, useState, useCallback, useEffect } from "react";
import { CompactPicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { ChooseColorIcon, DeleteIconInCart, PlusIcon } from "../../assets";
import { ActionAddProductSlice } from "../../redux/slices/add-product-slice";
import { ADDPRODUCT_INITIALSTATE } from "../../utils/constants/add-product";
import { CompactPickerColors } from "../../utils/constants/compact-picker";
import {
  addProductSchema,
  catchErrorValidationHandler,
  validationHandler,
} from "../../utils/helpers/add-product-helper";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import Brand from "./fields/Brand";
import Category from "./fields/Category";
import ColorName from "./fields/ColorName";
import PhoneLaptopTablet from "./fields/PhoneLaptopTablet";
import SubCategory from "./fields/SubCategory";

const Forms = ({ getData }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keys, setKeys] = useState([]);

  const dispatch = useDispatch();

  const ADDPRODUCT_INITIALSTATESCHEMA = addProductSchema(keys);

  const {
    values,
    handleChange,
    setFieldValue,
    handleSubmit,
    errors,
    setValues,
  } = useFormik({
    initialValues: ADDPRODUCT_INITIALSTATE,
    validationSchema: ADDPRODUCT_INITIALSTATESCHEMA,
    onSubmit: (values, action) => {
      getData(values);
      dispatch(
        ActionAddProductSlice.editData({
          brand: values.brandId,
        })
      );
      action.resetForm();
    },
    validateOnChange: false,
  });

  const getProductIdParam = searchParams.get("productId") || 0;

  const { Productbrand } = useSelector((state) => state.addProduct);

  useEffect(() => {
    validationHandler(values.categoryId, setKeys, setValues, values);
  }, [values.categoryId]);

  useEffect(() => {
    catchErrorValidationHandler(errors);
  }, [errors]);

  useEffect(() => {
    dispatch(
      ActionAddProductSlice.editData({
        date: values.dateOfIssue,
      })
    );
  }, [values.dateOfIssue]);

  const addNewProduct = useCallback(() => {
    setFieldValue("subProductRequests", [
      ...values.subProductRequests,
      {
        price: 0,
        countOfProduct: 1,
        color: "",
        images: [],
        characteristics: {},
      },
    ]);
    dispatch(
      ActionAddProductSlice.editData({
        brand: values.brandId,
      })
    );
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

  const findedSubProductData = useMemo(() => {
    if (
      Array.isArray(values?.subProductRequests) &&
      values?.subProductRequests.length > 0
    ) {
      return values?.subProductRequests[Number(getProductIdParam)];
    }
    return null;
  }, [values, getProductIdParam]);

  const color = findedSubProductData ? findedSubProductData.color : "";

  const colorError = useMemo(() => {
    if (Array.isArray(errors.subProductRequests)) {
      return errors.subProductRequests[Number(getProductIdParam)].color;
    }
    return null;
  }, [errors.subProductRequests]);

  const removeProductCountHandler = (index) => () => {
    values.subProductRequests.splice(index, 1);
  };

  if (Productbrand?.message) {
    return <h1>{Productbrand.message}</h1>;
  }

  return (
    <StyledFormControl component="form" size="small" onSubmit={handleSubmit}>
      <Grid container spacing={2.5}>
        <Grid item xl={3.5} md={6} lg={4.3}>
          <Category
            handleChange={handleChange}
            values={values}
            errors={errors}
          />
        </Grid>
        <Grid item xs={6}>
          <SubCategory
            handleChange={handleChange}
            values={values}
            errors={errors}
          />
        </Grid>
        <Grid item xl={3.5} lg={4.3} md={6}>
          <Brand
            handleChange={handleChange}
            values={values}
            errors={errors}
            Productbrand={Productbrand}
          />
        </Grid>
        <Grid item xs={6}>
          <FormLabel required>Гарантия (месяцев)</FormLabel>
          <StyledInput
            onChange={handleChange}
            value={values?.guarantee}
            name="guarantee"
            type="number"
            placeholder="Введите гарантию товара"
            error={Boolean(errors.guarantee)}
          />
          {Boolean(errors.guarantee) && (
            <Typography component="p" variant="body2" color="error">
              {errors.guarantee}
            </Typography>
          )}
        </Grid>
        <Grid item xl={3.5} lg={4.3} md={6}>
          <FormLabel required>Название товара</FormLabel>
          <StyledInput
            onChange={handleChange}
            values={values.productName}
            name="productName"
            placeholder="Введите название товара"
            error={Boolean(errors.productName)}
          />
          {Boolean(errors.productName) && (
            <Typography component="p" variant="body2" color="error">
              {errors.productName}
            </Typography>
          )}
        </Grid>
        <Grid item xs={6} display="flex" flexDirection="column">
          <FormLabel required>Дата выпуска</FormLabel>
          <StyledInput
            onChange={handleChange}
            value={values.dateOfIssue}
            name="dateOfIssue"
            placeholder="Введите название товара"
            error={Boolean(errors.dateOfIssue)}
            type="date"
          />
          {Boolean(errors.dateOfIssue) && (
            <Typography component="p" variant="body2" color="error">
              {errors.dateOfIssue}
            </Typography>
          )}
        </Grid>
        {values.categoryId ? (
          values.subProductRequests.length !== 0 ? (
            <>
              <Grid item xs={12} className="flex">
                <Box
                  className={`scroll scroll_tab flex gap2 products ${
                    values.subProductRequests.length > 10
                      ? "product_width_limit"
                      : ""
                  }`}
                >
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
                      {index !== 0 && (
                        <Box
                          component="span"
                          className="icon_delete"
                          onClick={removeProductCountHandler(index)}
                        >
                          <DeleteIconInCart width={12} height={12} />
                        </Box>
                      )}
                    </StyledButton>
                  ))}
                </Box>
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
                  value={color}
                  IconComponent={() => <ChooseColorIcon />}
                  startAdornment={
                    color && <StyledChooseColor color={color.toString()} />
                  }
                  input={<Input error={Boolean(colorError)} />}
                  renderValue={() => (
                    <>
                      {color ? (
                        <Typography variant="body1" component="span">
                          <ColorName color={color} />
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
                    color={color}
                    colors={CompactPickerColors}
                  />
                </Select>
                {colorError && (
                  <Typography component="p" variant="body2" color="error">
                    {colorError}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <PhoneLaptopTablet
                  handleChange={handleChange}
                  values={values}
                  setFieldValue={setFieldValue}
                  findedSubProductData={findedSubProductData}
                  getProductIdParam={getProductIdParam}
                  errors={errors}
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

const StyledInput = styled(Input)`
  padding: 0 10px;
`;

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
    minWidth: "105px",
    height: "35px",
    color: `${theme.palette.grey[800]} !important`,
    borderColor: `${theme.palette.grey[800]} !important`,
    position: "relative",
    fontSize: "100%",
    "&:hover": {
      background: "none",
    },
    "& > .icon_delete": {
      position: "absolute",
      right: -10,
      top: -10,
      borderRadius: "50%",
      border: "1px solid",
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        background: "#ccc",
      },
      "&:hover svg path": {
        fill: "white",
      },
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
    justifyContent: "flex-end",
    position: "relative",
    padding: "0 10px",
    "& .MuiTypography-root": {
      padding: "0 10px",
    },
  },
  "& .MuiSelect-select": {
    padding: 0,
    display: "flex",
    alignItems: "center",
    width: "90%",
    position: "absolute",
  },
  "& .placeholder": {
    fontFamily: "Inter",
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#91969E",
  },
  "& .MuiFormLabel-asterisk": {
    color: "red",
  },
  "& .MuiSvgIcon-root": {
    display: "none",
  },
  "& .products": {
    padding: ".6rem",
  },
  "& .products.product_width_limit": {
    width: "70vw",
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
