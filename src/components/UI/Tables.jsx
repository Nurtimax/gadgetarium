import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { dataTables, titlesTables } from "../../utils/constants";
import TablesItem from "./TablesItem";

const Tables = () => {
  return (
    <MainContainer>
      <ContainerTable>
        <TableHead>
          <ContainerTableRow>
            {titlesTables.map((title) => (
              <TitleTableCell key={title}>{title}</TitleTableCell>
            ))}
          </ContainerTableRow>
        </TableHead>

        <ContainerTableBody>
          {dataTables.map((obj) => (
            <TablesItem key={obj.id} obj={obj} />
          ))}
        </ContainerTableBody>
      </ContainerTable>
    </MainContainer>
  );
};

export default Tables;

const MainContainer = styled(TableContainer)(() => ({
  paddingTop: "16px",
  display: "flex",
  justifyContent: "center",
  width: "100%",
}));

const ContainerTable = styled(Table)(() => ({
  width: "1305px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

const ContainerTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  height: "40px",
  display: "flex",
  alignItems: "center",
  "& :nth-of-type(1)": {
    paddingLeft: "20px",
  },
  "& :nth-of-type(2)": {
    paddingLeft: "31px",
  },
  "& :nth-of-type(3)": {
    paddingLeft: "67px",
  },
  "& :nth-of-type(4)": {
    paddingLeft: "74px",
  },
  "& :nth-of-type(5)": {
    paddingLeft: "65px",
  },
  "& :nth-of-type(6)": {
    paddingLeft: "58px",
  },
  "& :nth-of-type(7)": {
    paddingLeft: "90px",
  },
  "& :nth-of-type(8)": {
    paddingLeft: "59px",
  },
  "& :nth-of-type(9)": {
    paddingLeft: "72px",
  },
}));

const TitleTableCell = styled(TableCell)(({ theme }) => ({
  padding: "0",
  border: "none",
  fontFamily: "Inter",
  fontWeight: "600",
  fontSize: "14px",
  letterSpacing: "1px",
  color: theme.palette.primary.contrastText,
}));

const ContainerTableBody = styled(TableBody)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
