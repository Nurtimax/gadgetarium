import {
  Pagination,
  Stack,
  styled,
  Typography,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
} from "@mui/material";
import { default as MUITable } from "@mui/material/Table";
import { useMemo } from "react";
import { useTable } from "react-table";

const defaultColumnProps = {
  style: {
    minWidth: 15,
    flex: 1,
  },
};

const Table = ({
  tableHeaderTitle,
  tableData,
  getPaginationData,
  onChange,
  checked = false,
  found = false,
}) => {
  const columns = useMemo(() => tableHeaderTitle, []);

  const tableHooks = (hooks) => {
    if (checked) {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            Header: "ID",
            accessor: "id",
            style: {
              flex: 0.3,
            },
            Cell: ({ row }) => {
              return (
                <>
                  <div className="checkbox">
                    <Checkbox color="secondary" />
                  </div>
                  <div className="ID">{row.original.id}</div>
                </>
              );
            },
          },
          ...columns,
        ];
      });
    }
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data: tableData,
        defaultColumn: defaultColumnProps,
      },
      tableHooks
    );

  return (
    <MainContainer>
      {found ? (
        <Typography className="foundOrderText">Найдено 250 заказов</Typography>
      ) : (
        ""
      )}

      <MUITable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup, i) => (
            <TableRow
              {...headerGroup.getHeaderGroupProps({
                style: {
                  display: "flex",
                  width: "100%",
                },
              })}
              key={i}
            >
              {headerGroup.headers.map((column, i) => (
                <TableCell
                  {...column.getHeaderProps({
                    style: { ...column.style },
                  })}
                  key={i}
                >
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>

        <TableBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <StyledTableRow
                {...row.getRowProps({
                  style: {
                    display: "flex",
                  },
                })}
                key={i}
                checked={checked}
              >
                {row.cells.map((cell, i) => (
                  <TableCell
                    {...cell.getCellProps({
                      style: {
                        ...cell.column.style,
                        ...cell.column.tdStyle,
                      },
                    })}
                    key={i}
                  >
                    {cell.render("Cell")}
                  </TableCell>
                ))}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </MUITable>

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

const StyledTableRow = styled(TableRow)(({ theme, checked }) => ({
  padding: "20px",
  border: `1px solid ${theme.palette.grey[600]}`,
  borderRadius: "6px",
  "& .checkbox": {
    display: "none",
  },

  "&:hover": {
    background: checked ? "rgba(144, 156, 181, 0.2)" : "",

    "& .ID": {
      display: "none",
    },

    "& .checkbox": {
      display: "block",
      padding: "0 0 15px 0",
      "& .MuiCheckbox-root": {
        padding: "0",
      },
    },
  },
}));

const MainContainer = styled(TableContainer)(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "14px",
  color: theme.palette.primary.light,

  "& .MuiTypography-root": {
    padding: "40px 0 16px",
  },

  "& .MuiTable-root": {
    "& .MuiTableHead-root": {
      backgroundColor: theme.palette.primary.light,
      display: "flex",
      alignItems: "center",
      padding: "12px 20px",
      margin: "0 0 10px",

      "& .MuiTableRow-root": {
        "& .MuiTableCell-root": {
          color: theme.palette.primary.contrastText,
          fontWeight: "600",
          border: "none",
          padding: "0",
        },
      },
    },

    "& .MuiTableBody-root": {
      display: "grid",
      gap: "8px",

      "& .MuiTableRow-root": {
        "& .MuiTableCell-root": {
          border: "none",
          padding: "0",
        },
      },
    },
  },

  "& .MuiPaginationItem-root.Mui-selected": {
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
