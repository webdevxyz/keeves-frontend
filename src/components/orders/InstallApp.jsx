import React from 'react';
import image from '/svg/install-app-img.svg';
import dropdownIcon from '/icon/dropdown-icon.svg';

const InstallApp = ({additionalClass}) => {
    return (
        <>
            <div className={`installApp ${additionalClass}`}>
                <img src={image} alt="" className='mainImage'/>
                <div>
                    <h4>Install our mobile app to get accurate details on your phone</h4>
                    <a href="">Install Now <img src={dropdownIcon} alt="Icon" /></a>
                </div>
            </div>
        </>
    )
}

export default InstallApp
