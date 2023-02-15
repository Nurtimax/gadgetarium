import { styled } from "@mui/material";
import { useMemo } from "react";
import { useState } from "react";
import { OrdersTableListData, TAB_ITEMS_ORDER } from "../../utils/constants";
import { OrdersTableHeaderTitle } from "../../utils/constants/orderTable";
import Table from "../Table";
import DatePicker from "./DatePicker";

const OrdersTabs = () => {
  const tableData = useMemo(() => OrdersTableListData, []);
  const [currentTab, setCurrentTab] = useState("1");
  const [date, setDate] = useState([null, null]);

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

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
            <Table
              tableHeaderTitle={OrdersTableHeaderTitle}
              tableData={tableData}
              checked={true}
              found={true}
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
