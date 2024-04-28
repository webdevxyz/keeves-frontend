import React from 'react';
import OrderSummary from '../../components/checkoutFlow/OrderSummary';
import AddressCard from '../../components/checkoutFlow/AddressCard';
import homeIcon from "/icon/home-icon.svg";
import workIcon from "/icon/work-icon.svg";
import locationIcon from "/icon/location-icon.svg";
import { useState } from "react";
import SaveAddressModal from '../../components/checkoutFlow/SaveAddressModal';


const NextStep = () => {
  return (
    <>
      <div className='bgWhite br10 veryLightBorder p1 mtb1 flexCenter gap1'>
        <div className='checkoutFlowIcon'><img src="icon/delivery-icon.svg" alt="" /></div>
        <div>
          <p className='fs20 fw400'>Delivery Type</p>
          <span className='fs14 fw400 opa0p7'>How soon you want to receive this order</span>
        </div>
      </div>
      <div className='bgWhite br10 veryLightBorder p1 flexCenter gap1'>
        <div className='checkoutFlowIcon'><img src="icon/payment-method-icon.svg" alt="" /></div>
        <div>
          <p className='fs20 fw400'>Payment Method</p>
          <span className='fs14 fw400 opa0p7'>How you want to make payment for this order</span>
        </div>
      </div>
    </>
  )
}



const DeliveryAddress = () => {

  const addressList = [
    {
      id: "1",
      image: homeIcon,
      heading: "Home",
      text: "Apt 567, Cedarwood Terrace, Meadowville, Sunshine, Pleasant Valley, USA, 78901-2345"
    },
    {
      id: "2",
      image: workIcon,
      heading: "Work",
      text: "Apt 567, Cedarwood Terrace, Meadowville, Sunshine, Pleasant Valley, USA, 78901-2345"
    },
    {
      id: "3",
      image: locationIcon,
      heading: "Home - Bhubaneswar",
      text: "Apt 567, Cedarwood Terrace, Meadowville, Sunshine, Pleasant Valley, USA, 78901-2345"
    },
  ]

  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleOutsideModalClick = (event) => {
    if (event.target.id === "myModal") {
      closeModal();
    }
  };

  return (
    <>
      <div className="checkoutContainer">
        <div className="container flex gap1 mobColumn">
          <div className='w70 mobW100'>
            <div className='bgWhite br10 veryLightBorder p1'>
              <div className='flexCenter gap1'>
                <div className='checkoutFlowIcon checkoutFlowIconActive'><img src="icon/choose-location-icon.svg" alt="" /></div>
                <div>
                  <p className='fs20 fw400'>Choose a delivery address</p>
                  <span className='fs14 fw400 opa0p7'>Multiple addresses in this location</span>
                </div>
              </div>

              <div className='checkoutCommonBox mt1 grid2 gap1 mobGrid1'>
                {addressList.map(function (Addresscard) {
                  return <AddressCard address={Addresscard} key={Addresscard.id} />;
                })}
                <div className="addresscard">
                  <img src={locationIcon} alt="" />
                  <div>
                    <h3>Add New Address</h3>
                    <p>Please add your new address to get items delivered in your location</p>
                    <button className='secondaryBtn' onClick={openModal}>Add New</button>
                  </div>
                </div>
              </div>

            </div>
            <NextStep />
          </div>
          <OrderSummary />
        </div>
      </div >

      {isModalVisible && (
        <div id="myModal" className="addAddresModal" onClick={handleOutsideModalClick}>
          <div className="contentBox">
            <div className="flexCenterSB mb0p5">
              <h3 className="fs16 fw600 mobFs16">Save delivery address</h3>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
            </div>
            <SaveAddressModal />
          </div>
        </div>
      )}
    </>
  )
}

export default DeliveryAddress
