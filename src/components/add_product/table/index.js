import React from "react";
import { ADD_PRODUCT_TABLE_HEADER_TITLE } from "../../../utils/constants/add-product";
import Table from "../../Table";

const AddProductTable = ({ tableData = [] }) => {
  return (
    <div>
      <Table
        tableHeaderTitle={ADD_PRODUCT_TABLE_HEADER_TITLE}
        data={tableData}
        isMarked={null}
        found={false}
        countOfOrders={1}
      />
    </div>
  );
};

export default AddProductTable;
