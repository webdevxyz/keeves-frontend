import React from 'react';
import Nothing from '../../../components/UserProfileSetting/Nothing';
import img from '../../../../public/images/UserProfileSettingImgs/NothingFound.png';
import Productimg from '../../../../public/images/UserProfileSettingImgs/Manimg.png';
import WishlistProductCard from '../../../components/UserProfileSetting/WishlistProductCard';
import banner from '../../../../public/images/UserProfileSettingImgs/WishlistProductBanner.jpg';

const MyWishlist = () => {
  const array = [
    {
      id: 1,
      offPercantage: 13,
      about: 'AMERICAN CREW',
      title: "Polo Collar Half Sleeves Shirt",
      star: 4,
      Totalreviews: "23,672",
      price: 965,
      Earlyprice: 1350.13,
      img: Productimg,
      bannerimg:banner,
    },
    {
      id: 2,
      offPercantage: 13,
      about: 'AMERICAN CREW',
      title: "Polo Collar Half Sleeves Shirt",
      star: 4,
      Totalreviews: "23,672",
      price: 965,
      Earlyprice: 1350.13,
      img: Productimg,
      bannerimg:banner,
    },
    ,
    {
      id: 3,
      offPercantage: 13,
      about: 'AMERICAN CREW',
      title: "Polo Collar Half Sleeves Shirt",
      star: 4,
      Totalreviews: "23,672",
      price: 965,
      Earlyprice: 1350.13,
      img: Productimg,
      bannerimg:banner,
    },
    ,
    {
      id: 4,
      offPercantage: 13,
      about: 'AMERICAN CREW',
      title: "Polo Collar Half Sleeves Shirt",
      star: 4,
      Totalreviews: "23,672",
      price: 965,
      Earlyprice: 1350.13,
      img: Productimg,
      bannerimg:banner,
    },
    ,
    {
      id: 5,
      offPercantage: 13,
      about: 'AMERICAN CREW',
      title: "Polo Collar Half Sleeves Shirt",
      star: 4,
      Totalreviews: "23,672",
      price: 965,
      Earlyprice: 1350.13,
      img: Productimg,
      bannerimg:banner,
    },
    ,
    {
      id: 6,
      offPercantage: 13,
      about: 'AMERICAN CREW',
      title: "Polo Collar Half Sleeves Shirt",
      star: 4,
      Totalreviews: "23,672",
      price: 965,
      Earlyprice: 1350.13,
      img: Productimg,
      bannerimg:banner,
    },
  ];

  return (
    <div>
      {array.length === 0 ? (
        <Nothing para={"YOU'VE NOTHING IN YOUR WISHLIST"} name={'Wishlisted items'} img={img} />
      ) : (
        <div className='wishlistProductCardContainer'>
          <h1 className='wishlistProductCardContainerHeadline'>Wishlisted Items</h1>
          <div className='wishlistProductCardInnderdiv'>
            {array.map((curr) => (
              <WishlistProductCard
                key={curr.id}
                offPercantage={curr.offPercantage}
                about={curr.about}
                title={curr.title}
                starNumbers={curr.star}
                Totalreviews={curr.Totalreviews}
                price={curr.price}
                Earlyprice={curr.Earlyprice}
                img={curr.img}
                banner={curr.bannerimg}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWishlist;
