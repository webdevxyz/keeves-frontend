import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddressCard = (props) => {

    const navigate = useNavigate();


    return (
        <>
            <div className="addresscard">
                <img src={props.address.image} alt="" />
                <div>
                    <h3>{props.address.heading}</h3>
                    <p>{props.address.text}</p>
                    <button className='primaryBtn' onClick={() => navigate("/deliveryType")}>Deliver Here</button>
                </div>
            </div>
        </>
    );
}

export default AddressCard
