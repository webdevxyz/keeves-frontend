import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <nav>
          <div className="flexCenter">
            <div className="logo" onClick={() => navigate("/")}>
              <img src="/logo/logo.png" alt="Logo" />
            </div>
          </div>

          <div className="flexCenter gap3 mobGap0p5">
            <button className="cartBtn" onClick={() => navigate("/")}>
              <span>Home</span>
            </button>

            <button className="cartBtn" onClick={() => navigate("/blogs")}>
              <span>Blog</span>
            </button>

            <button className="cartBtn" onClick={() => navigate("/contact")}>
              <span>Contact Us</span>
            </button>
          </div>
        </nav>
      </header>

      <div className="downloadMomaApp">
        <div className="container flexCenterSB mobColumn mobAlignStart">
          <div className="flex">
            <p className="primaryClr"> &nbsp; hi@keeves.com</p>
          </div>

          <div className="flex">
            <img src="/icon/call-icon.svg" alt="" />
            <p className="primaryClr"> &nbsp; 0123456789</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
