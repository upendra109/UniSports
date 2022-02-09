import React from 'react';
import './SingleNews.css'

const SingleNews = ({heading,date,image}) => {
  return (
    <div className='single_container'>
        <div className="news_first">
            <div className="one">UniSports.com</div>    
            <div className="two">{heading}</div>
            <div className="thirdd">{date}</div>
        </div>

        <div className='news_second'>
            <img src={image} alt="" />
        </div>
    </div>
  );
};

export default SingleNews;
