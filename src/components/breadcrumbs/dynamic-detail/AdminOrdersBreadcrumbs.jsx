import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AdminOrdersBreadcrumbs = () => {
  const { orderId } = useParams();
  const { orderResponses } = useSelector((state) => state.orderProduct.data);
  const findedOrderItem = orderResponses?.find(
    (item) => item.id === Number(orderId)
  );

  return <span style={{ color: "black" }}>{findedOrderItem?.fullName}</span>;
};

export default AdminOrdersBreadcrumbs;
