import React, { useMemo, useState, useEffect } from "react";
import { styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { TAB_ITEMS_ORDER } from "../../utils/constants";
import { OrdersTableHeaderTitle } from "../../utils/constants/orderTable";
import { fetchOrderProductSlice } from "../../redux/slices/order-product";
import DatePicker from "./DatePicker";
import Table from "../Table";

const OrdersTabs = () => {
  const data = useSelector((state) => state.orderProduct.data);
  console.log(data);
  const tableData = useMemo(() => data, [data]);
  const dispatch = useDispatch();
  const [date, setDate] = useState([null, null]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const orderStatus = searchParams.get("orderStatus");

  const handleTabClick = (e) => {
    setSearchParams({
      orderStatus: e.target.name,
    });
  };

  useEffect(() => {
    dispatch(
      fetchOrderProductSlice({
        orderStatus,
        page,
        size: 1,
      })
    );
  }, [orderStatus, page]);

  return (
    <div>
      <Tabs>
        {TAB_ITEMS_ORDER.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            name={tab.tabTitle}
            disabled={orderStatus === `${tab.tabTitle}`}
            onClick={handleTabClick}
          >
            {tab.title}
          </button>
        ))}
      </Tabs>

      <DatePicker date={date} setDate={setDate} />

      {TAB_ITEMS_ORDER.map((tab, i) => (
        <div key={i}>
          {orderStatus === `${tab.tabTitle}` && (
            <Table
              tableHeaderTitle={OrdersTableHeaderTitle}
              tableData={tableData}
              isMarked={true}
              found={true}
              setPage={setPage}
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
