import {ALL_NEWS_SUCCESS,ALL_NEWS_REQUEST} from '../Constants/constant'
import axios from 'axios'

export const getNews = () => async(dispatch) => {
    dispatch({type:ALL_NEWS_REQUEST})
    let link = 'http://localhost:1234/news/all'
    const {data} = await axios.get(link)
    dispatch({type:ALL_NEWS_SUCCESS,payload:data.news})
}
