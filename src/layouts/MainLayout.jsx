import React from "react";
import App from "../App";
import NavBar from "../components/header/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>

      <div className="min-h-[calc(100vh-300px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
