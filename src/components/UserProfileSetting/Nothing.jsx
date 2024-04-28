import React from 'react';


const Nothing = ({para,name,img}) => {
  return (<>
    <div className='nothing'>
    <div className='nothingTitle'><p>{name}</p></div>
    <div className='nothingImage' style={{background: `url(${img})`,backgroundSize: "cover"}}></div>
    <div className='nothingheadline'><h2>OPPS!! <br/> {para}</h2></div>
    <div className='nothingButton'><p>Browser now</p></div>
    </div>
    </>)
}

export default Nothing;