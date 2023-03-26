import { Box, Paper, Stack, styled, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useState } from "react";
import Search from "../UI/Search";
import { useDebounce } from "use-debounce";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearch } from "../../redux/slices/search-slice";

const SearchItem = () => {
  const [searchValue, setSearchValue] = useState("");

  const [searchTerm] = useDebounce(searchValue, 1);

  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { products } = useSelector((state) => state.search.data);

  useEffect(() => {
    if (searchTerm) {
      dispatch(getSearch({ searchText: searchTerm, size: 100 }));
    } else {
      dispatch(getSearch({ searchText: null, size: null }));
    }
  }, [searchTerm]);

  const chooseProductHandler = (id) => {
    products.productCardResponses.find((product) => {
      if (product.productId === id) {
        navigate(
          `/item/${product.categoryId}/${product.productId}/description`
        );
      }
    });
    setSearchValue("");
    inputRef.current.blur();
  };

  return (
    <Stack spacing={1} position="relative">
      <Search
        width="100%"
        placeholder="Поиск по каталогу магазина"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        onKeyUp={(e) => {
          e.preventDefault();
          if (e.key === "Enter") {
            if (products.productCardResponses.length !== 1) {
              navigate(`item/${products.productCardResponses[0].categoryId}`);
            } else {
              products.productCardResponses.find((product) => {
                navigate(
                  `/item/${product.categoryId}/${product.productId}/description`
                );
              });
            }
            setSearchValue("");
            inputRef.current.blur();
          }
        }}
        inputRef={inputRef}
      />
      {products?.productCardResponses?.length ? (
        <Item className="item">
          {products?.productCardResponses?.map((item) => (
            <BoxStyled
              key={item.productId}
              name={item.productId}
              onClick={() => chooseProductHandler(item.productId)}
            >
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
  backgroundColor: "rgba(255,255,255, 1)",

  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.primary,
  position: "absolute",
  width: "100%",
  top: "100%",
  fontSize: "1rem",
  zIndex: "100",
  "& .item:hover": { backgroundColor: "red" },
}));
const BoxStyled = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  "& .product-name": {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "16px",
  },
  "&:hover": {
    background: "#f1f1f2",
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
