import {ALL_TICKETS_REQUEST,ALL_TICKETS_FAIL,ALL_TICKETS_SUCCESS} from '../Constants/constant'
import axios from 'axios'

export const gettickets = () => async(dispatch) => {
    dispatch({type:ALL_TICKETS_REQUEST})
    let link = 'http://localhost:1234/ticket/all'
    const {data} = await axios.get(link)
    dispatch({type:ALL_TICKETS_SUCCESS,payload:data.tickets})
}



