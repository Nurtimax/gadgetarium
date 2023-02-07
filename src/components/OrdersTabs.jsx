import { styled } from "@mui/material";
import { useState } from "react";
import { TAB_ITEMS_ORDER } from "../utils/constants";
import DatePicker from "./DatePicker";

const OrdersTabs = () => {
  const [currentTab, setCurrentTab] = useState("2");

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
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.title}
          </button>
        ))}
      </Tabs>

      <div>
        <DatePicker />
      </div>

      <div>
        {TAB_ITEMS_ORDER.map((tab, i) => (
          <div key={i}>{currentTab === `${tab.id}` && <p>{tab.title}</p>}</div>
        ))}
      </div>
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
