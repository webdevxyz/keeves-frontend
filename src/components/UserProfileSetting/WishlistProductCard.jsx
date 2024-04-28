import React from 'react';
import Rating from 'react-rating-stars-component';

const WishlistProductCard = ({ offPercantage, about, title, starNumbers, Totalreviews, price, Earlyprice, img,banner }) => {

  const percentageDifference = Math.round((price / Earlyprice) * 100);

  return (
    <>
      <div className='wishlistProductCard'>
        <div style={{ background: `url(${img})`, backgroundSize: 'cover' }} className='wishlistProductCardImg'>
        <div className='wishlistProductCardInnerImg' style={{ background: `url(${banner})`,backgroundSize:'38px',backgroundPositionY:'36px',backgroundRepeat:'round' }}><p>{offPercantage} %</p><p>OFF</p></div>
        </div>
        <div className='wishlistProductCardDetails'>
          <h6>{about}</h6>
          <h5>{title}</h5>
          <h4><Rating count={5} size={24}  value={starNumbers} edit={false} /> {Totalreviews}</h4>
          <h3>₹ {price}</h3>
          <h2>MRP <span style={{ textDecoration: 'line-through' }}>{Earlyprice}</span> ({percentageDifference}%)</h2>
        </div>
      </div>
    </>
  );
}

export default WishlistProductCard;
