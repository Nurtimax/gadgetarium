import { Grid, MenuItem, Select, styled, Typography } from "@mui/material";
import React from "react";
import { useCallback } from "react";
import { ArrowDownIcon } from "../../../assets";
import { PRODUCT_FORMS_FIELDS } from "../../../utils/constants/add-product";
import Input from "../../UI/input/Input";

const Laptops = ({
  values,
  setFieldValue,
  findedSubProductData,
  getProductIdParam,
}) => {
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

  const findedProduct = PRODUCT_FORMS_FIELDS.find(
    (productform) => productform.id === 3
  );

  return (
    <>
      {findedProduct.content.map((content) => (
        <Grid key={content.id} item xs={12}>
          <Typography component="p" variant="body1">
            {content.name}
          </Typography>
          <Select
            onChange={changeCharacteristicsHandler}
            name={content.key}
            value={findedSubProductData.characteristics[content.key]}
            displayEmpty
            IconComponent={() => <ArrowDownIcon width={23} height={23} />}
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
        </Grid>
      ))}
    </>
  );
};

export default Laptops;

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
