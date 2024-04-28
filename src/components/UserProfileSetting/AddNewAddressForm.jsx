import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewAddress } from '../../Store/AddressSlice';

const AddNewAddressForm = () => {
  const dispatch = useDispatch();

  const storageData = useSelector((state) => state.Address.DataForEdit) || {};

  const {id,place, houseNumber, floorNumber, buildingName, howToReach} = storageData;



  const [selectedAddressType, setSelectedAddressType] = useState(place||'');

  useEffect(() => {
  if (storageData.id !== '') {
    setSelectedAddressType(place);
  }
}, [storageData.id, place]);

  const initialValues = {id:id||'', houseNumber:houseNumber||'', floorNumber:floorNumber||'', buildingName:buildingName ||'', howToReach:howToReach ||'',selectedAddressType:''};
  

  const Hideform = () => document.getElementById('addNewAddressMainDiv').style.display = 'none';
  const handleAddressTypeClick = (type) => setSelectedAddressType(type);
  const onSubmit = (values,formik) => {
    const formData = {
      id: values.id,
      Address: `${values.houseNumber}, ${values.floorNumber}, ${values.buildingName}, ${values.howToReach}`,
      place: selectedAddressType,
    };
    if (
      selectedAddressType &&
      values.houseNumber &&
      values.floorNumber &&
      values.buildingName
    ) {
      dispatch(AddNewAddress(formData));
      Hideform();
      formik.setValues({ id: '', houseNumber: '', floorNumber: '', buildingName: '', howToReach: '', selectedAddressType: '',});}
      setSelectedAddressType('');
  };

  return (<>
  <div id='addNewAddressMainDiv'  className='addNewAddressMainDiv'>
    <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize={true}>
      <Form>
        <div  className='addNewAddressDiv' >
          <div className='addNewAddressInnerdiv'>
            <div className='addNewAddressInnerdivDiv1'>
              <h1>Save delivery address</h1>
              <div onClick={Hideform}>
                <RxCross1 />
              </div>
            </div>
            <div className='addNewAddressInnerdivMapdiv'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.285188890677!2d-77.56386161349819!3d43.161537496689725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6ca7657d5eb0d%3A0xe893377a70c90b54!2s567%20Cedarwood%20Terrace%2C%20Rochester%2C%20NY%2014609%2C%20USA!5e0!3m2!1sen!2sin!4v1705572452119!5m2!1sen!2sin'
              width='340'
              height='215'
              style={{ border: 0 }}
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            />
            </div>
            <div className='addNewAddressInnerdivInputsdiv'>
              <Field
                className='addNewAddressInnerdivInputsdivInputtext'
                placeholder='*House / Flat Number'
                name='houseNumber'
              />
              <Field
                className='addNewAddressInnerdivInputsdivInputtext'
                placeholder='Floor Number'
                name='floorNumber'
              />
              <Field
                className='addNewAddressInnerdivInputsdivInputtext'
                placeholder='Apartment / Building Name'
                name='buildingName'
                style={{ width: '93.5%', paddingRight: '10px', marginTop: '10px', paddingLeft: '10px', borderRadius: '8px', height: '52px', border: '1px solid #c3c7d2' }}
              />
              <Field
                as='textarea'
                className='addNewAddressInnerdivInputsdivInputtextarea'
                placeholder='How to Reach (Optional)'
                name='howToReach'
              />
            </div>
            <div className='addNewAddressInnerdivLast2div'>
              <h1>Save this address as</h1>
              <div>
                <p
                  style={{
                    backgroundColor: selectedAddressType === 'Home' ? '#bbdefb' : '',
                  }}
                  id="Home"
                  onClick={() => handleAddressTypeClick('Home')}
                >
                  Home
                </p>
                <p
                  style={{
                    backgroundColor: selectedAddressType === 'Office' ? '#bbdefb' : '',
                  }}
                  id="Office"
                  onClick={() => handleAddressTypeClick('Office')}
                >
                  Office
                </p>
                <p
                  style={{
                    backgroundColor: selectedAddressType === 'Other' ? '#bbdefb' : '',
                  }}
                  id="Other"
                  onClick={() => handleAddressTypeClick('Other')}
                >
                  Other
                </p>
              </div>
            </div>
            <div className='addNewAddressInnerdivBtndiv'>
              <button type="submit">
                Save Address & Proceed
              </button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
    </div>
    </>);
};

export default AddNewAddressForm;