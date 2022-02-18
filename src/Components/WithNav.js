import React from "react";
import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";

const WithNav = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default WithNav;
