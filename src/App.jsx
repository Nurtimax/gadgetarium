import React from "react";
import { Route, Routes } from "react-router-dom";
import OrderItem from "./components/orders/OrderItem";
import Orders from "./containers/orders/Orders";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppRoutes />} />
      <Route path="orders" element={<Orders />} />
      <Route path="orders/:orderId" element={<OrderItem />} />
    </Routes>
  );
};

export default App;
