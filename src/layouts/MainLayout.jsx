import React from "react";
import App from "../App";
import NavBar from "../components/header/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-blue-100 dark:bg-black text-black dark:text-gray-300">
      <NavBar></NavBar>

      <div className="min-h-[calc(100vh-300px)] pt-20">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
