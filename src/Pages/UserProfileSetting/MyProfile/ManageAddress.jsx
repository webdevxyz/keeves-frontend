import React from 'react';
import { FaPlus } from "react-icons/fa6";
import AddressCard from '../../../components/UserProfileSetting/AddressCard';
import { useDispatch, useSelector } from 'react-redux';
import {AddIdForEdit } from '../../../Store/AddressSlice';

const ManageAddress = () => {
  const dispatch=useDispatch();
  const data = useSelector((state) => state.Address.Addressarray);

  const isMobile = window.innerWidth > 768;

  const showAddressForm = () => {
    document.getElementById('addNewAddressMainDiv').style.display = 'block';
    dispatch(AddIdForEdit());

  };

  return (
    <>
      <div className="manageAddressMaindiv">
        <div className="manageAddressMaindivDiv1">
          <h1>Manage Address</h1>
          <p onClick={() => showAddressForm()} className='manageAddressMaindivDiv1Addnewuser'>
           <div  style={{position:'absolute',top:'14px',left:'10px'}}> <FaPlus /></div> {isMobile ? "Add New Address" : "Address"}
          </p>
        </div>
        <div className="manageAddressMaindivDiv2">
          {data.map((curr) => {
            return <AddressCard id={curr.id} {...curr} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ManageAddress;
