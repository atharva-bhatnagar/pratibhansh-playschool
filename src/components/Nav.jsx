import React from "react";

const Nav = ({ nav }) => {
  return (
    <div className="navbar">
      <ul className="nav-content">
        <li onClick={() => nav("/")}>Home</li>

        <a href="#about">
          <li onClick={() => nav("/#about")}>About Us</li>
        </a>

        <li onClick={() => nav("/Academics")}>Academics</li>
        <li onClick={() => nav("/Activities")}>Activities</li>
      </ul>
      <ul className="nav-content">
        <li onClick={() => nav("/FeeStructure")}>Fee Structure</li>
        <a href="#gallery">
          <li onClick={() => nav("/#gallery")}>Gallery</li>
        </a>
        <a href="#contact">
          <li onClick={() => nav("/#contact")}>Contact Us</li>
        </a>
      </ul>
    </div>
  );
};
export default Nav;
