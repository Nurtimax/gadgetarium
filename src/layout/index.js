import React from "react";
import AboutStore from "../pages/landing/AboutStore";
import Footer from "./Footer/Footer";
import AdminHeader from "./header/AdminHeader";
import UserHeader from "./header/UserHeader";

const Layout = () => {
  const role = "user";
  return (
    <div className="box">
      {role === "admin" ? <AdminHeader /> : <UserHeader />}
      <main>
        <AboutStore />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
