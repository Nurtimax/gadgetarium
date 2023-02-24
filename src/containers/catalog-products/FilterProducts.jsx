import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Button,
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
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

const FilterProducts = () => {
  const [value, setValue] = useState([500, 300000]);
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <FilterProductsStyled>
      <Paper classes={{ root: "paper" }}>
        <Container classes={{ root: "container" }}>
          <Typography>Сбросить все фильтры</Typography>
          {filterCategory.map((category) => (
            <Accordion key={category.id} classes={{ root: "accordion" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ fill: "#CB11AB" }} />}
              >
                <Typography
                  variant="div"
                  component="body2"
                  classes={{ root: "product_title" }}
                >
                  {category.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {category.subtitle.map((item) => (
                  <ListItem
                    key={item.id}
                    role="listitem"
                    button
                    // onClick={handleToggle(product)}
                  >
                    <ListItemIcon>
                      <Checkbox color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                      // id={labelId}
                      primary={item.title}
                    />
                  </ListItem>
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
                  variant="div"
                  component="body2"
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
                    // gap: "20px",
                    paddingBottom: "25px",
                  }}
                >
                  <Button
                    style={{
                      border: "1px solid #D5D5D5",
                      width: "121px",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                    variant="outlined"
                  >
                    от 500
                  </Button>
                  <Button
                    style={{
                      border: "1px solid #D5D5D5",
                      width: "121px",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                    variant="outlined"
                  >
                    до 250000
                  </Button>
                </Box>

                <Box style={{ width: "280px" }}>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
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
                  variant="div"
                  component="body2"
                  classes={{ root: "product_title" }}
                >
                  {product.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {product.subtitle.map((item) => (
                  <ListItem
                    key={item.id}
                    role="listitem"
                    button
                    onClick={handleToggle(product)}
                  >
                    <ListItemIcon>
                      <Checkbox
                        checked={checked.indexOf(value) !== -1}
                        color="secondary"
                      />
                    </ListItemIcon>
                    <ListItemText
                      // id={labelId}
                      primary={item.title}
                    />
                  </ListItem>
                ))}
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
  "& .container": { maxWidth: "95%", padding: "0px" },
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
  "& .MuiAccordionDetails-root": { padding: "0px" },
  "& .MuiListItem-root": {
    padding: "0px 0px 0px 5px",
  },
  "& .MuiListItemIcon-root": { minWidth: "5px" },
  "&. MuiListItem-root": { padding: "0px" },
  "& .MuiPaper-root .MuiPaper-root": { margin: "0px" },
  "& .MuiSlider-rail": { height: "2px" },
  "& .MuiSlider-track  ": { height: "2px" },
}));
