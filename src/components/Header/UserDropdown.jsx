import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import dropdownIcon from "/icon/dropdown-icon.svg";
import myProfileIcon from "/icon/my-profile-icon.svg";
import ordersIcon from "/icon/orders-icon.svg";
import wishlistsIcon from "/icon/wishlists-icon.svg";
import notificationIcon from "/icon/notification-icon.svg";
import logoutIcon from "/icon/logout-icon.svg";

const UserDropdown = () => {
  const buttons = [
    { image: myProfileIcon, text: "My Profile", link: "/UserProfileSetting/PersonalInfo" },
    { image: ordersIcon, text: "Orders", link: "/orders" },
    { image: wishlistsIcon, text: "Wishlists", link: "/" },
    { image: notificationIcon, text: "Notification", link: "/" },
    { image: logoutIcon, text: "Logout", link: "/login" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (link) => {
    navigate(link);
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div id="UserDropdown" ref={dropdownRef}>
        <div className="openBtn" onClick={toggleDropdown}>
          <div className="userImage">
            <img
              src="https://res.cloudinary.com/dzqzuumor/image/upload/v1703826704/moma/image/user-img-2_xrmm4r.jpg"
              alt=""
            />
          </div>
          <span> Jagannath</span>
          <img src={dropdownIcon} alt="" className={`${isOpen ? "rotate" : ""}`} />
        </div>
        {isOpen && (
          <div className="content">
            {buttons.map(function (data, index) {
              return (
                <button key={index} onClick={() => handleButtonClick(data.link)}>
                  <img src={data.image} alt="" />
                  {data.text}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default UserDropdown;
