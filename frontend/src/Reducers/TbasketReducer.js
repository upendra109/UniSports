import { ADD_TICKET,REMOVE_TICKET } from "../Constants/constant";

export const tbasket_reducer = (state = {tbasket:[]},action) => {
    switch(action.type) {
        
        case ADD_TICKET:
            return { 
                ...state,
                tbasket : [...state.tbasket,action.payload]
            }

        case REMOVE_TICKET:
            const index = state.tbasket.findIndex((ticket_item) => ticket_item.id === action.payload)

            let newBasket = [...state.tbasket]
            if(index >= 0){
                newBasket.splice(index,1)
            }
            else{
                console.warn('cannot remove the product')
            }
            return {
                ...state,
                tbasket:newBasket
            }

        default:
            return state
    }
}