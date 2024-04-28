import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [passwordShowHide, setPasswordShowHide] = useState(false);
  const [email, setEmail] = useState(true);
  const [number, setNumber] = useState(false);
  const navigate = useNavigate();
  const passwordHandel = () => {
    if (passwordShowHide) {
      setPasswordShowHide(false);
    } else {
      setPasswordShowHide(true);
    }
  };

  const emailBtn = () => {
    setEmail(true);
    setNumber(false);
  }
  const numberBtn = () => {
    setEmail(false);
    setNumber(true);
  }



  return (
    <>
      <div className="loginBg">
        <div className="loginContainer">
          <img src="logo/logo.svg" alt="Logo" className="loginScreenLogo" />
          <h3 className="fs20 fw500 mTB0p6">Login</h3>
          <p className="fs14 op0p7">From listing your products to tracking orders, Mo Market makes it easy for you to grow
            your business.
          </p>
          <div className="changeInputsButton">
            <button id="emailBtn" className={email ? "active" : ""} onClick={emailBtn}>Email</button>
            <button id="phoneBtn" className={number ? "active" : ""} onClick={numberBtn}>Phone</button>
          </div>
          {email &&
            <form className="loginForm" id="emailForm" autoComplete="off">

              <div className="inputBox">
                <label>Email Address</label>
                <div className="relative">
                  <input type="email" placeholder="myemail@gmail.com" required />
                  <img src="icon/at-the-rate-icon.svg" alt="" className="input-icon" />
                </div>
              </div>

              <div className="inputBox">
                <label>Password</label>
                <div className="password">
                  <input
                    type={passwordShowHide ? "text" : "password"}
                    className="passwordField"
                    placeholder="Password"
                    name="password"
                  />
                  <button type="button" className="toggleButton" onClick={passwordHandel}>
                    {passwordShowHide ? <FaEye /> : <FaEyeSlash />}
                  </button>
                  <img
                    src="icon/lock-icon.svg"
                    alt=""
                    className="input-icon"
                  />
                </div>
              </div>

              <div className="flexCenter justifySB">
                <div className="rememberBox">
                  <input type="checkbox" name="" id="" />
                  <span>Remember Me</span>
                </div>
                <Link href="forgot-passowrd.html" className="forgotPassword">Forgot Password?</Link>
              </div>

              <button className="formPrimaryButton">Log In</button>

            </form>
          }
          {number &&
            <form className="loginForm" id="phoneForm" autoComplete="off">
              <div className="inputBox">
                <label>Mobile Number</label>
                <div className="relative">
                  <input type="teaxt" placeholder="myemail@gmail.com" required />
                  <img src="icon/phone-icon.svg" alt="" className="input-icon" />
                </div>
              </div>
              <button className="formPrimaryButton">Log In</button>
            </form>
          }
          <p className="orLoginText">Or Login Using</p>

          <div className="ssoLogin">
                        <img src="svg/google.svg" alt="" />
                        Login With Google
          </div>
        </div>
        <div className="createNewAccount">
          <span>Do not have an account yet?</span>
          <button onClick={() => navigate("/create-account")}>Create New Account</button>
        </div>
      </div>
    </>
  )
}

export default Login
