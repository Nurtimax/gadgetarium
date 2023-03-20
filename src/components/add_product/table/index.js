import React, { useMemo } from "react";
import {
  ADD_PRODUCT_TABLE_HEADER_TITLE,
  ChangeValueTableData,
  tableReusibleItems,
} from "../../../utils/constants/add-product";
import Table from "../../Table";
import Charactersitics from "./Charactersitics";

const AddProductTable = ({ tableData = [], id }) => {
  const changeReusibleTableItem = useMemo(() => {
    const findedTableItem = tableReusibleItems.find(
      (tableItem) => tableItem.id === id
    );

    return findedTableItem.keys.map((item) => {
      return {
        Header: item.name,
        accessor: item.key,
        style: {
          flex: item.flex,
        },
        Cell: ({ row }) => {
          return (
            <Charactersitics
              item={row.original.characteristics}
              id={item.key}
            />
          );
        },
      };
    });
  }, [id]);

  const tableHeader = [
    ...ADD_PRODUCT_TABLE_HEADER_TITLE,
    ...changeReusibleTableItem,
    ...ChangeValueTableData,
  ];

  return (
    <div>
      <Table
        tableHeaderTitle={tableHeader}
        data={tableData}
        isMarked={null}
        found={false}
        countOfOrders={1}
      />
    </div>
  );
};

export default AddProductTable;
