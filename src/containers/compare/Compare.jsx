import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { DeleteIconInCart } from "../../assets";
import EmptyCompare from "../../components/compare/EmptyCompare";
import {
  deleteCompareProductsByCategoryId,
  getCompareProductByCategoryId,
} from "../../redux/slices/compare-slice";
import CompareTable from "../../components/compare/CompareTable";
import { headers } from "../../utils/constants/compare";

const Compare = () => {
  const { compare } = useSelector((state) => state.compareProducts);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams(headers[0].id);

  const compareStatus = searchParams.get("compareStatus") || headers[0].id;

  const [productTable, setProductTable] = useState(headers[compareStatus - 1]);

  const [isUnique, setIsUnique] = useState(false);

  const [size, setSize] = useState(20);

  const [page, setPage] = useState(1);

  const paramsCompare = {
    categoryId: compareStatus,
    isUnique: isUnique,
    size: size,
    page: page,
  };

  const handleChange = useCallback(
    (e, newCategory) => {
      searchParams.set("compareStatus", e.target.name);
      setSearchParams(searchParams);
      setProductTable(newCategory);
    },
    [searchParams, productTable]
  );

  const toggleHandleIsUnique = () => {
    setIsUnique((prev) => !prev);
  };

  const handleQuantityProducts = () => {
    setSize((prev) => prev + size);
    setPage((prev) => prev + page);
  };

  useEffect(() => {
    dispatch(getCompareProductByCategoryId(paramsCompare));
  }, [
    paramsCompare.isUnique,
    paramsCompare.size,
    paramsCompare.page,
    compareStatus,
  ]);

  const deleteCompareAllProducts = (categoryId) => {
    dispatch(
      deleteCompareProductsByCategoryId({
        params: { categoryId },
        getProducts: paramsCompare,
      })
    );
  };

  useEffect(() => {
    searchParams.set("compareStatus", compareStatus);
    setSearchParams(searchParams);
  }, [compareStatus]);

  return (
    <>
      {compare?.length > 0 ? (
        <PaperStyled>
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
            <Box className="checkbox-show">
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    color="secondary"
                    checked={isUnique}
                  />
                }
                label="Показывать только различия"
                className="label"
                onClick={toggleHandleIsUnique}
              />
              <Box
                onClick={() => deleteCompareAllProducts(compareStatus)}
                className="delete-box pointer"
              >
                <DeleteIconInCart />
                <Typography className="delete-label">
                  Очистить список
                </Typography>
              </Box>
            </Box>
            <Box className="table-box">
              <CompareTable
                productTable={productTable}
                paramsCompare={paramsCompare}
                handleQuantityProducts={handleQuantityProducts}
              />
            </Box>
          </ContainerStyled>
        </PaperStyled>
      ) : (
        <BoxStyled>
          <EmptyCompare
            mainTitle="Сравнивать пока нечего"
            text={
              <p>
                Добавляйте сюда товары, чтобы сравнить их характеристики.
                <br /> Так выбрать станет проще!
              </p>
            }
            buttonText="К покупкам"
          />
        </BoxStyled>
      )}
    </>
  );
};

export default Compare;

const PaperStyled = styled(Paper)(() => ({ background: "#FFFFFF" }));
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
  "& .checkbox-show": { display: "flex", gap: "30px", paddingBottom: "30px" },
  "& .label": { fontFamily: "Inter", fontWeight: "400", fontSize: "14px" },
  "& .delete-box ": { display: "flex", alignItems: "center", gap: "6.5px" },
  "& .delete-label": {
    fontFamily: "Roboto,Helvetica,Arial,sans-serif",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.5",
    letterSpacing: "0.00938em",
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
