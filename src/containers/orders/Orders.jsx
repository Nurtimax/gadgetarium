import { Container, styled } from "@mui/material";
import Search from "../../components/UI/Search";
import OrdersTabs from "../../components/orders/OrdersTabs";
import Infographic from "../../components/orders/Infographic";
import { useState } from "react";
import { useDebounce } from "use-debounce";

const Orders = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchTerm] = useDebounce(searchValue, 1000);

  return (
    <>
      <MainContainer>
        <ContainerTabs>
          <Search
            showBackground={true}
            placeholder="Поиск по артикулу или ..."
            width="559px"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <OrdersTabs
            searchTerm={searchTerm}
            onClearSearchTerm={() => setSearchValue("")}
          />
        </ContainerTabs>

        <Infographic />
      </MainContainer>
    </>
  );
};

export default Orders;

const MainContainer = styled(Container)(() => ({
  display: "flex",
  gap: "86px",
}));

const ContainerTabs = styled("div")(() => ({
  flex: "3",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
}));
