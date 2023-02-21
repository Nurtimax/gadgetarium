import React, { useState, useEffect, useMemo } from "react";
import { styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { TAB_ITEMS_ORDER } from "../../utils/constants";
import { OrdersTableHeaderTitle } from "../../utils/constants/orderTable";
import { fetchOrderProductSlice } from "../../redux/slices/order-product";
import { format } from "date-fns";
import DatePicker from "./DatePicker";
import Table from "../Table";
import { checkTabName } from "../../utils/helpers/general";
import { useDebounce } from "use-debounce";

const OrdersTabs = ({ valueInputSearch }) => {
  const { orderResponses, orderStatusAndSize, countOfOrders } = useSelector(
    (state) => state.orderProduct.data
  );
  const tableData = useMemo(() => orderResponses, [orderResponses]);
  const [searchParams, setSearchParams] = useSearchParams();
  const orderStatus = searchParams.get("orderStatus");
  const [date, setDate] = useState([null, null]);
  const [value] = useDebounce(date, 1000);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleTabClick = (e) => {
    setSearchParams({
      orderStatus: e.target.name,
    });
    setDate([null, null]);
    setPage(1);
  };

  const getData = {
    orderStatus,
    page: page || 1,
    size: 7,
  };

  const startDate = format(new Date(value[0]), "yyyy-MM-dd");
  const endDate = format(new Date(value[1]), "yyyy-MM-dd");

  startDate === "1970-01-01" ? null : (getData.startDate = startDate);
  endDate === "1970-01-01" ? null : (getData.endDate = endDate);
  valueInputSearch ? (getData.keyWord = valueInputSearch) : null;

  useEffect(() => {
    dispatch(fetchOrderProductSlice(getData));
    setSearchParams({ orderStatus: orderStatus });
  }, [orderStatus, page, valueInputSearch, value]);

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
          {orderStatus === `${tab.tabTitle}` && (
            <Table
              tableHeaderTitle={OrdersTableHeaderTitle}
              data={tableData}
              isMarked={true}
              found={true}
              setPage={setPage}
              countOfOrders={countOfOrders}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default OrdersTabs;

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
