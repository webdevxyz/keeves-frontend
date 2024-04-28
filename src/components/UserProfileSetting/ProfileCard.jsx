import React from 'react';
import { useSelector } from 'react-redux';


const ProfileCard = () => {
  const Demodata = useSelector((state) => state.Address.PersonalInfoData);

  const getFirstLetterOfLastWord = (fullName) => {
    const words = fullName.split(' ');
    const lastWord = words[words.length - 1];
    return lastWord ? lastWord[0] : '';
  };

  return (
    <div className='profileCardDiv'>
      <div className='profileCardImage'>
        <img src='https://res.cloudinary.com/dzqzuumor/image/upload/v1703826704/moma/image/user-img-2_xrmm4r.jpg' width={'56px'} height={'56px'} alt='Profile' />
      </div>
      <div className='profileCardText'>
        <p className='profileCardHello'>Hello</p>
        {Demodata && (
          <p className='profileCardName'>{Demodata.firstName + " " + getFirstLetterOfLastWord(Demodata.lastName)}</p>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
