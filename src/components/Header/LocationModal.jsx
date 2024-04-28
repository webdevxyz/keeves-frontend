import React from "react";
import { AfterLogin, BeforeLogin } from "./ModalContent"

const LocationModal = ({ isModalVisible, handleOutsideModalClick, closeModal, isLoggedIn }) => (
    <>
        {isModalVisible && (
            <div id="myModal" className="modal" onClick={handleOutsideModalClick}>
                <div className="modalContent">
                    <div className="flexCenterSB">
                        <h3 className="fs20 fw600 mobFs16">Choose your location</h3>
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                    </div>
                    {isLoggedIn ? <AfterLogin /> : <BeforeLogin />}
                    <div className="pinCode">
                        <div className="line line1"></div>
                        <span>or Enter an Indian PIN Code</span>
                        <div className="line line2"></div>
                    </div>
                    <form action="">
                        <input
                            type="text"
                            placeholder="Enter Pin code"
                            autoComplete="off"
                        />
                        <button className="secondaryBtn">Apply</button>
                    </form>
                </div>
            </div>
        )}
    </>
);

export default LocationModal;
