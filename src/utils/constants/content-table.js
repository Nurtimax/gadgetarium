import TableCellCount from "../../components/goods-cmp/content-table-cells/TableCellCount";
import TableCellCurrentPrice from "../../components/goods-cmp/content-table-cells/TableCellCurrentPrice";
import TableCellDateFormat from "../../components/goods-cmp/content-table-cells/TableCellDateFormat";
import TableCellEditAndDelete from "../../components/goods-cmp/content-table-cells/TableCellEditAndDelete";
import TableCellImage from "../../components/goods-cmp/content-table-cells/TableCellImage";
import TableCellPriceAndDiscount from "../../components/goods-cmp/content-table-cells/TableCellPriceAndDiscount";
import TableCellProductCount from "../../components/goods-cmp/content-table-cells/TableCellProductCount";
import TableCellVendorCode from "../../components/goods-cmp/content-table-cells/TableCellVendorCode";

export const tableHeader = [
  {
    Header: "Фото",
    accessor: "productImage",
    style: {
      flex: 0.5,
    },
    Cell: ({ row }) => {
      const image = row.original.productImage;
      return <TableCellImage image={image} />;
    },
  },
  {
    Header: "Артикул",
    accessor: "productVendorCode",
    style: {
      flex: 0.5,
    },
    Cell: ({ row }) => {
      return <TableCellVendorCode {...row.original} />;
    },
  },
  {
    Header: "Наименование товара",
    accessor: "productCount",
    style: {
      flex: 1,
    },
    Cell: ({ row }) => {
      return <TableCellProductCount {...row.original} />;
    },
  },
  {
    Header: "Дата создания",
    accessor: "createAt",
    style: {
      flex: 0.8,
    },
    Cell: ({ row }) => {
      return <TableCellDateFormat {...row.original} />;
    },
  },
  {
    Header: "Кол-во",
    accessor: "countSubproducts",
    style: {
      flex: 0.5,
    },
    Cell: ({ row }) => {
      return <TableCellCount {...row.original} />;
    },
  },
  {
    Header: "Цена товара",
    accessor: "productPrice",
    style: {
      flex: 0.7,
    },
    Cell: ({ row }) => {
      return <TableCellPriceAndDiscount {...row.original} />;
    },
  },
  {
    Header: "Текущая цена",
    accessor: "currentPrice",
    style: {
      flex: 0.7,
    },
    Cell: ({ row }) => {
      return <TableCellCurrentPrice {...row.original} />;
    },
  },
  {
    Header: "Действия",
    accessor: "",
    style: {
      flex: 0.5,
    },
    Cell: ({ row }) => {
      return <TableCellEditAndDelete {...row.original} />;
    },
  },
];
