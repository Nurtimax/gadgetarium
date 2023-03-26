import { Tabs as MuiTabs, Tab, Box, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DownloadPDFIcon } from "../../assets";
import axiosInstance from "../../config/axios-instance";

export default function Tabs({ tabs = [] }) {
  const [query, setQuery] = useState(tabs[0].param);
  const navigate = useNavigate();
  const location = useLocation();

  const { details } = useSelector((state) => state.productDetails);

  useEffect(() => {
    const route =
      location.pathname.split("/")[location.pathname.split("/").length - 1];

    setQuery(route);
  }, [location.pathname]);

  const handleChange = (_, newParam) => {
    setQuery(newParam);
    navigate(newParam);
  };

  const downloadPDFFileHandler = () => {
    axiosInstance
      .get("pdf", {
        responseType: "arraybuffer",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/pdf",
        },
        params: { subproductId: details.id },
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "file.pdf"); //or any other extension
        document.body.appendChild(link);
        link.click();
      })
      .catch(() => toast.error("Что-то не так с сервером или данными"));
  };

  return (
    <>
      <BoxStyled>
        <TabsStyled
          value={query}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          classes={{ root: "root", flexContainer: "flex" }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.label}
              label={<Link to={tab.param}>{tab.label}</Link>}
              value={tab.param}
              className="tab"
            />
          ))}
        </TabsStyled>
        <Typography
          variant="body1"
          className="download_pdf flex gap pointer"
          onClick={downloadPDFFileHandler}
        >
          <DownloadPDFIcon />
          Скачать документ.pdf
        </Typography>
      </BoxStyled>
    </>
  );
}

export const BoxStyled = styled(Box)(() => ({
  borderBottom: "1px solid #CDCDCD",
  display: "flex",
  justifyContent: "space-between",
  gap: "100px",
  "& .download_pdf": {
    padding: 5,
    alignSelf: "flex-end",
  },
}));

export const TabsStyled = styled(MuiTabs)(() => ({
  "& .flex": {
    display: "flex",
    gap: "1.8rem",
  },
  "& .tab": {
    fontFamily: "Inter",
    textTransform: "none",
    color: "#292929",
    fontSize: "18px",
    fontWeight: "500",
  },
}));
