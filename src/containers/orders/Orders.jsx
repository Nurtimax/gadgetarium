import React from "react";
import { Container, styled } from "@mui/material";
import Search from "../../components/UI/Search";
import OrdersTabs from "../../components/orders/OrdersTabs";
import Infographic from "../../components/orders/Infographic";

const Orders = () => {
  return (
    <MainContainer>
      <ContainerTabs>
        <Search
          showBackground={true}
          placeholder="Поиск по артикулу или ..."
          width="559px"
        />

        <OrdersTabs />
      </ContainerTabs>

      <Infographic />
    </MainContainer>
  );
};

export default Orders;

const MainContainer = styled(Container)(() => ({
  padding: "40px 0  61.05px 0",
  display: "flex",
  gap: "86px",
}));

const ContainerTabs = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
}));
