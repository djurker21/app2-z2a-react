import "./Sidebar.scss";
import { Link } from "react-router-dom";
import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cml">CML</Link>
        <Link to="/map">Map</Link>
      </nav>
    </div>
  );
}
