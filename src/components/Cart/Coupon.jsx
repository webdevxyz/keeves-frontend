import React, { useState, useEffect } from 'react';
import dropdownIcon from "/icon/dropdown-icon.svg";
import bluePercentageIcon from "/icon/blue-percentage-icon.svg";
import CouponCard from './CouponCard';
import { couponList } from '../../lib/data/CartData'

const Coupon = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [invalidCoupon, setInvalidCoupon] = useState(null);

    useEffect(() => {
        if (isModalVisible) {
            document.body.classList.add('stopBodyScroll');
        } else {
            document.body.classList.remove('stopBodyScroll');
        }
    }, [isModalVisible]);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setInvalidCoupon(false);
    };

    const handleOutsideModalClick = (event) => {
        if (event.target.id === "openModal") {
            closeModal();
        }
    };

    const handleApply = (validation) => {
        if (validation === "valid") {
            setInvalidCoupon(false);
            closeModal();
        } else {
            setInvalidCoupon(true);
            setTimeout(() => {
                setInvalidCoupon(null);
            }, 1500);
        }
    };


    return (
        <>
            <div className="bgWhite ptb1 plr2 veryLightBorder br10 flexCenterSB pointer" onClick={openModal}>
                <div className="flexCenter gap1">
                    <img src={bluePercentageIcon} alt="" />
                    <span>Available offers & Coupons</span>
                </div>
                <img
                    src={dropdownIcon}
                    alt=""
                    style={{ transform: "rotate(-90deg)", width: "15px" }}
                />
            </div>

            {isModalVisible && (
                <div id="openModal" className='overlay' onClick={handleOutsideModalClick}>
                    <div className="couponList">
                        <div className="flexCenterSB mb0p5">
                            <h3 className="fs16 fw600 mobFs16">Available offers</h3>
                            <span className="close" onClick={closeModal}>
                                &times;
                            </span>
                        </div>
                        <form className='couponForm' autoComplete='off'>
                            <input type="text" placeholder='Enter Coupon Code' required />
                            <button>APPLY</button>
                        </form>
                        <div className='mt1'>
                            <span className='fs14 opa0p8'>Available coupons</span>
                            <div className="coupons">
                                {couponList.map(function (data) {
                                    return (
                                        <CouponCard data={data} key={data.id} btn={() => handleApply(data.validation)} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {invalidCoupon && (
                        <div className='couponValidation'>Coupon not valid for this order <button>Retry</button></div>
                    )}
                </div>
            )}
        </>
    )
}

export default Coupon;
