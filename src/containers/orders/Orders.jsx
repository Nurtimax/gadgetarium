import { Container, styled } from "@mui/material";
import Search from "../../components/UI/Search";
import OrdersTabs from "../../components/orders/OrdersTabs";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { animateScroll as Scroll } from "react-scroll";

const Orders = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchTerm] = useDebounce(searchValue, 1000);

  useEffect(() => {
    Scroll.scrollTo(0);
  }, []);

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

          <OrdersTabs searchTerm={searchTerm} />
        </ContainerTabs>
      </MainContainer>
    </>
  );
};

export default Orders;

const MainContainer = styled(Container)(() => ({
  display: "flex",
  gap: "86px",
  paddingBottom: "64px",
  minHeight: "500px",
}));

const ContainerTabs = styled("div")(() => ({
  flex: "3",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
}));
