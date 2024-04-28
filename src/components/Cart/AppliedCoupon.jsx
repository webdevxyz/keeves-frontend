import React from 'react';
import deleteIcon from "/icon/red-delete-bin-icon.svg";
import bluePercentageIcon from "/icon/blue-percentage-icon.svg";

const AppiledCoupon = () => {

    const data = {
        text:"NEW100",
        price:"500.00"
    }

    return (
        <>
            <div className="appliedCoupon">
                <div className='flexCenterSB'>
                    <div className="flexCenter gap0p5">
                        <img src={bluePercentageIcon} alt="" className='image'/>
                        <span className='fs14'>Offer Applied:</span>
                    </div>
                    <button className='btn'><img src={deleteIcon} alt="" /></button>
                </div>
                <h3>{data.text}</h3>
                <p>You have saved <b>₹{data.price}</b> discount on your order </p>
            </div>
        </>
    )
}

export default AppiledCoupon;
