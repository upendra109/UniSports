import { ADD_TICKET, REMOVE_TICKET } from "../Constants/constant";

export const add_ticket = (id,price,date,SeatNumber,left_image,right_image) => (dispatch) => {
    
    const item = {
        id:id,
        price,price,
        date:date,
        SeatNumber:SeatNumber,
        left_image:left_image,
        right_image:right_image
    }

    

    dispatch({type:ADD_TICKET,payload:item})

}

export const remove_ticket = (id) => (dispatch) => {

    dispatch({type:REMOVE_TICKET,payload:id})
}