import React from "react";
import { useSelector } from "react-redux";

const AdminProductDetailBreadcrumbs = () => {
  const { data } = useSelector((state) => state.adminProductDetails);
  return <span>{data?.productName}</span>;
};

export default AdminProductDetailBreadcrumbs;
