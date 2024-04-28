import React from 'react';
import { useState } from 'react';
import Details from '../../components/orders/Details';
import Map from '../../components/orders/Map';
import OrderPicked from '../../components/orders/OrderPicked';
import OrderDelivered from '../../components/orders/OrderDelivered';
import InstallApp from '../../components/orders/InstallApp';

const OrderDetails = () => {

    const [isDeliverd] = useState(false);

    return (
        <>
            <div className='ordersContainer'>
                <div className="container flex gap1 h100 mobColumnReverse mobGap0p5">
                    <div className="ordersDetails"><Details /></div>
                    <div className="ordersMap">
                        <InstallApp additionalClass="none mobFlex mb0p5" />
                        <Map />
                        {isDeliverd ? <OrderDelivered /> : <OrderPicked />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDetails
