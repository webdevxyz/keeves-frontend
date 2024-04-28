import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import image from "/svg/user-placeholder-img.svg";

const User = () => {
  useEffect(() => {
    const loginBtn = document.querySelector(".loginBtn");

    const showLoginBtn = setTimeout(() => {
      loginBtn.style.opacity = "1";
    }, 1500);

    const hideLoginBtn = setTimeout(() => {
      loginBtn.style.opacity = "0";
    }, 3000);

    return () => {
      clearTimeout(showLoginBtn);
      clearTimeout(hideLoginBtn);
    };
  }, []);

  const location = useLocation();

  const navigate = useNavigate();
  const goToLogin = () => {
    if (location.pathname !== "/login") {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="loginContent" onClick={goToLogin}>
        <div className="img">
          <img src={image} alt="" />
        </div>
        <span>Hello, Log in</span>
        <button className="loginBtn" onClick={goToLogin}>Login</button>
      </div>
    </>
  );
};

export default User;
