import { Pagination, Stack, styled, Typography } from "@mui/material";
import { useMemo } from "react";
import { useTable } from "react-table";

const Table = ({
  tableHeaderTitle,
  tableData,
  getPaginationData,
  onChange,
  checked = true,
}) => {
  const columns = useMemo(() => tableHeaderTitle, []);

  const tableInstance = useTable({
    columns,
    data: tableData,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <MainContainer>
      <Typography className="foundOrderText">Найдено 250 заказов</Typography>
      <table {...getTableProps()} className="table">
        <thead className="thead">
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={i}>
              {headerGroup.headers.map((column, i) => (
                <th {...column.getHeaderProps()} key={i}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()} className="tbody">
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <ListTable {...row.getRowProps()} key={i} checked={checked}>
                {row.cells.map((cell, i) => (
                  <td
                    {...cell.getCellProps({
                      style: cell.column.style,
                    })}
                    key={i}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </ListTable>
            );
          })}
        </tbody>
      </table>
      <Stack>
        <Pagination
          count={10}
          color="secondary"
          getItemAriaLabel={getPaginationData}
          onChange={onChange}
        />
      </Stack>
    </MainContainer>
  );
};

export default Table;

const ListTable = styled("tr")(({ theme, checked }) => ({
  padding: "19px 0 0 20px",
  height: "74px",
  border: `1px solid ${theme.palette.grey[600]}`,
  borderRadius: "6px",
  "&:hover": {
    background: checked ? "rgba(144, 156, 181, 0.2)" : "",
  },
}));

const MainContainer = styled("div")(({ theme }) => ({
  "& .foundOrderText": {
    paddingTop: "40px",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "14px",
    color: theme.palette.primary.light,
  },

  "& .table": {
    paddingTop: "16px",
    width: "1305px",
    borderSpacing: "0",

    "& .thead": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      height: "40px",
      fontFamily: "Inter",
      fontWeight: "600",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",

      "& tr": {
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "100%",
        padding: "0 20px",
      },
    },

    "& .tbody": {
      display: "grid",
      gap: "8px",
    },
  },

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
