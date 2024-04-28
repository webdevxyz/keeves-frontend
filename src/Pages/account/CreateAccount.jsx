import React from "react";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
    const [passwordShowHide, setPasswordShowHide] = useState(false);
    const navigate = useNavigate();

    const passwordHandel = () => {
        if (passwordShowHide) {
            setPasswordShowHide(false);
        } else {
            setPasswordShowHide(true);
        }
    };

    return (
        <>
            <div className="createAccountBg">
                {/* <nav className="nav">
          <div className="logo">
            <img src="assets/img/logo.svg" alt="logo"></img>
          </div>
        </nav> */}
                <div className="loginContainer">
                    <h3 className="fs25 fw500 mb0p5">Create New Account</h3>
                    <p className="fs14 op0p7 mb1">
                        From listing your products to tracking orders, Mo Market makes it
                        easy for you to grow your business.
                    </p>
                    <form autoComplete="off">

                        <div className="flexCenter gap1">
                            <div className="inputBox">
                                <label>First Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Enter your First Name"
                                        name="name"
                                        style={{ paddingLeft: "10px" }}
                                    />
                                    <img
                                        src="assets/svg/user-icon.svg"
                                        alt=""
                                        className="input-icon"
                                    />
                                </div>
                            </div>
                            <div className="inputBox">
                                <label>Last Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        name="name"
                                        style={{ paddingLeft: "10px" }}
                                    />
                                    <img
                                        src="assets/svg/user-icon.svg"
                                        alt=""
                                        className="input-icon"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="inputBox">
                            <label>Email Address</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="myemail@gmail.com"
                                    name="email"
                                />
                                <img
                                    src="icon/at-the-rate-icon.svg"
                                    alt=""
                                    className="input-icon"
                                />
                            </div>
                        </div>

                        <div className="inputBox">
                            <label>Enter Password</label>
                            <div className="password">
                                <input
                                    type={passwordShowHide ? "text" : "password"}
                                    className="password-field"
                                    placeholder="Enter Password"
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

                        <button type="submit" className="formPrimaryButton">Create Account</button>
                    </form>

                    <p className="orLoginText createAcLine">Or Create Account Using</p>

                    <div className="ssoLogin">
                        <img src="svg/google.svg" alt="" />
                        Login With Google
                    </div>
                </div>
                <div className="createNewAccount">
                    <span>Already have an account? </span>
                    <button onClick={() => navigate("/login")}>Login</button>
                </div>
            </div>
        </>
    );
};

export default CreateAccount;
