import { format } from "date-fns";
import Delete from "../../components/orders/Delete";
import Select from "../../components/orders/Select";

export const OrdersTableHeaderTitle = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "ФИО",
    accessor: "fullname",
  },
  {
    Header: "Номер/дата",
    accessor: "orderNumber",
    Cell: ({ row }) => {
      return (
        <span>
          <span>{row.original.orderNumber}</span>
          <span>
            {format(new Date(row.original.dateOfOrder), "dd/MM/yyyy")}
          </span>
        </span>
      );
    },
  },
  {
    Header: "Кол-во",
    accessor: "countOfProduct",
    Cell: ({ row }) => {
      return <div>{row.original.countOfProduct}шт.</div>;
    },
  },
  {
    Header: "Общая сумма",
    accessor: "totalSum",
    Cell: ({ row }) => {
      return (
        <div>
          {row.original.totalSum > row.original.totalDiscount
            ? row.original.totalDiscount.toFixed()
            : row.original.totalSum.toFixed()}
          c
        </div>
      );
    },
  },
  {
    Header: "Оформление заказа",
    accessor: "designOrder",
  },
  {
    Header: "Статус",
    accessor: "status",
    Cell: ({ row }) => {
      return <Select {...row.original} />;
    },
  },
  {
    Header: "Действия",
    accessor: "action",
    Cell: ({ row }) => {
      return <Delete {...row.original} />;
    },
  },
];
