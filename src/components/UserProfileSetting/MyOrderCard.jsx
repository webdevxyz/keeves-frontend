import React from 'react';
import { NavLink } from "react-router-dom";
const MyOrders = () => {
  const removeLeftDiv = () => {

    const mainCardLeftcross = document.getElementById("UserProfileSettingMainCardLeftSide");
    const mainCardLeft = document.getElementById("UserProfileSettingMainHideDiv");
    const navbarhamburger = document.getElementById("UserProfileSettingnavbar");

    if ( window.innerWidth < 768){
      mainCardLeftcross.style.display = 'none';
      mainCardLeft.style.display = 'none';
      navbarhamburger.style.display = 'block';
    }
  }
  return (
    <div className='myprofileOrMyorderCardDiv'>
      <p className='myprofileOrMyorderCardTitle'>My Orders</p>
      <div className='myprofileOrMyorderCardBox'>
        <NavLink className='navLink' onClick={()=>removeLeftDiv()}  to="/UserProfileSetting/AllOrders"><p>All Orders</p></NavLink>
        <NavLink className='navLink' onClick={()=>removeLeftDiv()}  to="/UserProfileSetting/MyWishlist"><p>My Wishlist</p></NavLink>
        <NavLink className='navLink' onClick={()=>removeLeftDiv()}  to="/UserProfileSetting/MyReviews"><p>My Reviews</p></NavLink>
        <NavLink className='navLink' onClick={()=>removeLeftDiv()}  to="/UserProfileSetting/Saveforlater"><p>Saved for Later</p></NavLink>
      </div>
    </div>
  );
}

export default MyOrders;
