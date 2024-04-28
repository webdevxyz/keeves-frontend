import React from 'react';
import InstallApp from './InstallApp';
import OrdersDetails from './OrdersDetails';
import DeliveryAddress from './DeliveryAddress';
import DeliveryPartner from './DeliveryPartner';
import PayOnDelivery from './PayOnDelivery';

const Details = () => {
    return (
        <>
            <div>
                <InstallApp additionalClass="mobNone"/>
                <PayOnDelivery/>
                <DeliveryPartner/>
                <OrdersDetails/>
                <DeliveryAddress/>
                <button className='needHelpBtn'>Need help ? </button>
            </div>
        </>
    )
}

export default Details
