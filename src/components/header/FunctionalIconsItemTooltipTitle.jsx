import { Grid, Paper, styled, Typography } from "@mui/material";
import React from "react";

const FunctionalIconsItemTooltipTitle = ({
  title,
  cartItem,
  focused,
  tooltip_title_compative_remove,
  tooltip_title_compative_add,
}) => {
  if (title === "cart") {
    if (cartItem.length) {
      return (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Item>item1</Item>
          </Grid>
        </Grid>
      );
    }
    return (
      <Typography component="h1" variant="h6">
        Cart Empty
      </Typography>
    );
  }
  if (focused) {
    return tooltip_title_compative_remove;
  }
  return tooltip_title_compative_add;
};

export default FunctionalIconsItemTooltipTitle;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
}));
