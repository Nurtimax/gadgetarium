import React from "react";
import { Grid, styled, Typography } from "@mui/material";
import TableItem from "./TableItem";
import { handleWidthItems } from "../utils/helpers/general";

const Table = ({ titlesTable, dataTable }) => {
  return (
    <MainContainer>
      <TextFounds>Найдено 250 заказов</TextFounds>

      <ContainerTable>
        <div>
          <ContainerTableRow>
            <Grid container>
              {titlesTable.map((title) => (
                <Grid item xs={handleWidthItems(title)} key={title}>
                  <TitleTableCell>{title}</TitleTableCell>
                </Grid>
              ))}
            </Grid>
          </ContainerTableRow>
        </div>

        <ContainerTableBody>
          {dataTable.map((obj) => (
            <TableItem key={obj.id} obj={obj} />
          ))}
        </ContainerTableBody>
      </ContainerTable>
    </MainContainer>
  );
};

export default Table;

const TextFounds = styled(Typography)(({ theme }) => ({
  paddingTop: "40px",
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "14px",
  color: theme.palette.primary.light,
}));

const MainContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const ContainerTable = styled("div")(() => ({
  paddingTop: "16px",
  width: "1305px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

const ContainerTableRow = styled("div")(({ theme }) => ({
  paddingLeft: "20px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.primary.light,
}));

const TitleTableCell = styled("div")(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: "600",
  fontSize: "14px",
  letterSpacing: "1px",
  color: theme.palette.primary.contrastText,
}));

const ContainerTableBody = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
