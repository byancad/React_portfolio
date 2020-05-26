import React from "react";
import "./Toolbar.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_nav">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo"></div>
      <Link to="/AboutMe">Home </Link>
      <Link to="/Portfolio">Portfolio </Link>
      <Link to="/Contact">Contact Me </Link>
    </nav>
  </header>
);
export default Toolbar;
