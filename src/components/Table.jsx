import React from "react";
import { Grid, Pagination, Stack, styled, Typography } from "@mui/material";
import TableItem from "./TableItem";
import { handleWidthItems } from "../utils/helpers/general";

const Table = ({ titlesTable, dataTable }) => {
  // const getPaginationData = (type, page, selected) => {};
  // const onChange = (_, page) => {};

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

      <Stack>
        <Pagination
          count={10}
          color="secondary"
          // getItemAriaLabel={getPaginationData}
          // onChange={onChange}
        />
      </Stack>
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

  "& .MuiButtonBase-root": {
    width: "22px",
    height: "22px",
    minWidth: "0",
    padding: "0",
  },

  "& .MuiPagination-ul": {
    paddingTop: "41px",
    justifyContent: "center",
  },
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
