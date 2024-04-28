import React from 'react';
import reloadIcon from '/icon/reload-icon.svg'

const OrderPicked = () => {
  return (
    <>
    <div className="orderPicked">
      <h3>Order is picked up</h3>
      <div className='flexCenter gap0p5'>
        <span className='time'>Arriving in 5mins</span>
        <button className='reloadBtn' onClick={() => window.location.reload()}><img src={reloadIcon} alt="" /></button>
      </div>
    </div>
    </>
  )
}

export default OrderPicked
