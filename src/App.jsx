import React from "react";
import PaymentCard from "./components/payment-card/PaymentCard";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div>
      <AppRoutes />
      <PaymentCard />
    </div>
  );
};

export default App;
