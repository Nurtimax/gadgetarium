import {
  Box,
  styled,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Accordion,
  Grid,
} from "@mui/material";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailThunk } from "../../redux/slices/product-details";
import { ArrowLeftIcon } from "../../assets";

const CharacteristicsTabItem = () => {
  const { product } = useParams();

  const { data, details } = useSelector((state) => state.productDetails);
  console.log(data?.attribute?.Характеристики);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetailThunk({ product, attribute: "Характеристики" }));
  }, [dispatch]);

  const memory = useMemo(() => {
    switch (data?.categoryName) {
      case "Смартфоны":
        return (
          <>
            <Grid item xs={5}>
              <li>Память телефона</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.memoryOfPhone}GB</li>
            </Grid>
            <Grid item xs={5}>
              <li>Oперативная память телефона</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.ramOfPhone}GB</li>
            </Grid>
          </>
        );
      case "Ноутбуки":
        return (
          <>
            <Grid item xs={5}>
              <li>Oперативная память ноутбука</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.ramLaptop}GB</li>
            </Grid>
            <Grid item xs={5}>
              <li>Процессор ноутбука</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.laptopCPU}</li>
            </Grid>
            <Grid item xs={5}>
              <li>Память видеокарты</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.videoCardMemory}GB</li>
            </Grid>
          </>
        );
      case "Планшеты":
        return (
          <>
            <Grid item xs={5}>
              <li>Память планшета</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.memoryOfTablet}GB</li>
            </Grid>
            <Grid item xs={5}>
              <li>Oперативная память планшета</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.ramLaptop}GB</li>
            </Grid>
          </>
        );
      case "Смарт-часы и браслеты":
        return (
          <>
            <Grid item xs={5}>
              <li>Память умных часов</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.memoryOfSmartWatch}GB</li>
            </Grid>
            <Grid item xs={5}>
              <li>Экран диагональ смарт-часов</li>
            </Grid>
            <Grid item xs={7}>
              <li>
                {data?.attribute?.Характеристики?.screenDiagonalOfSmartWatch}
              </li>
            </Grid>
          </>
        );

      default:
        return null;
    }
  }, [data, details]);

  const mainFeatures = useMemo(() => {
    switch (data?.categoryName) {
      case "Смартфоны":
        return (
          <>
            <Grid item xs={5}>
              <li>Сим-карты</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.simCard}</li>
            </Grid>
            <Grid item xs={5}>
              <li>Цвет</li>
            </Grid>
            <Grid item xs={7}>
              <li>{details.colorName}</li>
            </Grid>
          </>
        );
      case "Ноутбуки":
        return (
          <>
            <Grid item xs={5}>
              <li>Цвет</li>
            </Grid>
            <Grid item xs={7}>
              <li>{details?.colorName}</li>
            </Grid>
            <Grid item xs={5}>
              <li>Разрешение экрана ноутбука</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.screenResolutionLaptop}</li>
            </Grid>
            <Grid item xs={5}>
              <li>Pазмер экрана ноутбука</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.screenSizeLaptop}</li>
            </Grid>
          </>
        );
      case "Планшеты":
        return (
          <>
            <Grid item xs={5}>
              Цвет
            </Grid>
            <Grid item xs={7}>
              {details?.colorName}
            </Grid>
            <Grid item xs={5}>
              <li>Разрешение экрана планшета</li>
            </Grid>
            <Grid item xs={7}>
              <li>
                {data?.attribute?.Характеристики?.screenResolutionOfTablet}
              </li>
            </Grid>
            <Grid item xs={5}>
              <li>Размер экрана планшета</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.screenSizeOfTablet}</li>
            </Grid>
            <Grid item xs={5}>
              <li>Диагональ экрана</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.screenDiagonalOfTablet}</li>
            </Grid>
          </>
        );
      case "Смарт-часы и браслеты":
        return (
          <>
            <Grid item xs={5}>
              <li>Материал браслета</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.braceletMaterial}</li>
            </Grid>
            <Grid item xs={5}>
              <li>Чехол</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.caseShape}</li>
            </Grid>
            <Grid item xs={5}>
              <li>Пол</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.gender}</li>
            </Grid>
            <Grid item xs={5}>
              <li>водонепроницаемый</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.waterProof}</li>
            </Grid>
            <Grid item xs={5}>
              <li>Беспроводной интерфейс</li>
            </Grid>
            <Grid item xs={7}>
              <li>{data?.attribute?.Характеристики?.wirelessInterface}</li>
            </Grid>
          </>
        );
      default:
        return null;
    }
  }, [data, details]);
  return (
    <Styled_Wrapper>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowLeftIcon />}
          classes={{
            root: "summary",
            expanded: "expanded",
            expandIconWrapper: "expandIconWrapper",
          }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Основные xарактеристики</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container className="key">
            {mainFeatures}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowLeftIcon />}
          classes={{
            root: "summary",
            expanded: "expanded",
            expandIconWrapper: "expandIconWrapper",
          }}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6">Память и процессор</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container className="key">
            {memory}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Styled_Wrapper>
  );
};

export default CharacteristicsTabItem;
const Styled_Wrapper = styled(Box)(() => ({
  width: "90vw",
  height: "100vh",

  "& h6": {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "20px",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "#CB11AB",
  },

  "& .expandIconWrapper.expanded": {
    transform: "rotate(-90deg)",
  },
  "& li": {
    borderTop: "1px solid grey",
    listStyle: "none",
    height: "40px",
    display: "flex",
    alignItems: "center",
  },
  "& .key:last-child": {
    borderBottom: "1px solid grey",
  },
}));
