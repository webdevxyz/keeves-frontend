import React from 'react';
import { MdArrowRight } from "react-icons/md";



const ProductTrackCard = (props) => {
  const { title, color, pattern, deliveryDate, orderAmount,img } = props;

  return (
    <>
      <div className='productTrackCardHeaddiv'>
        <div className='productTrackCardHeadInnerdiv'>
          <div className='productTrackCardHeadInnerdiv1'>
            <div style={{ background: `url(${img})`, backgroundSize: 'cover' }} className='productTrackCardHeadInnerdiv1Img'></div>
            <div className='productTrackCardHeadInnerdiv1Text'>
              <p className='productTrackCardHeadInnerdiv1TextTitle'>{title}</p>
              <p className='productTrackCardHeadInnerdiv1TextDetail1'>Colour: <span>{color}</span></p>
              <p className='productTrackCardHeadInnerdiv1TextDetail2'>Pattern Name: <span>{pattern}</span></p>
            </div>
          </div>
          <div className='productTrackCardHeadInnerdiv2'>
            <div className='productTrackCardHeadInnerdiv2div1'>
              <p>Expected to deliver on</p>
              <h3>{deliveryDate}</h3>
            </div>
            <div className='productTrackCardHeadInnerdiv2div2'>
              <p>Order Amount</p>
              <h3>₹ {orderAmount}</h3>
            </div>
            <div className='productTrackCardHeadInnerdiv2div3'><p>Track order</p><MdArrowRight style={{fontSize:'25px'}}  /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductTrackCard;
