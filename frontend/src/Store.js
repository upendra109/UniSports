import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { product_reducer } from './Reducers/ProductReducer'
import {ticket_reducer} from './Reducers/TicketReducer'
import { news_reducer } from './Reducers/Newsreducer'
import { auth_reducer } from './Reducers/AuthReducer'
import { basket_reducer } from './Reducers/BasketReducer'
import { tbasket_reducer } from './Reducers/TbasketReducer'

const reducer = combineReducers({
    products:product_reducer,
    tickets:ticket_reducer,
    news:news_reducer,
    auth:auth_reducer,
    basket:basket_reducer,
    tbasket:tbasket_reducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store