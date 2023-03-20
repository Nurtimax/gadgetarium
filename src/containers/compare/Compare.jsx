import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  IconButton,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { ArrowRightPinkIcon, DeleteIconInCart } from "../../assets";
import EmptyCompare from "../../components/compare/EmptyCompare";
import {
  // deleteAllCompareProduct,
  getCompareProduct,
} from "../../redux/slices/compare-slice";
import CompareTable from "../../components/compare/CompareTable";
import { headers } from "../../utils/constants/compare";
import { useState } from "react";
import { compareDataAction } from "../../redux/slices/compareData-slice";

const Compare = () => {
  const { compare } = useSelector((state) => state.compareProducts);

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams(headers[0].id);

  const compareStatus = searchParams.get("compareStatus") || headers[0].id;

  const [productTable, setProductTable] = useState(headers[compareStatus - 1]);

  const handleChange = useCallback(
    (e, newCategory) => {
      searchParams.set("compareStatus", e.target.name);
      setSearchParams(searchParams);
      setProductTable(newCategory);
    },
    [searchParams, productTable]
  );

  useEffect(() => {
    dispatch(
      getCompareProduct({
        categoryId: compareStatus,
        isUnique: false,
        size: 12,
        page: 1,
      })
    );

    dispatch(
      compareDataAction.categoryChange({
        categoryId: compareStatus,
      })
    );
  }, [compareStatus]);

  useEffect(() => {
    searchParams.set("compareStatus", compareStatus);
    setSearchParams(searchParams);
  }, [compareStatus]);

  // const deleteCompareAllProducts = () => {
  //   dispatch(deleteAllCompareProduct());
  // };

  return (
    <>
      {compare?.length > 0 ? (
        <Paper style={{ background: "#FFFFFF" }}>
          <ContainerStyled>
            <Typography variant="h5" component="h1" className="text_header">
              Сравнение товаров
            </Typography>

            <Tabs>
              {headers.map((tab) => (
                <button
                  key={tab.id}
                  name={tab.id}
                  disabled={compareStatus === `${tab.id}`}
                  onClick={(e) => handleChange(e, tab)}
                >
                  {tab.categoryName}
                </button>
              ))}
            </Tabs>
            <Box
              style={{ display: "flex", gap: "30px", paddingBottom: "30px" }}
            >
              <FormControlLabel
                control={<Checkbox defaultChecked color="secondary" />}
                label="Показывать только различия"
                style={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              />
              <Box
                style={{ display: "flex", alignItems: "center", gap: "6.5px" }}
                // onClick={() => deleteCompareAllProducts()}
              >
                <DeleteIconInCart />
                <Typography
                  style={{
                    fontFamily: "Roboto,Helvetica,Arial,sans-serif",
                    fontWeight: "400",
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    letterSpacing: "0.00938em",
                  }}
                  className="pointer"
                >
                  Очистить список
                </Typography>
              </Box>
            </Box>
            <Box className="table-box">
              <CompareTable
                productTable={productTable}
                categoryId={compareStatus}
              />
            </Box>
            {compare.length >= 5 ? (
              <IconButton className="arrow-btn">
                <ArrowRightPinkIcon />
              </IconButton>
            ) : (
              ""
            )}
          </ContainerStyled>
        </Paper>
      ) : (
        <BoxStyled>
          <EmptyCompare />
        </BoxStyled>
      )}
    </>
  );
};

export default Compare;
const ContainerStyled = styled(Container)(() => ({
  paddingBottom: "120px",
  "& .text_header": {
    height: "83px",
    display: "flex",
    alignItems: "center",
    fontFamily: "Ubuntu",
    fontWeight: "500",
    fontSize: "30px",
    borderBottom: "1px solid #CDCDCD",
  },
  "& .arrow-btn": {
    width: "50px",
    height: "52px",
    background: "white",
    border: "1px solid #CB11AB",
    boxShadow:
      "0px 2px 6px rgba(0, 0, 0, 0.07), 0px 0px 25px rgba(0, 0, 0, 0.1)",
    possition: "relative",
    bottom: "465px",
    left: "1330px",
    ":hover": { background: "white" },
  },
}));

const Tabs = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  padding: "40px 0 10px 0",

  "& button": {
    cursor: "pointer",
    backgroundColor: theme.palette.grey[200],
    borderRadius: "4px",
    border: `1px solid ${theme.palette.grey[200]}`,
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "16px",
    color: theme.palette.primary.light,
    padding: "8px 20px",
  },

  "& button:disabled": {
    backgroundColor: "#384255",
    color: theme.palette.primary.contrastText,
  },
}));
const BoxStyled = styled(Box)(() => ({
  paddingBottom: "120px",
}));
