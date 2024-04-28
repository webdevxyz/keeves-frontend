import React, { useState } from 'react';
import dropdownIcon from '/icon/dropdown-icon.svg';

const CouponCard = ({ data, btn }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <>
            <div className="coupon">
                <div className='p15'>
                    <div className="flexCenterSB">
                        <div className='flexCenter gap0p5'>
                            <div className='couponImg'><img src={data.image} alt="" /></div>
                            <h3>{data.name}</h3>
                        </div>
                        <button className='textBtn fs14' onClick={btn}>APPLY</button>
                    </div>
                    <div className='mt1'>
                        <p className='savePrice'>{data.savePrice}</p>
                        <p className='cashback'>{data.cashback}</p>
                        <p className='onOrders'>{data.onOrders}</p>
                    </div>
                    <button className='viewDetailsbtn' onClick={toggleDetails}>
                        {showDetails ? "Hide details" : "View details"} <img src={dropdownIcon} alt="" />
                    </button>
                </div>
                {showDetails && (
                    <ul>
                        {data.additionalInfo.map((info, index) => (
                            <li key={index}>{info}</li>
                        ))}
                    </ul>
                )}
            </div>


        </>
    )
}

export default CouponCard;
