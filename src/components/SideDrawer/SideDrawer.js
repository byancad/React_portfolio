import React from "react";
import "./SideDrawer.css";

import { BrowserRouter, Route, Link } from "react-router-dom";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    // <BrowserRouter>
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/AboutMe">About</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
    // </BrowserRouter>
  );
};

export default SideDrawer;
