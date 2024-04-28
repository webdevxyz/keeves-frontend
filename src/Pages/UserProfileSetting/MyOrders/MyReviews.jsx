import React from 'react';
import Nothing from '../../../components/UserProfileSetting/Nothing';
import ReviewCard from '../../../components/UserProfileSetting/ReviewCard'; 

import img from '../../../../public/images/UserProfileSettingImgs/NothingFound2.png';
import Productimg1 from '../../../../public/images/UserProfileSettingImgs/ReviewProductImg1.png';
import Productsubimg1 from '../../../../public/images/UserProfileSettingImgs/ReviewSubimgs1.png';
import Productimg2 from '../../../../public/images/UserProfileSettingImgs/ReviewProductImg2.png';
import Productsubimg2 from '../../../../public/images/UserProfileSettingImgs/ReviewSubimgs2.png';

const MyReviews = () => {
  const array = [
    {
      mainimg: Productimg1,
      name: 'ITC Aashrivaad Atta',
      desc: '5kg',
      comment: 'Amazing Product',
      commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      commentImgs: [Productsubimg1, Productsubimg1, Productsubimg1, Productsubimg1],
      star: 4,
      date: 'Today',
    },
    {
      mainimg: Productimg2,
      name: 'Sharma Fashion Wear',
      desc: 'Clothes Store & Designer at Rajeev Market, New Delhi, India',
      comment: 'Good Seller & Awesome Products',
      commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      commentImgs: [Productsubimg2, Productsubimg2, Productsubimg2, Productsubimg2],
      star: 4,
      date: 'Yesterday',
    },
    {
      mainimg: Productimg1,
      name: 'ITC Aashrivaad Atta',
      desc: '5kg',
      comment: 'Amazing Product',
      commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitt...',
      commentImgs: [Productsubimg1, Productsubimg1, Productsubimg1, Productsubimg1],
      star: 4,
      date: '12 Dec 2023',
    },
  ];

  return (
    <div>
      {array.length === 0 ? (
        <Nothing para={"YOU'VE NOT RATED ANYTHING YET"} name={'My Reviews'} img={img} />
      ) : (
        <div className='myReviews'>
          <h1>My Reviews</h1>
          {array.map((curr, index) => (
            <ReviewCard key={index} {...curr} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
