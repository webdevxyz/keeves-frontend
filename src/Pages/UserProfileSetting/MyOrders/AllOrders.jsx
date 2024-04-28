import React from 'react';
import Nothing from '../../../components/UserProfileSetting/Nothing';
import Nothingimg from '../../../../public/images/UserProfileSettingImgs/NothingFound.png';
import Productimg from '../../../../public/images/UserProfileSettingImgs/mouseimg.png';
import ProductTrackCard from '../../../components/UserProfileSetting/ProductTrackCard';
import { MdOutlineArrowDropDown } from "react-icons/md";

const AllOrders = () => {
  const array = [
    {
      OrderdDate: 'Today',
      orders: [
        {
          img: Productimg,
          title: "Logitech B100 Wired USB Mouse, 3 yr Warranty, 800 DPI Optical Tracking, Ambidextrous PC/Mac/Laptop - Black",
          color: 'Graphite',
          pattern: 'Small-Medium Hands',
          deliveryDate: '12th Oct 2023',
          orderAmount: '4,809',
        },
        {
          img: Productimg,
          title: "Logitech B100 Wired USB Mouse, 3 yr Warranty, 800 DPI Optical Tracking, Ambidextrous PC/Mac/Laptop - Black",
          color: 'Graphite',
          pattern: 'Small-Medium Hands',
          deliveryDate: '12th Oct 2023',
          orderAmount: '4,809',
        },
      ],
    },
    {
      OrderdDate: 'on 29 Oct 2023',
      orders: [
        {
          img: Productimg,
          title: "Logitech B100 Wired USB Mouse, 3 yr Warranty, 800 DPI Optical Tracking, Ambidextrous PC/Mac/Laptop - Black",
          color: 'Graphite',
          pattern: 'Small-Medium Hands',
          deliveryDate: '12th Oct 2023',
          orderAmount: '4,809',
        },
        {
          img: Productimg,
          title: "Logitech B100 Wired USB Mouse, 3 yr Warranty, 800 DPI Optical Tracking, Ambidextrous PC/Mac/Laptop - Black",
          color: 'Graphite',
          pattern: 'Small-Medium Hands',
          deliveryDate: '12th Oct 2023',
          orderAmount: '4,809',
        },
      ],
    },
  ];

  return (
    <div>
      {array.length === 0 ? (
        <Nothing para={"YOU'VE NOTHING IN YOUR ORDER LIST"} name={'My Orders'} img={Nothingimg} />
      ) : (
        <div className='productTrackCardTopFather'>
          <div className='productTrackCardTop'>
            <h1>My Orders</h1>
            <div className="dropdown">
              <div className="dropbtn">All <MdOutlineArrowDropDown /></div>
              <div className="dropdown-content">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
                <a href="#">Option 4</a>
                <a href="#">Option 5</a>
              </div>
            </div>
          </div>
          {array.map((curr, index) => (
            <div className='productTrackCard' key={index}>
              <p>Ordered {curr.OrderdDate}</p>
              {curr.orders.map((order, orderIndex) => (
                <ProductTrackCard
                  key={orderIndex}
                  title={order.title}
                  color={order.color}
                  pattern={order.pattern}
                  deliveryDate={order.deliveryDate}
                  orderAmount={order.orderAmount}
                  img={order.img}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllOrders;
