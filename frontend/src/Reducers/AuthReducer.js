import {LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS} from '../Constants/constant'


export const auth_reducer = (state = {user:{}, isAuth:false},action) => {
    switch(action.type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth : true,
                loading :false,
                user:action.payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading:false,
                isAuth:false,
                user:null,
                error:action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loading:false,
                isAuth:false,
                user:null
            }
        default:
            return state
    }
}