import {ALL_NEWS_FAIL,ALL_NEWS_SUCCESS,ALL_NEWS_REQUEST,CLEAR_ERRORS} from '../Constants/constant'

export const news_reducer = (state = {news:[]},action) => {
    switch(action.type){
        case ALL_NEWS_REQUEST:
            return {
                loading:true,
                news:[]
            }
        case ALL_NEWS_SUCCESS:
            return {
                loading:false,
                news:action.payload
            }
        case ALL_NEWS_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }
        default:
            return state
    }
}