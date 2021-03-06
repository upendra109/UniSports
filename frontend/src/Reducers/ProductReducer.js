import {ALL_PRODUCTS_FAIL,ALL_PRODUCTS_SUCCESS,ALL_PRODUCTS_REQUEST,CLEAR_ERRORS} from '../Constants/constant'

export const product_reducer = (state = {products:[]},action) => {
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return {
                loading:true,
                products:[]
            }
        case ALL_PRODUCTS_SUCCESS:
            return {
                loading:false,
                products:action.payload
            }
        case ALL_PRODUCTS_FAIL:
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