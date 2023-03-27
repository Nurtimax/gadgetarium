import React, { useState, useEffect, useMemo } from "react";
import { styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { TAB_ITEMS_ORDER } from "../../utils/constants";
import { OrdersTableHeaderTitle } from "../../utils/constants/orderTable";
import { getOrderProducts } from "../../redux/slices/orders-slice";
import { format } from "date-fns";
import DatePicker from "./DatePicker";
import Table from "../Table";
import {
  checkTabName,
  isPaginationCountHandler,
  isPaginationHandler,
} from "../../utils/helpers/general";
import { useDebounce } from "use-debounce";
import Pagination from "../UI/Pagination";
import { useCallback } from "react";
import { ImageEmpty } from "../../assets";

const OrdersTabs = ({ searchTerm }) => {
  const { orderResponses, orderStatusAndSize, countOfOrders } = useSelector(
    (state) => state.orderProduct.data
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const orderStatus = searchParams.get("orderStatus") || "WAITING";
  const page = searchParams.get("page_index") || 1;

  const data = orderResponses || [];

  const tableData = useMemo(() => orderResponses, [orderResponses]);

  const [dates, setDates] = useState([null, null]);

  const [value] = useDebounce(dates, 1000);

  const dispatch = useDispatch();

  const isPaginationMounted = isPaginationHandler(
    orderStatus,
    orderStatusAndSize
  );

  const handleTabClick = useCallback((e) => {
    searchParams.set("orderStatus", e.target.name);
    setSearchParams(searchParams);
  });

  const requestParams = useMemo(() => {
    const params = {
      orderStatus,
      page,
      size: 7,
    };

    const startDate = format(new Date(value[0]), "yyyy-MM-dd");
    const endDate = format(new Date(value[1]), "yyyy-MM-dd");

    if (startDate !== "1970-01-01") {
      params.startDate = startDate;
    }
    if (endDate !== "1970-01-01") {
      params.endDate = endDate;
    }
    if (searchTerm) {
      params.keyWord = searchTerm;
    }
    return params;
  }, [orderStatus, page, searchTerm, value]);

  useEffect(() => {
    searchParams.set("orderStatus", orderStatus);
    setSearchParams(searchParams);
  }, [orderStatus]);

  const request = useCallback(() => {
    dispatch(getOrderProducts(requestParams));
  }, [requestParams]);

  const onChange = () => {};

  useEffect(() => {
    request();
  }, [request]);

  return (
    <div>
      <>
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

        {isPaginationMounted && (
          <Pagination
            count={isPaginationCountHandler(orderStatus, orderStatusAndSize)}
            onChange={() => {}}
          />
        )}
      </>
    </div>
  );
};

export default OrdersTabs;

const Image = styled("img")(() => ({
  paddingLeft: "20%",
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
