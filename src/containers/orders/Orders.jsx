import React from "react";
import { Container, styled } from "@mui/material";
import Search from "../../components/UI/Search";

const Orders = () => {
  return (
    <Container>
      <div>
        <SearchInput
          showBackground={true}
          placeholder="Поиск по артикулу или ..."
        />
      </div>
    </Container>
  );
};

export default Orders;

const SearchInput = styled(Search)(() => ({
  backgroundColor: "red",
}));
