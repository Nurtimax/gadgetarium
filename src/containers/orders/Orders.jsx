import { styled } from "@mui/material";
import Search from "../../components/UI/Search";
import OrdersTabs from "../../components/orders/OrdersTabs";
import Infographic from "../../components/orders/Infographic";
import { useState } from "react";
import { useDebounce } from "use-debounce";

const Orders = () => {
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 1000);

  return (
    <MainContainer>
      <ContainerTabs>
        <Search
          showBackground={true}
          placeholder="Поиск по артикулу или ..."
          width="559px"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <OrdersTabs valueInputSearch={value} />
      </ContainerTabs>

      <Infographic />
    </MainContainer>
  );
};

export default Orders;

const MainContainer = styled("div")(() => ({
  padding: "40px 100px 65.7px",
  display: "flex",
  gap: "86px",
}));

const ContainerTabs = styled("div")(() => ({
  flex: "3",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
}));
