import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DeliveryTypeOptions = () => {
    const navigate = useNavigate();

    const [selectedDeliveryType, setSelectedDeliveryType] = useState(() => {
        return localStorage.getItem('selectedDeliveryType') || null;
    });

    const handleDeliveryTypeChange = (event) => {
        const newDeliveryType = event.target.value;
        setSelectedDeliveryType(newDeliveryType);
        localStorage.setItem('selectedDeliveryType', newDeliveryType);
        navigate("/paymentMethod");
    };

    useEffect(() => {
        const labels = document.querySelectorAll('.deliveryType');
        labels.forEach((label) => {
            const value = label.getAttribute('data-value');
            if (value === selectedDeliveryType) {
                label.classList.add('active');
            } else {
                label.classList.remove('active');
            }
        });
    }, [selectedDeliveryType, navigate]);

    return (
        <>
            <div className='deliveryTypes'>
                <label
                    className={`deliveryType ${selectedDeliveryType === 'instant' ? 'active' : ''}`}
                    data-value='instant'
                    onClick={() => handleDeliveryTypeChange({ target: { value: 'instant' } })}
                >
                    <input
                        type='radio'
                        name='deliveryType'
                        value='instant'
                        checked={selectedDeliveryType === 'instant'}
                        onChange={handleDeliveryTypeChange}
                    />
                    <div>
                        <h4>Instant</h4>
                        <span>25 MINS</span>
                    </div>
                    <span className='price'>&#8377;30</span>
                </label>
                <label
                    className={`deliveryType ${selectedDeliveryType === 'noRush' ? 'active' : ''}`}
                    data-value='noRush'
                    onClick={() => handleDeliveryTypeChange({ target: { value: 'noRush' } })}
                >
                    <input
                        type='radio'
                        name='deliveryType'
                        value='noRush'
                        checked={selectedDeliveryType === 'noRush'}
                        onChange={handleDeliveryTypeChange}
                    />
                    <div>
                        <h4>No Rush</h4>
                        <span>IN 60-120 MINS</span>
                    </div>
                    <span className='price'>&#8377;20</span>
                </label>
                <label
                    className={`deliveryType ${selectedDeliveryType === 'sameDay' ? 'active' : ''}`}
                    data-value='sameDay'
                    onClick={() => handleDeliveryTypeChange({ target: { value: 'sameDay' } })}
                >
                    <input
                        type='radio'
                        name='deliveryType'
                        value='sameDay'
                        checked={selectedDeliveryType === 'sameDay'}
                        onChange={handleDeliveryTypeChange}
                    />
                    <div>
                        <h4>Same Day</h4>
                        <span>Evening</span>
                    </div>
                    <span className='price'>Free</span>
                </label>
            </div>
        </>
    );
};

export default DeliveryTypeOptions;
