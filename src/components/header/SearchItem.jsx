import { Paper, Stack, styled, Typography } from "@mui/material";
import React from "react";
import Search from "../UI/Search";

const SearchItem = ({ search = [] }) => {
  return (
    <Stack spacing={1} position="relative">
      <Search width="100%" placeholder="Поиск по каталогу магазина" />
      {search.length ? (
        <Item>
          {search.map((item) => (
            <Typography variant="h6" component="div" key={item}>
              {item}
            </Typography>
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
}));
