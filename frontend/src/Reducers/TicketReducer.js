import {ALL_TICKETS_REQUEST,ALL_TICKETS_FAIL,ALL_TICKETS_SUCCESS} from '../Constants/constant'


export const ticket_reducer = (state = {tickets:[]},action) => {
    switch(action.type){
        case ALL_TICKETS_REQUEST:
            return {
                loading:true,
                tickets:[]
            }
        case ALL_TICKETS_SUCCESS:
            return {
                loading:false,
                tickets:action.payload
            }
        case ALL_TICKETS_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}