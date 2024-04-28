import React, { useState, useEffect } from "react";
import redDeleteBinIcon from "/icon/red-delete-bin-icon.svg";
import dropdownIcon from "/icon/dropdown-icon.svg";
import bluePercentageIcon from "/icon/blue-percentage-icon.svg";

const OrderSummary = () => {
    const [priceData, setPriceData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setPriceData({
                mrp: "2040.00",
                deliveryFee: "20.00",
                platformFee: "15.00",
                tip: "Add Tip",
                feedIndia: "2.00",
                discount: "-240.00",
                totalAmount: "240.00",
            });
        }, 1000);
    }, []);

    if (!priceData) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="w30 mobW100">
                <div className="bgWhite br10 veryLightBorder">
                    <h3 className="fs18 fw400 p1 lightBorderBottom2">Order Summary</h3>
                    <div className="p1">
                        <div className="borderBottomDashed pb1">
                            <div className="flexCenterSB">
                                <div className="fs16">MRP</div>
                                <div className="flexCenter gap0p2">
                                    <span className="fs14 opa0p8">&#8377;</span>
                                    <h3 className="fs20 fw500">
                                        <span>{priceData.mrp}</span>
                                    </h3>
                                </div>
                            </div>

                            <div className="flexCenterSB mtb1">
                                <div>
                                    <p className="fs16">Delivery Fee</p>
                                    <span className="fs12 opa0p7">
                                        Order above ₹500 for a Free Delivery
                                    </span>
                                </div>
                                <div className="flexCenter gap0p2">
                                    <span className="fs14 opa0p8">&#8377;</span>
                                    <h3 className="fs20 fw500">
                                        <span>{priceData.deliveryFee}</span>
                                    </h3>
                                </div>
                            </div>

                            <div className="flexCenterSB">
                                <div>
                                    <p className="fs16">Small Cart Platform Fee</p>
                                    <span className="fs12 opa0p7">on orders below ₹150</span>
                                </div>
                                <div className="flexCenter gap0p2">
                                    <span className="fs14 opa0p8">&#8377;</span>
                                    <h3 className="fs20 fw500">
                                        <span>{priceData.platformFee}</span>
                                    </h3>
                                </div>
                            </div>

                            <div className="flexCenterSB mtb1">
                                <div className="fs16">Delivery Tip</div>
                                <h3 className="fs20 fw500 primaryClr">{priceData.tip}</h3>
                            </div>

                            <div className="flexCenterSB">
                                <div className="fs16">Feed India</div>
                                <div className="flexCenter gap0p2">
                                    <span className="fs14 opa0p8">&#8377;</span>
                                    <h3 className="fs20 fw500">
                                        <span>{priceData.feedIndia}</span>
                                    </h3>
                                    <img src={redDeleteBinIcon} alt="" width="15px" />
                                </div>
                            </div>

                            <div className="flexCenterSB mt1">
                                <div className="fs16">Discount</div>
                                <div className="flexCenter gap0p2 shadeGreenClr">
                                    <span className="fs14 opa0p8">- &#8377;</span>
                                    <h3 className="fs20 fw500">
                                        <span>{priceData.discount}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="flexCenterSB mt1">
                            <span className="fs20 fw400 mobFs18">Total Amount</span>
                            <div className="flexCenter gap0p2">
                                <span className="fs14 opa0p8">&#8377;</span>
                                <h3 className="fs20 fw700">
                                    <span>{priceData.totalAmount}</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderSummary;
