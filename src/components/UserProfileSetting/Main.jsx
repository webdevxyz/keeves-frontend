import React from 'react';
import MyOrderCard from './MyOrderCard';
import ProfileCard from './ProfileCard';
import { RxCross1 } from "react-icons/rx";
import AddNewAddressForm from './AddNewAddressForm';
import { Outlet } from "react-router-dom";
import MyProfileCard from './MyProfileCard';




const main = () => {

  window.addEventListener('resize', handleResize);

function handleResize() {
  if (window.innerWidth > 768) {
    document.getElementById("UserProfileSettingMainHideDiv").style.display = 'block';
  }
}

  const removeLeftDiv = () => {

    const mainCardLeftcross = document.getElementById("UserProfileSettingMainCardLeftSide");
    const mainCardLeft = document.getElementById("UserProfileSettingMainHideDiv");

    if (mainCardLeft) {
      mainCardLeftcross.style.display = 'none';
      mainCardLeft.style.display = 'none';
    }
  };

  return (<>
    <div className='UserProfileSettingMain'>
      <div id='UserProfileSettingMainCardLeftSide'><div id='UserProfileSettingMainHideCorss' className='UserProfileSettingCross' onClick={removeLeftDiv}><RxCross1/></div></div>
      <div className='UserProfileSettingMainCardLeft' id="UserProfileSettingMainHideDiv">
        <ProfileCard/>
        <MyProfileCard/>
        <MyOrderCard/>
      </div>
      <div className='UserProfileSettingMainCardRight'>
        <Outlet />
      </div>
      <AddNewAddressForm/>
    </div>
    </>
  );
}

export default main;
