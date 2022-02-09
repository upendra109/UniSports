import {LOGIN_SUCCESS,LOGOUT_SUCCESS, REGISTER_SUCCESS} from '../Constants/constant'
import axios from 'axios'


export const login = (email,password) => async(dispatch) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const {data} = await axios.post(
        'http://localhost:1234/user/login',
        {email,password},
        config
    )
    dispatch({type:LOGIN_SUCCESS,payload:data.user})
}

export const register = (name,email,password) => async(dispatch) => {
    const config = {headers: {'Content-Type': 'application/json'}};
    const {data} = await axios.post(
        `http://localhost:1234/user/register`,
        {name,email,password},
        config
    )
    dispatch({type:REGISTER_SUCCESS,payload:data.user})
}


export const logout = () => async(dispatch) => {
    const link = 'http://localhost:1234/user/logout'
    const {data} = await axios.get(link)
    dispatch({type:LOGOUT_SUCCESS,payload:data})
}
