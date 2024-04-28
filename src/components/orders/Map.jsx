import React from 'react'

const Map = () => {
    return (
        <>
            <div className='mainDiv'>
                <iframe
                    title="Google Maps Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0372874527507!2d85.82066677501064!3d20.29872368117414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c3f8435d9d%3A0x1e20ba6b9302ca6c!2sPal%20Heights%20Mall!5e0!3m2!1sen!2sin!4v1706855274128!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    )
}

export default Map
