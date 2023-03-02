import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  styled,
  Typography,
} from "@mui/material";
import { ArrowDownIcon, ArrowUpIcon } from "../../assets";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SubproductsFilter = ({ type, subCategory = [] }) => {
  const [showResult, setShowResult] = useState(true);
  const [value1, setValue1] = useState();

  const showDataHandler = (_, value) => {
    setShowResult((prev) => !prev);
    setValue1(value);
  };

  return (
    <>
      <AccordionStyled classes={{ root: "accordion" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="arrow-icon" />}
        >
          <Typography
            variant="body2"
            component="div"
            classes={{ root: "product_title" }}
          >
            {type}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {showResult
            ? subCategory.slice(0, 5).map((title) => (
                <Box key={title.id} className="subcategory-box">
                  <FormControlLabel
                    className="form-control-label"
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
            : subCategory.map((item) => (
                <Box key={item.id} className="subcategory-box">
                  <FormControlLabel
                    className="form-control-label"
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
          {subCategory?.length > 5 ? (
            <Button
              value={value1}
              onClick={() => showDataHandler()}
              className="show-more-button"
            >
              {showResult ? (
                <>
                  <ArrowDownIconStyled />
                  Еще {subCategory?.length - 5}
                </>
              ) : (
                <>
                  <ArrowUpIconStyled />
                  Скрыть
                </>
              )}
            </Button>
          ) : null}
        </AccordionDetails>
      </AccordionStyled>
    </>
  );
};

export default SubproductsFilter;

const AccordionStyled = styled(Accordion)(() => ({}));
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
