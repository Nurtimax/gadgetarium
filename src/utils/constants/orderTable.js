import { format } from "date-fns";
import { Link } from "react-router-dom";
import Delete from "../../components/orders/Delete";
import Select from "../../components/orders/Select";
import { checkInOrderType, priceProductSeparate } from "../helpers/general";

export const OrdersTableHeaderTitle = [
  {
    Header: "ФИО",
    accessor: "fullName",
    style: {
      flex: 1.5,
    },
    Cell: ({ row }) => {
      return (
        <div title="Перейти к оплате">
          <Link to={String(row.original.id)}>
            {row.original.fullName || "Don't have"}
          </Link>
        </div>
      );
    },
  },
  {
    Header: "Номер/дата",
    accessor: "orderNumber",
    style: {
      flex: 1.2,
    },
    Cell: ({ row }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{ color: "#2C68F5" }}>
            {priceProductSeparate(
              Number(String(row.original.orderNumber || 0))
            )}
          </p>
          <p
            style={{
              color: "#909CB5",
            }}
          >
            {format(new Date(row.original.dateOfOrder || 0), "yyyy-MM-dd")}
          </p>
        </div>
      );
    },
  },
  {
    Header: "Кол-во",
    accessor: "countOfProduct",
    Cell: ({ row }) => {
      return (
        <div
          style={{
            display: "flex",
            gap: "5px",
          }}
        >
          <span>
            {priceProductSeparate(
              Number(String(row.original.countOfProduct || 0))
            )}
          </span>
          <span>шт.</span>
        </div>
      );
    },
  },
  {
    Header: "Общая сумма",
    accessor: "totalSum",
    style: {
      flex: 1.5,
    },
    Cell: ({ row }) => {
      return (
        <div>
          {row.original.totalSum > row.original.totalDiscount
            ? priceProductSeparate(
                Number(String(row.original.totalDiscount || 0))
              )
            : priceProductSeparate(Number(String(row.original.totalSum || 0)))}
          c
        </div>
      );
    },
  },
  {
    Header: "Оформление заказа",
    accessor: "orderType",
    style: {
      flex: 2,
    },
    Cell: ({ row }) => {
      return (
        <div>{checkInOrderType(row.original.orderType || "Don't have")}</div>
      );
    },
  },
  {
    Header: "Статус",
    accessor: "orderStatus",
    style: {
      flex: 1.4,
    },
    Cell: ({ row }) => {
      return <Select {...row.original} />;
    },
  },
  {
    Header: "Действия",
    accessor: "totalDiscount",
    Cell: ({ row }) => {
      return <Delete {...row.original} />;
    },
  },
];
