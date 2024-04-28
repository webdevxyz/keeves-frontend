import React from 'react';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CiLocationOn } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { DeleteAddress, MyPrimaryAddressBtn,AddIdForEdit } from '../../Store/AddressSlice';

const AddressCard = ({ id, place, Address, primary }) => {

  const dispatch = useDispatch();

  const RemoveAddress = () => {
    dispatch(DeleteAddress(id));
  }

  const EditAddress = (id) => {
    dispatch(AddIdForEdit(id));
    document.getElementById('addNewAddressMainDiv').style.display = 'block';
  }

  const MakePrimaryAddress = (obj) => {
    dispatch(MyPrimaryAddressBtn(obj));
  }

  return (
    <>
      <div className="addressCardDiv">
        <div className='addressCardDivIcon'><CiLocationOn /></div>
        <div className="addressCardDivTopdiv">
          <h1>{place}</h1>
          <p>{Address}</p>
        </div>
        <div className="addressCardDivBottomdiv">
          <div onClick={() => MakePrimaryAddress(id)} className={primary ? 'btn primary' : 'btn'}>
            {primary ? 'PRIMARY' : 'Make Primary'}
          </div>
          <div onClick={() => EditAddress(id)} className='addressCardDivBottomdivEdit'>
            <MdEdit />
          </div>
          <div onClick={() => RemoveAddress(id)} className='addressCardDivBottomdivDelete'>
            <RiDeleteBin6Line />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressCard;
