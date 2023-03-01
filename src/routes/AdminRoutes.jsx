import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "../containers/add-product/AddProduct";
import Orders from "../containers/orders/Orders";
import AdminLayout from "../layout/admin";
import { ROUTES } from "../utils/constants";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<AdminLayout />}>
        <Route index element={<Navigate to={ROUTES.GOODS} />} />
        <Route
          path="goods"
          element={
            <h1>
              goods
              <Link to="add-product">add product</Link>
            </h1>
          }
        />
        <Route
          path={`${ROUTES.GOODS}/${ROUTES.PRODUCT}`}
          element={<h1>Product</h1>}
        />
        <Route
          path={`${ROUTES.GOODS}/${ROUTES.ADMINITEMDETAIL}`}
          element={<h1>detail</h1>}
        />
        <Route
          path={`${ROUTES.GOODS}/${ROUTES.ADDPRODUCT}`}
          element={<AddProduct />}
        />
        <Route path={`${ROUTES.ORDERS}`} element={<Orders />} />
        <Route
          path={`${ROUTES.REVIEWSRATING}`}
          element={<h1>Revviews Rating</h1>}
        />
        <Route />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
