import React from 'react';
import { useState } from 'react';
import dropdownIcon from '/icon/dropdown-icon.svg'

const PayOnDelivery = () => {

    const priceData = {
        subTotal: "215.00",
        handlingCharges: "5.00",
        smallCartFee: "15.00",
        deliveryCharges: "20.00",
        govtTaxes: "9.00",
        FeedIndia: "2.00",
        discounts: "54.00",
    }

    const [visible, setVisible] = useState(false);

    const handlVisible = () => {
        if(visible === false){
            setVisible(true)
        }
        else(
            setVisible(false) 
        )
    }

    return (
        <>
            <div className='bgWhite p10 br10 mtb0p5'>
                <span className='fs14 fw400'>Pay on Delivery</span>
                <h3 className='primaryClr fs22 mt0p5'>&#8377; 215.00</h3>

                {visible && (
                    <div className="borderTopDashed pt1 mt1">
                        <div className="flexCenterSB">
                            <p className="fs16">Sub total</p>
                            <h3 className="fs20 fw600">
                                &#8377;{priceData.subTotal}
                            </h3>
                        </div>

                        <div className="flexCenterSB mtb1">
                            <p className="fs16">Handling charges</p>
                            <span className="fs16 fw400">
                                &#8377;{priceData.handlingCharges}
                            </span>
                        </div>

                        <div className="flexCenterSB">
                            <div>
                                <p className="fs16">Small Cart Fee</p>
                                <span className="fs12 opa0p7">(on orders below ₹150)</span>
                            </div>
                            <span className="fs16 fw400">
                                &#8377;{priceData.smallCartFee}
                            </span>
                        </div>

                        <div className="flexCenterSB mtb1">
                            <div>
                                <p className="fs16">Delivery charges</p>
                                <span className="fs12 opa0p7">(Free delivery on orders above ₹300)</span>
                            </div>
                            <span className="fs16 fw400">
                                &#8377;{priceData.deliveryCharges}
                            </span>
                        </div>

                        <div className="flexCenterSB">
                            <p className="fs16">Delivery Tip</p>
                            <button className='textBtn'>Add Tip</button>
                        </div>

                        <div className="flexCenterSB mtb1">
                            <p className="fs16">Govt Taxes & Other Charges</p>
                            <span className="fs16 fw400">
                                &#8377;{priceData.govtTaxes}
                            </span>
                        </div>

                        <div className="flexCenterSB">
                            <p className="fs16">Feed India</p>
                            <span className="fs16 fw400">
                                &#8377;{priceData.FeedIndia}
                            </span>
                        </div>

                        <div className="flexCenterSB mt1">
                            <p className="fs16">Discounts</p>
                            <span className="fs16 fw600 orangeClr">
                                -&#8377;{priceData.discounts}
                            </span>
                        </div>
                    </div>
                )}

                <button className='viewOrderSummeryBtn' onClick={handlVisible}>
                    {visible ? "Hide Order Summery" : "View Order Summery"}
                    <img src={dropdownIcon} alt="Icon" />
                </button>
            </div>
        </>
    )
}

export default PayOnDelivery
