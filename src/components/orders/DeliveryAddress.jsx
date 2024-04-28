import React from 'react'

const DeliveryAddress = () => {

    const data = {
        name: "Neha Sharma",
        number:"7548975462",
        address: "Plot no 34, Near OHM Colony, Sahid Nagar, bhubaneswar, 753078",
    }

    return (
        <>
            <div className='bgWhite p10 mtb0p5 br10'>
                <h3 className='fs14 fw500'>DELIVERY ADDRESS</h3>
                <h2 className='mtb0p5 fs20 fw500'>{data.name}</h2>
                <span className='fs14 fw500 opa0p8'>+91{data.number}</span>
                <p className='mt0p5 fs14 fw400 opa0p8 lh20'>{data.address}</p>
            </div>
        </>
    )
}

export default DeliveryAddress
