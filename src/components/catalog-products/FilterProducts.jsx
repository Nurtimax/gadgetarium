import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ArrowDownIcon, ArrowUpIcon } from "../../assets";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  // FormControlLabel,
  // ListItem,
  // ListItemIcon,
  // ListItemText,
  Paper,
  Slider,
  styled,
} from "@mui/material";
import {
  filterCategory,
  filterPrice,
  filterProducts,
} from "../../utils/constants";
import { Container } from "@mui/system";
import { useState } from "react";
import { priceProductSeparate } from "../../utils/helpers/general";

const FilterProducts = () => {
  const [value, setValue] = useState([500, 300000]);
  const [showResult, setShowResult] = useState(true);
  const [value1, setValue1] = useState();

  // const [checked, setChecked] = React.useState([true, false]);
  // const [checked, setChecked] = useState();

  // const handleToggle = (_, newValue) => () => {
  //   setChecked(newValue);
  // };

  const showDataHandler = (_, value) => {
    setShowResult((prev) => !prev);
    setValue1(value);
  };

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  // const handleChange2 = (event) => {
  //   setChecked([event.target.checked, checked[1]]);
  // };

  return (
    <FilterProductsStyled>
      <Paper classes={{ root: "paper" }}>
        <Container classes={{ root: "container" }}>
          <Typography
            style={{
              width: "291px",
              height: "70px",
              borderBottom: "1px solid #E8E8E8",
              paddingTop: "30px",
              // display: "flex",
              // alignItems: "center",
              margin: "0 auto",
              fontFamily: "Inter",
              fontWeight: "500",
              fontSize: "16px",
              color: "#2C68F5",
            }}
          >
            Сбросить все фильтры
          </Typography>
          {filterCategory.map((category) => (
            <Accordion key={category.id} classes={{ root: "accordion" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ fill: "#CB11AB" }} />}
              >
                <Typography
                  variant="body2"
                  component="div"
                  classes={{ root: "product_title" }}
                >
                  {category.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {category.subtitle.map((item) => (
                  <Box
                    key={item.id}
                    sx={{ display: "flex", flexDirection: "column", ml: 3 }}
                  >
                    <FormControlLabel
                      style={{
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                      label={item.title}
                      control={
                        <Checkbox
                          color="secondary"
                          // checked={checked[0]}
                          // onChange={handleChange2}
                        />
                      }
                    />
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
          {filterPrice.map((item) => (
            <Accordion key={item.id} classes={{ root: "accordion" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ fill: "#CB11AB" }} />}
              >
                <Typography
                  variant="body2"
                  component="div"
                  classes={{ root: "product_title" }}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContant: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  style={{
                    width: "351px",
                    display: "flex",
                    justifyContent: "space-around",
                    paddingBottom: "25px",
                  }}
                >
                  <Button
                    style={{
                      border: "1px solid #D5D5D5",
                      height: "37px",
                      width: "121px",
                      display: "flex",
                      justifyContent: "flex-start",
                      paddingLeft: "10px",
                      gap: "8px",
                    }}
                    variant="outlined"
                  >
                    <span
                      style={{ color: "#91969E", textTransform: "lowercase" }}
                    >
                      от
                    </span>
                    500
                  </Button>
                  <Button
                    style={{
                      border: "1px solid #D5D5D5",
                      height: "37px",
                      width: "121px",
                      display: "flex",
                      justifyContent: "flex-start",
                      paddingLeft: "10px",
                      gap: "8px",
                    }}
                    variant="outlined"
                  >
                    <span
                      style={{ color: "#91969E", textTransform: "lowercase" }}
                    >
                      до
                    </span>
                    {priceProductSeparate(Number(String(250000)))}
                  </Button>
                </Box>

                <Box style={{ width: "95%" }}>
                  <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    // getAriaValueText={valuetext}
                    min={500}
                    max={250000}
                    color="secondary"
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}

          {filterProducts.map((product) => (
            <Accordion key={product.id} classes={{ root: "accordion" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ fill: "#CB11AB" }} />}
              >
                <Typography
                  variant="body2"
                  component="div"
                  classes={{ root: "product_title" }}
                >
                  {product.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {showResult
                  ? product.subtitle.slice(0, 5).map((title) => (
                      <Box
                        key={title.id}
                        sx={{ display: "flex", flexDirection: "column", ml: 3 }}
                      >
                        <FormControlLabel
                          style={{
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          label={title.title}
                          control={
                            <Checkbox
                              color="secondary"
                              // checked={checked[0]}
                              // onChange={handleChange2}
                            />
                          }
                        />
                      </Box>
                    ))
                  : product.subtitle.map((item) => (
                      <Box
                        key={item.id}
                        sx={{ display: "flex", flexDirection: "column", ml: 3 }}
                      >
                        <FormControlLabel
                          style={{
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          label={item.title}
                          control={
                            <Checkbox
                              color="secondary"
                              // checked={checked[0]}
                              // onChange={handleChange2}
                            />
                          }
                        />
                      </Box>
                    ))}
                {product.subtitle?.length > 5 ? (
                  <Button
                    value={value1}
                    onClick={() => showDataHandler()}
                    style={{
                      color: "#2C68F5",
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    {showResult ? (
                      <>
                        <ArrowDownIconStyled />
                        Еще {product.subtitle?.length - 5}
                      </>
                    ) : (
                      <>
                        <ArrowUpIconStyled />
                        Скрыть
                      </>
                    )}
                  </Button>
                ) : (
                  ""
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Paper>
    </FilterProductsStyled>
  );
};

export default FilterProducts;
const FilterProductsStyled = styled(Box)(() => ({
  "& .paper": {
    width: "351px",
  },
  "& .container": {
    maxWidth: "95%",
    padding: "0px",
  },
  "& .accordion": {
    borderBottom: "1px solid #E8E8E8",
    borderRadius: "0px",
    boxShadow: "none",
    padding: "0px",
  },
  "& .product_title": {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "19px",
  },
  "& .MuiCollapse-wrapperInner": { paddingBottom: "20px" },
  "& .MuiPaper-root .MuiPaper-elevation ": { width: "291px" },
  "& .MuiAccordionDetails-root": { padding: "0px" },
  "& .MuiButtonBase-root": {
    padding: "0px",
  },
  "& .MuiPaper-root .MuiPaper-root": { margin: "0 auto" },
  "& .MuiSlider-rail": { height: "2px" },
  "& .MuiSlider-track  ": { height: "2px" },
  "& .MuiBox-root ": { margin: "0px 10px " },
}));
const ArrowDownIconStyled = styled(ArrowDownIcon)(() => ({
  path: {
    fill: "#2C68F5",
  },
}));
const ArrowUpIconStyled = styled(ArrowUpIcon)(() => ({
  path: {
    fill: "#2C68F5",
  },
}));
