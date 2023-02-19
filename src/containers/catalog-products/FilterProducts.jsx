import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  styled,
} from "@mui/material";
import { filterProducts } from "../../utils/constants";
import { Container } from "@mui/system";

const FilterProducts = () => {
  return (
    <FilterProductsStyled>
      <Paper classes={{ root: "paper" }}>
        <Container classes={{ root: "container" }}>
          <Typography>Сбросить все фильтры</Typography>
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
  "& .container": { maxWidth: "95%" },
  "& .accordion": {
    borderBottom: "1px solid #E8E8E8",
    borderRadius: "0px",
    boxShadow: "none",
  },
  "& .product_title": {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "19px",
  },
  "& .MuiButtonBase-root": {
    height: "30px ",
  },
  "& .MuiPaper-root .MuiPaper-root": { margin: "0px" },
}));
