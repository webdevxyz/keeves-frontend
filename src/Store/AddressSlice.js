import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const AddressSlice = createSlice({
  name: 'Address',
  initialState: {
    PersonalInfoData: {
      firstName: 'Jagannath',
      middleName: '-',
      lastName: 'Senapati',
      emailAddress: 'armarsenapati12@gmail.com',
      mobileNumber: '+918747578912',
      gender: 'male',
    },
    Addressarray: [
      { id: '100', place: 'Home', Address: 'Apt 567, Cedarwood Terrace, Meadowville, Sunshine, Pleasant Valley, USA, 78901-2345', primary: true },
      { id: '101', place: 'Work', Address: 'Apt 567, Cedarwood Terrace, Meadowville, Sunshine, Pleasant Valley, USA, 78901-2345', primary: false },
      { id: '102', place: 'Home - Bhubaneswar', Address: 'Apt 567, Cedarwood Terrace, Meadowville, Sunshine, Pleasant Valley, USA, 78901-2345', primary: false }
    ],
    DataForEdit: {},
  },
  reducers: {
    AddNewAddress(state, action) {
      const { id, place, Address, primary } = action.payload;
    
      if (id === '') {
        const newId = Date.now();
        const newAddress = { id: newId, place, Address, primary };
        state.Addressarray = [newAddress, ...state.Addressarray];}

      else {
        const index = state.Addressarray.findIndex((curr) => curr.id === id);
        state.Addressarray[index] = { id, place, Address, primary };
      }
    },
    DeleteAddress(state, action) {
      state.Addressarray = state.Addressarray.filter((curr) => curr.id !== action.payload);
    },
    AddIdForEdit(state, action) {
      const selectedAddress = state.Addressarray.find((curr) => curr.id === action.payload);
      if (selectedAddress) {
        const { id, place, Address } = selectedAddress;
        const realaddress = Address.split(',');
        let houseNumber = realaddress[0];
        let floorNumber = realaddress[1];
        let buildingName = realaddress[2];
        let howToReach = realaddress.slice(3).join(',');
        state.DataForEdit = { id,place, houseNumber, floorNumber, buildingName, howToReach };

      }
    },
    UpdateProfileData(state, action) {
      const { firstName, middleName, lastName, gender, emailAddress, mobileNumber } = action.payload;
      state.PersonalInfoData = { firstName, middleName, lastName, gender, emailAddress, mobileNumber };
    },
    MyPrimaryAddressBtn(state, action) {
      const targetId = action.payload;
      const targetAddress = state.Addressarray.find((curr) => curr.id === targetId);
      if (targetAddress) {
        targetAddress.primary = true;
        state.Addressarray.forEach((address) => {
          if (address.id !== targetId) {
            address.primary = false;
          }
        });
      }
    },
  },
});

export const { AddNewAddress, DeleteAddress, MyPrimaryAddressBtn, AddIdForEdit, UpdateProfileData} = AddressSlice.actions;

export default AddressSlice.reducer;

export const uploadnewAddress = (Alldata) => async (dispatch) => {
  try {
    await axios.post('', Alldata);
  } catch (error) {
    console.error('Error posting data to MockAPI:', error);
  }
};
