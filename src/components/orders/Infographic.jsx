import { styled, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderInforaphic } from "../../redux/slices/orders-slice";
import { priceProductSeparate } from "../../utils/helpers/general";
import GadgetariumSpinnerLoading from "../GadgetariumSpinnerLoading";
import InfographicTabs from "./InfographicTabs";

const Infographic = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.orderProduct.dataInfo);
  const infoIsLoading = useSelector(
    (state) => state.orderProduct.infoIsLoading
  );
  const dataInfo = data || {};

  useEffect(() => {
    dispatch(getOrderInforaphic());
  }, []);

  return (
    <div style={{ flex: 1 }}>
      <TitleInfographic>ИНФОГРАФИКА</TitleInfographic>

      {infoIsLoading ? (
        <GadgetariumSpinnerLoading />
      ) : (
        <>
          <BoxPrices>
            <div>
              <BoughtPrice>
                {priceProductSeparate(Number(String(dataInfo.soldPrice || 0)))}
                <span>С</span>
              </BoughtPrice>
              <OrderedAndBoughtText>Выкупили на сумму</OrderedAndBoughtText>
              <CountBought>
                {priceProductSeparate(Number(String(dataInfo.soldCount || 0)))}{" "}
                шт
              </CountBought>
            </div>

            <Seperator />

            <div>
              <OrderedPrice>
                {priceProductSeparate(Number(String(dataInfo.orderPrice || 0)))}
                <span>С</span>
              </OrderedPrice>
              <OrderedAndBoughtText>Заказали на сумму</OrderedAndBoughtText>
              <CountOrdered>
                {priceProductSeparate(Number(String(dataInfo.orderCount || 0)))}{" "}
                шт
              </CountOrdered>
            </div>
          </BoxPrices>

          <InfographicTabs data={dataInfo} />
        </>
      )}
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
  display: "flex",
  gap: "10px",

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
  display: "flex",
  gap: "10px",

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
