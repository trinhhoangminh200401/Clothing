import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import LinkItems from '../data/link-display.json'
function Navigation() {
  return (
    <>
      <div className="navigation">
        <NavBar navitems={LinkItems} />
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
