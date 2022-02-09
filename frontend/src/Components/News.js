import React, {useEffect} from 'react';
import SingleNews from './SingleNews';
import './News.css'
import {getNews} from '../Actions/NewsAction'
import {useSelector,useDispatch} from 'react-redux'


const News = () => {

  const dispatch = useDispatch()
  const {news} = useSelector(state => state.news)

  useEffect(()=>{
    dispatch(getNews())
  },[dispatch])

  return (
    <div className='news_container'>

        {news.map((newss) => (
                <div>
                <SingleNews heading={newss.heading} date={newss.Date}  image={newss.news_image}  />
                </div>
              ))}

    </div>
  );
};

export default News;
