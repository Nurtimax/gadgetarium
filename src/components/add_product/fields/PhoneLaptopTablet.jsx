import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  styled,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import { useCallback } from "react";
import { ArrowDownIcon } from "../../../assets";
import { PRODUCT_FORMS_FIELDS } from "../../../utils/constants/add-product";
import Input from "../../UI/input/Input";
import UploadImages from "../UploadImages";

const PhoneLaptopTablet = ({
  values,
  setFieldValue,
  findedSubProductData,
  getProductIdParam,
  errors,
  handleChange,
}) => {
  const imagesError = useMemo(() => {
    if (Array.isArray(errors.subProductRequests)) {
      return errors.subProductRequests[Number(getProductIdParam)].images;
    }
    return null;
  }, [errors.subProductRequests]);

  const changeCharacteristicsHandler = useCallback(
    (e) => {
      setFieldValue(
        "subProductRequests",
        values.subProductRequests.map((subproduct, index) => {
          if (index === Number(getProductIdParam)) {
            const newData = {
              ...subproduct,
              characteristics: {
                ...findedSubProductData.characteristics,
                [e.target.name]: e.target.value,
              },
            };
            return newData;
          }
          return subproduct;
        })
      );
    },
    [values.subProductRequests, findedSubProductData.characteristics]
  );

  if (!values) {
    return null;
  }

  const findedProduct = PRODUCT_FORMS_FIELDS.find(
    (productform) => productform.id === values?.categoryId
  );

  return (
    <Grid container spacing={2}>
      {findedProduct.content.map((content) => (
        <Grid item key={content.id} xs={12}>
          {content.type === "select" ? (
            <>
              <Typography component="p" variant="body1">
                {content.name}
              </Typography>
              <Select
                onChange={changeCharacteristicsHandler}
                name={content.key}
                value={findedSubProductData.characteristics[content.key] || ""}
                displayEmpty
                IconComponent={() => <ArrowDownIcon width={18} height={18} />}
                input={<Input />}
                renderValue={() => (
                  <>
                    {findedSubProductData.characteristics[content.key] ? (
                      <Typography variant="body1" component="span">
                        {findedSubProductData.characteristics[content.key]}
                      </Typography>
                    ) : (
                      <Typography
                        variant="body1"
                        component="span"
                        className="placeholder"
                      >
                        {content.choosePlaceholder}
                      </Typography>
                    )}
                  </>
                )}
              >
                {content.values.map((catalog) => (
                  <StyledMenuItem key={catalog} value={catalog}>
                    {catalog}
                  </StyledMenuItem>
                ))}
              </Select>
            </>
          ) : (
            <>
              <StyledFormControl>
                <FormLabel>{content.name}</FormLabel>
                <RadioGroup
                  onChange={changeCharacteristicsHandler}
                  name={content.key}
                  value={
                    findedSubProductData.characteristics[content.key] || ""
                  }
                  row
                  classes={{ root: "radiogroup" }}
                >
                  {content.values.map((value) => (
                    // <FormControlLabel
                    //   key={value}
                    //   value={value}
                    //   control={
                    //     <Radio
                    //       size="small"
                    //       classes={{ checked: "radio_checked" }}
                    //     />
                    //   }
                    //   label={value}
                    // />
                    <FormControlLabel
                      key={value}
                      value={value}
                      control={
                        <Radio
                          size="small"
                          classes={{ checked: "radio_checked" }}
                        />
                      }
                      label={value}
                    />
                  ))}
                </RadioGroup>
              </StyledFormControl>
              {errors[content.key] && (
                <Typography component="p" variant="body2" color="error">
                  {errors[content.key]}
                </Typography>
              )}
            </>
          )}
        </Grid>
      ))}
      <Grid item xs={11}>
        <UploadImages
          handleChange={handleChange}
          values={values}
          setFieldValue={setFieldValue}
          findedSubProductData={findedSubProductData}
          getProductIdParam={getProductIdParam}
          errors={errors}
        />
        {imagesError && (
          <Typography component="p" variant="body2" color="error">
            {imagesError}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default PhoneLaptopTablet;

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

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    width: "20px",
    height: "20px",
  },
  "& .radio_checked .MuiSvgIcon-root": {
    fill: theme.palette.secondary.main,
  },
  "& .radiogroup": {
    display: "flex",
    justifySelf: "flex-start",
    gap: 30,
  },
  "&.MuiFormControl-root": {
    display: "grid",
  },
}));
