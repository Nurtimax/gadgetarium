import React, { useState, useEffect, useMemo } from "react";
import { styled, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { TAB_ITEMS_ORDER } from "../../utils/constants";
import { OrdersTableHeaderTitle } from "../../utils/constants/orderTable";
import { getOrderProducts } from "../../redux/slices/orders-slice";
import { format } from "date-fns";
import DatePicker from "./DatePicker";
import Table from "../Table";
import { checkTabName } from "../../utils/helpers/general";
import { useDebounce } from "use-debounce";
import Pagination from "../UI/Pagination";

const OrdersTabs = ({ valueInputSearch }) => {
  const { orderResponses, orderStatusAndSize, countOfOrders } = useSelector(
    (state) => state.orderProduct.data
  );
  const data = orderResponses || [];
  const tableData = useMemo(() => orderResponses, [orderResponses]);
  const [searchParams, setSearchParams] = useSearchParams();
  const orderStatus = searchParams.get("orderStatus") || "WAITING";
  const page = searchParams.get("page_index") || 1;
  const [date, setDate] = useState([null, null]);
  const [value] = useDebounce(date, 1000);
  const dispatch = useDispatch();

  const handleTabClick = (e) => {
    setSearchParams({
      orderStatus: e.target.name,
    });
    setDate([null, null]);
  };

  const getData = useMemo(() => {
    return {
      orderStatus,
      page,
      size: 7,
    };
  }, [orderStatus, page, valueInputSearch, value]);

  const startDate = format(new Date(value[0]), "yyyy-MM-dd");
  const endDate = format(new Date(value[1]), "yyyy-MM-dd");

  startDate === "1970-01-01" ? null : (getData.startDate = startDate);
  endDate === "1970-01-01" ? null : (getData.endDate = endDate);
  valueInputSearch ? (getData.keyWord = valueInputSearch) : null;

  useEffect(() => {
    dispatch(getOrderProducts(getData));
  }, [getData, orderStatus]);

  useEffect(() => {
    searchParams.set("orderStatus", orderStatus);
    setSearchParams(searchParams);
  }, [orderStatus]);

  return (
    <div>
      <Tabs>
        {TAB_ITEMS_ORDER.map((tab, i) => (
          <button
            key={i}
            name={tab.tabTitle}
            disabled={orderStatus === `${tab.tabTitle}`}
            onClick={handleTabClick}
          >
            {tab.title} {checkTabName(tab.title, orderStatusAndSize || {})}
          </button>
        ))}
      </Tabs>

      <DatePicker date={date} setDate={setDate} />

      {TAB_ITEMS_ORDER.map((tab, i) => (
        <div key={i}>
          {orderStatus === `${tab.tabTitle}` &&
            (data.length < 1 ? (
              <StyledNoOrdersText>No orders!</StyledNoOrdersText>
            ) : (
              <Table
                tableHeaderTitle={OrdersTableHeaderTitle}
                data={tableData}
                isMarked={true}
                found={true}
                countOfOrders={countOfOrders}
              />
            ))}
        </div>
      ))}

      <Pagination />
    </div>
  );
};

export default OrdersTabs;

const StyledNoOrdersText = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  fontFamily: "Inter",
  fontWeight: "500",
  fontSize: "30px",
  display: "flex",
  justifyContent: "center",
}));

const Tabs = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "12px",
  borderBottom: "2px solid #D4D4D4",
  padding: "0 0 30px 0",

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
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
}));
