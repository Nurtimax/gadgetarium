import { styled, Typography } from "@mui/material";
import InfographicTabs from "./InfographicTabs";

const Infographic = () => {
  return (
    <div>
      <TitleInfographic>ИНФОГРАФИКА</TitleInfographic>

      <BoxPrices>
        <div>
          <BoughtPrice>
            7 556 <span>С</span>
          </BoughtPrice>
          <OrderedAndBoughtText>Выкупили на сумму</OrderedAndBoughtText>
          <CountBought>12 шт</CountBought>
        </div>

        <Seperator />

        <div>
          <OrderedPrice>
            34 562 <span>С</span>
          </OrderedPrice>
          <OrderedAndBoughtText>Выкупили на сумму</OrderedAndBoughtText>
          <CountOrdered>56 шт</CountOrdered>
        </div>
      </BoxPrices>

      <InfographicTabs />
    </div>
  );
};

export default Infographic;

const TitleInfographic = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: "600",
  fontSize: "12px",
  color: theme.palette.primary.dark,
}));

const BoxPrices = styled("div")(() => ({
  paddingTop: "20px",
  display: "flex",
  gap: "12px",
}));

const Seperator = styled("div")(({ theme }) => ({
  borderLeft: `2px solid ${theme.palette.grey[600]}`,
}));

const BoughtPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontFamily: "Inter",
  fontWeight: "500",
  fontSize: "25px",

  "& span": {
    fontSize: "26px",
    textDecorationLine: "underline",
    textTransform: "lowercase",
    color: theme.palette.primary.light,
  },
}));

const OrderedPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontFamily: "Inter",
  fontWeight: "500",
  fontSize: "25px",

  "& span": {
    fontSize: "26px",
    textDecorationLine: "underline",
    textTransform: "lowercase",
    color: theme.palette.primary.light,
  },
}));

const OrderedAndBoughtText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "14px",
}));

const CountBought = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontFamily: "Inter",
  fontWeight: "500",
  fontSize: "22px",
}));

const CountOrdered = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontFamily: "Inter",
  fontWeight: "500",
  fontSize: "22px",
}));
