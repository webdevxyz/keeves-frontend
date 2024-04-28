import React from 'react';
import messageIcon from '/icon/message-icon.svg';
import callIcon from '/icon/call-icon.svg'

const DeliveryPartner = () => {
    return (
        <>
            <div className='deliveryPartner'>
                <div className="flexCenter gap1">
                    <div className='image'>
                        <img src='https://res.cloudinary.com/dzqzuumor/image/upload/v1707471354/moma/image/delivery-patner-img_gtvlpe.jpg' alt='Image' />
                    </div>
                    <div className="text">
                        <h3>M. Raman</h3>
                        <span>Your delivery partner</span>
                    </div>
                </div>
                <div className='flexCenter gap0p5'>
                    <button className='icon'><img src={messageIcon} alt="" /></button>
                    <button className='icon'><img src={callIcon} alt="" /></button>
                </div>
            </div>
        </>
    )
}

export default DeliveryPartner
