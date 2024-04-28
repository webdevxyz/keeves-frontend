import React from 'react';
import Rating from 'react-rating-stars-component';


const ReviewCard = ({ mainimg, name, desc, comment, commentText, commentImgs, star, date }) => {
    return (
      <>
        <div className='reviewcardMaindiv'>
          <div className='reviewcardMaindiv1'>
            <div className='reviewcardMaindiv1Productimg'>
            <div className='reviewcardMaindiv1Productimg' style={{ background: `url(${mainimg})`, backgroundSize: 'cover',backgroundRepeat:" no-repeat" }}></div>
              <p className='reviewcardMaindiv1Name'>{name}</p>
              <p className='reviewcardMaindiv1Desc'>{desc}</p>
              <div className='reviewcardMaindiv1Stars'>
                <Rating count={5} size={27} value={star} edit={false} />
              </div>
            </div>
          </div>
  
          <div className='reviewcardMaindiv2'>
            <p className='reviewcardMaindiv2Comment'>{comment}</p>
            <p className='reviewcardMaindiv2About'>{commentText}</p>
            <div className='reviewcardMaindiv2Imagebox'>
              {commentImgs.map((img, index) => (
                <img key={index} src={img} alt={`comment-img-${index}`} width={'75px'} height={'74px'} />
              ))}
            </div>
          </div>
  
          <div className='reviewcardMaindivReview'>
            <h6>Reviewed</h6>
            <p className='reviewcardMaindivDate'>{date}</p>
          </div>
          <div className='reviewcardMaindivBorder'></div>
        </div>
      </>
    );
  };
  
export default ReviewCard;