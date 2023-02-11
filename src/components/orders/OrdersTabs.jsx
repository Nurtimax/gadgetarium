import { styled } from "@mui/material";
import { useState } from "react";
import { TAB_ITEMS_ORDER } from "../../utils/constants";
import Table from "../Table";
import DatePicker from "./DatePicker";
// import { useSearchParams } from "react-router-dom";
// import OrderTable from "./OrderTable";

const OrdersTabs = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const [date, setDate] = useState([null, null]);
  // const [searchParams, setSearchParams] = useSearchParams();

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
    // setSearchParams({ orderStatus: e.target.name });
  };

  // const getOrderStatus = searchParams.get("orderStatus");

  return (
    <div>
      <Tabs>
        {TAB_ITEMS_ORDER.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            name={tab.tabTitle}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.title}
          </button>
        ))}
      </Tabs>

      <DatePicker date={date} setDate={setDate} />

      {TAB_ITEMS_ORDER.map((tab, i) => (
        <div key={i}>
          {currentTab === `${tab.id}` && (
            // <OrderTable orderStatus={getOrderStatus} />
            <Table />
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
    height: "36px",
    backgroundColor: theme.palette.grey[200],
    borderRadius: "4px",
    border: `1px solid ${theme.palette.grey[200]}`,
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "16px",
    color: theme.palette.primary.light,
    padding: "0 20px",
  },

  "& button:disabled": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
}));
