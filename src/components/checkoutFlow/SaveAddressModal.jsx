import React from 'react';
import { useState } from 'react';

const SaveAddressModal = () => {
    const [activeType, setActiveType] = useState(null);

    const handleTypeClick = (type) => {
        setActiveType((prevActiveType) => (prevActiveType === type ? null : type));
    };
    return (
        <>
            <form action="" autoComplete='off'>
                <div>
                    <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0372874527507!2d85.82066677501064!3d20.29872368117414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c3f8435d9d%3A0x1e20ba6b9302ca6c!2sPal%20Heights%20Mall!5e0!3m2!1sen!2sin!4v1706855274128!5m2!1sen!2sin"
                        width="100%"
                        height="300px"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <input type="text" placeholder="*House / Flat Number" className="inputBox" required />
                <input type="text" placeholder="Floor Number" className="inputBox" required />
                <input type="text" placeholder="Apartment / Building Name" className="inputBox" required />
                <textarea placeholder="How to Reach (Optional)" className="textBox"></textarea>
                <div className='mb1'>
                    <span className='fs14 opa0p9'>Save this address as</span>
                    <div className='flexCenter gap1 mt0p5'>

                        <span
                            className={`addressType ${activeType === 'Home' ? 'active' : ''}`}
                            onClick={() => handleTypeClick('Home')}
                        >
                            Home
                        </span>
                        <span
                            className={`addressType ${activeType === 'Office' ? 'active' : ''}`}
                            onClick={() => handleTypeClick('Office')}
                        >
                            Office
                        </span>
                        <span
                            className={`addressType ${activeType === 'Other' ? 'active' : ''}`}
                            onClick={() => handleTypeClick('Other')}
                        >
                            Other
                        </span>

                    </div>
                </div>
                <button className='primaryBtn w100'>Save Address & Proceed</button>
            </form>
        </>
    )
}

export default SaveAddressModal
