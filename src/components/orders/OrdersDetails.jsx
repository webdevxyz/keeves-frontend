import React from 'react';
import { useState } from 'react';
import dropdownIcon from '/icon/dropdown-icon.svg';

const OrdersDetails = () => {

    const ordersList = [
        {
            id:"1",
            image: "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826536/cld-sample-5.jpg",
            quantity: "2pc x",
            text: "Fresh Cabbage",
        },
        {
            id:"2",
            image: "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826536/cld-sample-5.jpg",
            quantity: "2pc x",
            text: "Fresh Cabbage",
        },
        {
            id:"3",
            image: "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826536/cld-sample-5.jpg",
            quantity: "2pc x",
            text: "Fresh Cabbage",
        },
        {
            id:"4",
            image: "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826536/cld-sample-5.jpg",
            quantity: "2pc x",
            text: "Fresh Cabbage",
        },
        {
            id:"5",
            image: "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826536/cld-sample-5.jpg",
            quantity: "2pc x",
            text: "Fresh Cabbage",
        },
    ]

    const initialvisibleColors = 2;
    const [visibleColors, setvisibleColors] = useState(initialvisibleColors);

    const handleReadMoreClick = () => {
        setvisibleColors(ordersList.length);
    };

    const handleShowLessClick = () => {
        setvisibleColors(initialvisibleColors);
    };

    return (
        <>
            <div className="bgWhite p10 br10 mtb0p5">
                <h3 className='fs14 fw500'>ORDER DETAILS</h3>
                {ordersList.map(function (data, index) {
                    return (
                        index < visibleColors && (
                            <div className="odersItem" key={data.id}>
                                <div className="image">
                                    <img src={data.image} alt="" />
                                </div>
                                <div className="text">
                                    <span>{data.quantity}</span>
                                    <span>{data.text}</span>
                                </div>
                            </div>
                        )
                    );
                })}
                {ordersList.length > initialvisibleColors && (
                    <button
                        className="viewOrderSummeryBtn"
                        onClick={
                            visibleColors === ordersList.length
                                ? handleShowLessClick
                                : handleReadMoreClick
                        }
                    >
                        {visibleColors === ordersList.length
                            ? "Hide Orders"
                            : "View Orders"
                        }
                        <img src={dropdownIcon} alt="Icon" />
                    </button>
                )}
            </div>
        </>
    )
}

export default OrdersDetails
