import React from 'react';
import { useNavigate } from 'react-router-dom';
import successImg from "/svg/checkout-success-img.svg";
import blueLocationIcon from "/icon/blue-location-icon.svg";

const Success = () => {

  const navigate = useNavigate();

  const data = {
    time:"10 Minutes",
    address: "XHGQ+89, Nunegundlaplli, Ambeskar Veedhi, Bhubaneswar, Odisha, 560001, India",
    location: "Jaydev Vihar, Bhubaneswar",
  };

  return (
    <>
      <div className="checkoutSuccessContainer">
        <div className="successContent">
          <h1>HURRAYY!!</h1>
          <span>We are arriving in</span>
          <h2>{data.time}</h2>
          <img src={successImg} alt="Icon" className='mainImage'/>
          <div className="flexCenter">
            <img src={blueLocationIcon} alt="Image" className='locationIcon'/>
            <h3>{data.location}</h3>
          </div>
          <p>{data.address}</p>
          <button className='primaryBtn' onClick={() => navigate("/orders")}>Go to My Order</button>
          <button className='textBtn' onClick={() => navigate("/")}>Buy More</button>
        </div>
      </div>
    </>
  )
}

export default Success
