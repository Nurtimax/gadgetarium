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
import { filteredCatalogSliceAction } from "../../redux/slices/catalog-filter-slice";
import { changeCaseShape } from "../../utils/helpers/general";

const SubproductsFilter = ({
  type,
  subCategory = [],
  filterCharacteristicsKey,
}) => {
  const [value, setValue] = useState();
  const [visibilityCount, setVisibilityCount] = useState(5);

  const state = useSelector((state) => state.filteredCatalog);

  const dispatch = useDispatch();

  const showDataHandler = (_, value) => {
    if (visibilityCount === 5) {
      setVisibilityCount((prevState) => prevState + subCategory.length);
    } else {
      setVisibilityCount(5);
    }
    setValue(value);
  };

  const handleToggle = (title) => {
    if (state[filterCharacteristicsKey]?.includes(title)) {
      return dispatch(
        filteredCatalogSliceAction.editCharacteristicsElse({
          key: filterCharacteristicsKey,
          title,
        })
      );
    }
    return dispatch(
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
          {subCategory.slice(0, visibilityCount).map((item) => (
            <Box key={item.id} className="subcategory-box">
              <FormControlLabel
                className="form-control-label"
                label={item.title}
                control={
                  <Checkbox
                    color="secondary"
                    checked={state[filterCharacteristicsKey]?.includes(
                      item.title
                    )}
                    onClick={() => handleToggle(changeCaseShape(item.title))}
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
              {visibilityCount < 6 ? (
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
