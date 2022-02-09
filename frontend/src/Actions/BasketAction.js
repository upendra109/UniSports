import { ADD_BASKET, REMOVE_BASKET } from "../Constants/constant";

export const add_basket = (id,price,name,rating,image) => (dispatch) => {
    
    const item = {
        id:id,
        price,price,
        name:name,
        rating:rating,
        image:image
    }

    

    dispatch({type:ADD_BASKET,payload:item})

}

export const remove_basket = (id) => (dispatch) => {

    dispatch({type:REMOVE_BASKET,payload:id})
}