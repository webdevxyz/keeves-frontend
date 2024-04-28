import React from 'react'
import OrderSummary from '../../components/checkoutFlow/OrderSummary';
import DeliveryTypeOptions from '../../components/checkoutFlow/DeliveryTypeOptions';
import { useNavigate } from 'react-router-dom';


const ChooseDelivery = () => {
    return (
        <div className='bgWhite br10 veryLightBorder p1'>
            <div className='flexCenter gap1'>
                <div className='checkoutFlowIcon checkoutFlowIconComplete'><img src="icon/choose-location-icon.svg" alt="" /></div>
                <div>
                    <p className='fs20 fw400'>Choose a delivery address</p>
                    <span className='fs14 fw400 opa0p7'>Multiple addresses in this location</span>
                </div>
            </div>
            <div className='checkoutCommonBox gap1 mt1'>
                <h3 className='fs16 fw500 opa0p8'>Home</h3>
                <p className='fs14 fw400 opa0p8 mt0p5'>Apt 567, Cedarwood Terrace, Meadowville, Sunshine, Pleasant Valley, USA, 78901-2345</p>
            </div>
        </div>
    )
}


const CompleteDeliveryType = () => {
    return (
        <>
            <div className='bgWhite br10 veryLightBorder p1 mtb1'>
                <div className='flexCenter gap1'>
                    <div className='checkoutFlowIcon checkoutFlowIconComplete'><img src="icon/delivery-icon.svg" alt="" /></div>
                    <div>
                        <p className='fs20 fw400'>Delivery Type</p>
                        <span className='fs14 fw400 opa0p7'>How soon you want to receive this order</span>
                    </div>
                </div>
                <div className='checkoutCommonBox mt1'>
                    <label className="deliveryType active">
                        <div>
                            <h4>Instant</h4>
                            <span>25 MINS</span>
                        </div>
                        <span className='price'>&#8377;30</span>
                    </label>
                </div>
            </div>
        </>
    )
}


const PaymentMethod = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="checkoutContainer">
                <div className="container flex gap1 mobColumn">
                    <div className='w70 mobW100'>
                        <ChooseDelivery />
                        <CompleteDeliveryType />
                        <div className='bgWhite br10 veryLightBorder p1'>
                            <div className='flexCenter gap1'>
                                <div className='checkoutFlowIcon checkoutFlowIconActive'><img src="icon/payment-method-icon.svg" alt="" /></div>
                                <div>
                                    <p className='fs20 fw400'>Payment Method</p>
                                    <span className='fs14 fw400 opa0p7'>How you want to make payment for this order</span>
                                </div>
                            </div>
                            <div className="checkoutCommonBox mt1">
                                <button className='primaryBtn w100' onClick={() => navigate("/success")}>PROCEED TO PAY</button>
                            </div>
                        </div>
                    </div>
                    <OrderSummary />
                </div>
            </div >
        </>
    )
}

export default PaymentMethod
