import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { DeleteIconInCart } from "../../assets";
import CompareTable from "../../components/compare/CompareTableOne";
import { TAB_ITEMS_COMPARE } from "../../utils/constants";
import { checkTabName } from "../../utils/helpers/general";

const Compare = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const compareStatus = searchParams.get("compareStatus");
  // const page = searchParams.get("page_index") || 1;

  const handleTabClick = useCallback((e) => {
    searchParams.set("compareStatus", e.target.name);
    setSearchParams(searchParams);
  });

  useEffect(() => {
    searchParams.set("compareStatus", compareStatus);
    setSearchParams(searchParams);
  }, [compareStatus]);

  return (
    <Paper style={{ background: "#FFFFFF" }}>
      <ContainerStyled>
        <Typography variant="h5" component="h1" className="text_header">
          Сравнение товаров
        </Typography>
        {/* <EmptyCompore /> */}
        <Tabs>
          {TAB_ITEMS_COMPARE.map((tab, i) => (
            <button
              key={i}
              name={tab.tabTitle}
              disabled={compareStatus === `${tab.tabTitle}`}
              onClick={handleTabClick}
            >
              {tab.title} {checkTabName(tab.title)}
            </button>
          ))}
        </Tabs>
        <Box style={{ display: "flex", gap: "30px" }}>
          <FormControlLabel
            control={<Checkbox defaultChecked color="secondary" />}
            label="Показывать только различия"
            style={{
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "14px",
            }}
          />
          <Box style={{ display: "flex", alignItems: "center", gap: "6.5px" }}>
            <DeleteIconInCart />
            <Typography
              style={{
                fontFamily: "Roboto,Helvetica,Arial,sans-serif",
                fontWeight: "400",
                fontSize: "1rem",
                lineHeight: "1.5",
                letterSpacing: "0.00938em",
              }}
            >
              Очистить список
            </Typography>
          </Box>
        </Box>
        <Box className="table-box">
          <CompareTable />
        </Box>
      </ContainerStyled>
    </Paper>
  );
};

export default Compare;
const ContainerStyled = styled(Container)(() => ({
  "& .text_header": {
    height: "83px",
    display: "flex",
    alignItems: "center",
    fontFamily: "Ubuntu",
    fontWeight: "500",
    fontSize: "30px",
    borderBottom: "1px solid #CDCDCD",
  },
  "& .table-box": { paddingBottom: "120px" },
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
