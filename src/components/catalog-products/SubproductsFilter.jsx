import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { changeCaseShape } from "../../utils/helpers/general";
import { filteredCatalogSliceAction } from "../../redux/slices/catalog-filter-slice";
import { catalogSliceAction } from "../../redux/slices/catalog";

const SubproductsFilter = ({
  type,
  subCategory = [],
  filterCharacteristicsKey,
}) => {
  const [showResult, setShowResult] = useState(true);
  const [value, setValue] = useState();

  const state = useSelector((state) => state.filteredCatalog);

  const dispatch = useDispatch();

  const showDataHandler = (_, value) => {
    setShowResult((prev) => !prev);
    setValue(value);
  };

  const handleToggle = (title) => {
    dispatch(
      catalogSliceAction.chipsFromFilter({
        title,
        id: filterCharacteristicsKey,
      })
    );
    dispatch(
      filteredCatalogSliceAction.editCharacteristics({
        key: filterCharacteristicsKey,
        title,
      })
    );
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
                        checked={
                          state[filterCharacteristicsKey] ===
                          changeCaseShape(title.title)
                        }
                        onClick={() =>
                          handleToggle(changeCaseShape(title.title))
                        }
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
                        checked={
                          state[filterCharacteristicsKey] ===
                          changeCaseShape(item.title)
                        }
                        onClick={() =>
                          handleToggle(changeCaseShape(item.title))
                        }
                      />
                    }
                  />
                </Box>
              ))}
          {subCategory?.length > 5 ? (
            <Button
              value={value}
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
