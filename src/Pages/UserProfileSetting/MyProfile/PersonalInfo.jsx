import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {UpdateProfileData} from '../../../Store/AddressSlice';


const PersonalInfo = () => {
  const dispatch=useDispatch();
  const [editMode, setEditMode] = useState(false);

  const enableEditMode = () => {
    document.getElementById('personalInfoBtns').style.display = 'block';
    document.querySelectorAll('.personalInfoMaindivDiv2 input').forEach(input => {
      input.style.cursor = 'text';
    });
    document.querySelectorAll('.personalInfoMaindivDiv1 span').forEach(span => {
      span.style.display = 'none';
    });
    setEditMode(true);
  }

  const disableEditMode = () => {
    formik.resetForm();
    setEditMode(false);
    document.querySelectorAll('.personalInfoMaindivDiv2 input').forEach(input => {
      input.style.cursor = 'not-allowed';
    });
    document.querySelectorAll('.personalInfoMaindivDiv1 span').forEach(span => {
      span.style.display = 'block';
    });
    document.getElementById('personalInfoBtns').style.display = 'none';
  }

  const SubmitData=(obj)=>{
  dispatch(UpdateProfileData(obj));
    setEditMode(false);
    document.querySelectorAll('.personalInfoMaindivDiv2 input').forEach(input => {
      input.style.cursor = 'not-allowed';
    });
    document.querySelectorAll('.personalInfoMaindivDiv1 span').forEach(span => {
      span.style.display = 'block';
    });
    document.getElementById('personalInfoBtns').style.display = 'none';

  }


  
  const Demodata = useSelector((state) => state.Address.PersonalInfoData);
  
  const formik = useFormik({
    initialValues: {
      firstName: Demodata.firstName,
      middleName: Demodata.middleName,
      lastName: Demodata.lastName,
      gender: Demodata.gender,
      emailAddress: Demodata.emailAddress,
      mobileNumber: Demodata.mobileNumber,
    },
    onSubmit: values => {
      SubmitData(values);},
  });

  return (
    <form onSubmit={formik.handleSubmit}>
    <div className="personalInfoMaindiv">
      <div className="personalInfoMaindivDiv1">
        <h1>Personal Information</h1>
          <span onClick={() => enableEditMode()}>Edit</span>
      </div>

      <div className="personalInfoMaindivDiv2">
        <div className="personalInfoMaindivDiv2Box">
          <label>First Name</label>
          <input type="text" name="firstName" disabled={!editMode} value={formik.values.firstName} onChange={formik.handleChange} />
        </div>
        <div className="personalInfoMaindivDiv2Box">
          <label>Middle Name</label>
          <input type="text" name="middleName" disabled={!editMode} value={formik.values.middleName} onChange={formik.handleChange} />
        </div>
        <div className="personalInfoMaindivDiv2Box">
          <label>Last Name</label>
          <input type="text" name="lastName" disabled={!editMode} value={formik.values.lastName} onChange={formik.handleChange} />
        </div>
      </div>

      <div className="personalInfoMaindivDiv2">
        <div className="personalInfoMaindivDiv2Inputradiodiv">
          <label>Your Gender</label>
          <div className="personalInfoMaindivDiv2Inputradiodiv1">
            <div className="personalInfoMaindivDiv2Inputradiodiv2">
              <input type="radio" name="gender" value="male" disabled={!editMode}  onChange={formik.handleChange} checked={formik.values.gender === 'male'} />
              <span>Male</span>
            </div>
            <div className="personalInfoMaindivDiv2Inputradiodiv2">
              <input type="radio" name="gender" value="female" disabled={!editMode} onChange={formik.handleChange}  checked={formik.values.gender === 'female'} />
              <span>Female</span>
            </div>
          </div>
        </div>
      </div>

      <div className="personalInfoMaindivDiv2Box0">
        <div className="personalInfoMaindivDiv2">
          <div className="personalInfoMaindivDiv2Box">
            <label className="personalInfoMaindivDiv2BoxLabeltitle">Email Address</label>
            <input type="email" name="emailAddress" disabled={!editMode} value={formik.values.emailAddress} onChange={formik.handleChange} />
          </div>
        </div>

        <div className="personalInfoMaindivDiv2">
          <div className="personalInfoMaindivDiv2Box">
            <label className="personalInfoMaindivDiv2BoxLabeltitle">Mobile Number</label>
            <input type="tel" name="mobileNumber" disabled={!editMode} value={formik.values.mobileNumber} onChange={formik.handleChange} />
          </div>
        </div>

        <div id='personalInfoBtns' className="personalInfoMaindivDiv3">
          <button disabled={!editMode}  type="submit" className="personalInfoMaindivDiv3Updatebtn">Update</button>
          <button disabled={!editMode} className="personalInfoMaindivDiv3Cancelbtn" onClick={()=>disableEditMode()}>Cancel</button>
        </div>
      </div>
    </div>
    </form>
  );
}

export default PersonalInfo;
