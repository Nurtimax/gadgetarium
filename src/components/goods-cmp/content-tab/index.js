import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { memo } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BannerIcon } from "../../../assets";
import useDropDown from "../../../hooks/useDropDown";
import { actionGoodSlice } from "../../../redux/slices/goods-slice";
import { TABS } from "../../../utils/constants/tabs";
import AddBanner from "../../add_banner";
import Tabs from "../../UI/tabs/index";

const ContentTab = () => {
  const [openBanner, setOpenBanner] = useDropDown();
  const dispatch = useDispatch();

  const { params } = useSelector((state) => state.goods);

  const handleTabChange = (newValue) => {
    dispatch(
      actionGoodSlice.changeParams({ key: "productType", value: newValue })
    );
    dispatch(
      actionGoodSlice.changeLocalParams({
        key: "productType",
        value: newValue,
      })
    );
  };

  const checkedId = useMemo(() => {
    const isCheckedTab = TABS.find((tab) => tab.label === params?.productType);
    if (isCheckedTab) {
      return isCheckedTab.id;
    }
    return null;
  }, [params?.productType]);

  return (
    <Grid item xs={12}>
      <StyledContentTab>
        <Tabs onChange={handleTabChange} contents={TABS} checked={checkedId} />
        <AddBanner openModal={openBanner} setOpenModal={setOpenBanner} />
        <Box className="download_banner gap pointer" onClick={setOpenBanner}>
          <BannerIcon />
          <Typography>Загрузить баннер</Typography>
        </Box>
      </StyledContentTab>
    </Grid>
  );
};

export default memo(ContentTab);

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
