import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { SECOND_TABS_DATA_ORDERS } from "../../utils/constants";
import { Box, styled, Typography } from "@mui/material";

const TabPanel = ({ children, value, index, ...other }) => (
  <div hidden={value !== index} {...other}>
    {value === index && <>{children}</>}
  </div>
);

const InfographicTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <MainContainer>
      <Box sx={{ borderBottom: 2, borderColor: "#CDCDCD" }}>
        <Tabs value={value} onChange={handleChange}>
          {SECOND_TABS_DATA_ORDERS.map((item) => (
            <Tab classes={{ root: "tab" }} label={item.title} key={item.id} />
          ))}
        </Tabs>
      </Box>

      {SECOND_TABS_DATA_ORDERS.map((item, i) => (
        <TabPanel value={value} index={i} key={item.id}>
          <ContainerTabPanel>
            <TitleTabPanel>{item.titlePanel}</TitleTabPanel>
            <div className="boxPrice">
              <div>
                <CurrentPrice>
                  {item.currentDuring.price}
                  <span> c</span>
                </CurrentPrice>

                <CurrentDuring>{item.currentDuring.text}</CurrentDuring>
              </div>

              <div>
                <PreviousPrice>
                  {item.previousDuring.price}
                  <span> c</span>
                </PreviousPrice>

                <PreviousDuring>{item.previousDuring.text}</PreviousDuring>
              </div>
            </div>
          </ContainerTabPanel>
        </TabPanel>
      ))}
    </MainContainer>
  );
};

export default InfographicTabs;

const MainContainer = styled("div")(() => ({
  paddingTop: "42px",

  "& .MuiTabs-root": {
    minHeight: "0",
  },

  "& .MuiTabs-flexContainer": {
    gap: "28px",
  },

  "& .tab": {
    fontFamily: "Inter",
    fontWeight: "550",
    fontSize: "12px",
    minHeight: "0",
    padding: "0 10px 8px ",
  },
}));

const ContainerTabPanel = styled("div")(() => ({
  marginTop: "16px",
  width: "329px",
  height: "117px",
  backgroundColor: "rgba(21, 86, 222, 0.09)",
  borderRadius: "8px",
  textAlign: "flex-start",
  padding: "14px",

  "& .boxPrice": {
    display: "flex",
    gap: "35px",
    alignItems: "flex-end",
    paddingTop: "19px",
  },
}));

const TitleTabPanel = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: "600",
  fontSize: "14px",
  color: theme.palette.primary.light,
}));

const CurrentPrice = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: "600",
  fontSize: "24px",
  color: theme.palette.success.main,

  "& span": {
    textDecorationLine: "underline",
  },
}));

const PreviousPrice = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: "600",
  fontSize: "16px",
  color: theme.palette.success.main,

  "& span": {
    textDecorationLine: "underline",
  },
}));

const CurrentDuring = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "12px",
  color: theme.palette.primary.light,
}));

const PreviousDuring = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "12px",
  color: theme.palette.primary.light,
}));
