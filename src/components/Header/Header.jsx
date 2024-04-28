import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchForm from "./SearchForm";
import User from "./User";
import UserDropdown from "./UserDropdown";
import LocationModal from "./LocationModal";
import ListDropdown from "./ListDropdown";

import locationIcon from "/icon/location-icon.svg";
import dropdownIcon from "/icon/dropdown-icon.svg";

import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  const [isLoggedIn] = useState(true);

  // modal code //
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleOutsideModalClick = (event) => {
    if (event.target.id === "myModal") {
      closeModal();
    }
  };

  const showLeftDiv = () => {
    navigate('/UserProfileSetting/PersonalInfo');
    const mainCardLeftcross = document.getElementById("UserProfileSettingMainCardLeftSide");
    const mainCardLeft = document.getElementById("UserProfileSettingMainHideDiv");

    if (mainCardLeft) {
      mainCardLeftcross.style.display = 'block';
      mainCardLeft.style.display = 'block';
    }
  };

  return (
    <>
      <header>
        <nav>
          <div className="flexCenter">
            <button onClick={showLeftDiv} className="menuBtn"><img src="/icon/menu-icon.svg" alt="" /></button>
            <div className="logo" onClick={() => navigate("/")}>
              <img src="/logo/logo.svg" alt="Logo" />
            </div>
          </div>

          {/* <div className="flex w60 meadiaPosition">
            <ListDropdown />
            <div className="box">
              <div id="openModal" onClick={openModal}>
                <img src={locationIcon} alt="" />
                <div>
                  <span>Enter</span>
                  <h3>Delivery Address</h3>
                </div>
                <img src={dropdownIcon} alt="" className={`${isModalVisible ? "rotate" : ""}`} />
              </div>
              <div className="bar"></div>
              <SearchForm />
            </div>
          </div> */}

          <div className="flexCenter gap3 mobGap0p5">
            {/* {isLoggedIn ? <UserDropdown /> : <User />} */}
            <button className="cartBtn" onClick={() => navigate("/cart")}>
             
              <span>Product</span>
            </button>

            <button className="cartBtn" onClick={() => navigate("/cart")}>
              
              <span>Blog</span>
            </button>

            <button className="cartBtn" onClick={() => navigate("/cart")}>
              
              <span>Contact Us</span>
            </button>

          </div>    
        </nav>
      </header>
      <LocationModal
        isModalVisible={isModalVisible}
        handleOutsideModalClick={handleOutsideModalClick}
        closeModal={closeModal}
        isLoggedIn={isLoggedIn}
      />
      <div className="downloadMomaApp">
        <div className="container flexCenterSB mobColumn mobAlignStart">
          <p>
            Order Paan items, munchies and much more on our new MoMa- Mo Market
            app
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&hl=en_IN&gl=US" target="_blank" rel="noopener noreferrer">
            Download MoMa - Mo Market App{" "}
            <img src="/icon/dropdown-icon.svg" alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
