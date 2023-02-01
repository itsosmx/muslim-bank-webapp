import React from "react";
import Logo from "../../assets/logo.png";
import "./style.css";
import { NavLink } from "react-router-dom";
export default function Main() {
  return (
    <div className="main-container">
      <img src={Logo} alt="Muslim Bank" />
      <h1>Muslim Bank - بنك المسلم</h1>
      <NavLink to="/privacy">Privacy</NavLink>
    </div>
  );
}
