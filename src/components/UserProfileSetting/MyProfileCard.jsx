
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';



const MyProfile = () => {

  const removeLeftDiv = () => {
  

    const mainCardLeftcross = document.getElementById("UserProfileSettingMainCardLeftSide");
    const mainCardLeft = document.getElementById("UserProfileSettingMainHideDiv");

    if ( window.innerWidth < 768){
      mainCardLeftcross.style.display = 'none';
      mainCardLeft.style.display = 'none';
    }
  }
  return (
    <div className='myprofileOrMyorderCardDiv'>
      <p className='myprofileOrMyorderCardTitle'>My Profile</p>
      <div className='myprofileOrMyorderCardBox'>
        <NavLink className='navLink' onClick={()=>removeLeftDiv()} to="/UserProfileSetting/PersonalInfo"><p>Personal Information</p></NavLink>
        <NavLink className='navLink' onClick={()=>removeLeftDiv()} to="/UserProfileSetting/ManageAddress"><p>Manage Addresses</p></NavLink>
        <NavLink className='navLink' onClick={()=>removeLeftDiv()} to="/UserProfileSetting/PaymentInfo"><p>Payment Card Information</p></NavLink>
        <NavLink className='navLink' onClick={()=>removeLeftDiv()} to="/UserProfileSetting/Notification"><p>All Notifications</p></NavLink>
      </div>
    </div>
  );
}

export default MyProfile;
