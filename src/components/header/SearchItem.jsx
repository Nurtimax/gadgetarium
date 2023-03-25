import { Box, Paper, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import Search from "../UI/Search";
import { useDebounce } from "use-debounce";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataCatalog } from "../../redux/slices/catalog-slice";

const SearchItem = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchTerm] = useDebounce(searchValue, 1000);

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.catalog.data);
  const filteredCatalog = useSelector((state) => state.filteredCatalog);

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchDataCatalog({ ...filteredCatalog, text: searchTerm }));
    } else {
      dispatch(
        fetchDataCatalog({
          ...filteredCatalog,
          text: null,
          minPrice: null,
          maxPrice: null,
          size: 0,
        })
      );
    }
  }, [searchTerm, filteredCatalog]);

  return (
    <Stack spacing={1} position="relative">
      <Search
        width="100%"
        placeholder="Поиск по каталогу магазина"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      {products.productCardResponses.length ? (
        <Item>
          {products.productCardResponses?.map((item) => (
            <BoxStyled key={item.productId}>
              <StyledTableCellImage className="flex-start">
                <img src={item.productImage} alt="" className="image" />
              </StyledTableCellImage>
              <Typography className="product-name">
                {item.productName}
              </Typography>
            </BoxStyled>
          ))}
        </Item>
      ) : null}
    </Stack>
  );
};

export default SearchItem;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.primary,
  position: "absolute",
  width: "100%",
  top: "100%",
  fontSize: "1rem",
  zIndex: "100",
}));
const BoxStyled = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  "& .product-name": {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "16px",
  },
}));

const StyledTableCellImage = styled(Box)(() => ({
  height: "50px",
  alignItems: "center",
  "& .image": {
    width: "100%",
    height: "80%",
    objectFit: "contain",
    mixBlendMode: "darken",
  },
}));
