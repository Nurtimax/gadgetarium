import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { BannerIcon } from "../../../assets";
import { actionGoodSlice } from "../../../redux/slices/goods-slice";
import { TABS } from "../../../utils/constants/tabs";
import Tabs from "../../UI/tabs/index";

const ContentTab = () => {
  const dispatch = useDispatch();

  const handleTabChange = (newValue) => {
    dispatch(
      actionGoodSlice.changeParams({ key: "productType", value: newValue })
    );
  };

  return (
    <Grid item xs={12}>
      <StyledContentTab>
        <Tabs onChange={handleTabChange} contents={TABS} />
        <Box className="download_banner gap pointer">
          <BannerIcon />
          <Typography>Загрузить баннер</Typography>
        </Box>
      </StyledContentTab>
    </Grid>
  );
};

export default ContentTab;

const StyledContentTab = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: `1px solid ${theme.palette.grey[600]}`,
  padding: "30px 0",
  "& .download_banner": {
    display: "flex",
    padding: "8px 0",
  },
}));
