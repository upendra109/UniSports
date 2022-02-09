import React, {useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './Login.css'
import { login, register} from '../Actions/AuthAction';
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

const Login = () => {
    const history = useHistory()    
    const location = useLocation()
    const {value} = location.state

    const dispatch = useDispatch()
    const {isAuth,user} = useSelector(state => state.auth)

    
    const [email, setemail] = useState("");
    const [password,setpassword] = useState("");
    const [name,setname] = useState("")


    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email,password))
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        dispatch(register(name,email,password))
    }

    const [mode, setmode] = useState(value);

    const change = () =>{
        setmode(!mode)
        console.log(mode)
    }

    if(isAuth) {
        history.push('/')
    }

  return (
      <>
    <div className={mode ? 'container mode' : 'container'}>
        <div className="forms-container">

            <div className="sign-in">
                <form className='sign-in-form'>
                    <h2 className='title'>Sign In</h2>
                    <div className='input-field'>
                    <i className="fas fa-envelope"></i>
                        <input  onChange={(e)=> setemail(e.target.value)} type="text" className='email' placeholder='Email' />
                    </div>
                    <div className='input-field'>
                        <i className='fas fa-lock'></i>
                        <input onChange={(e)=> setpassword(e.target.value)} type="password" className='password' placeholder='Password' />
                    </div>
                    <input type="button" className='btn solid' value='Login' onClick={loginSubmit} />
                    <p className="social-text">Or sign in with Social platforms</p>
                     <div className="social-media">
                        <a href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </form>
            </div>


            <div className="sign-up">
                <form action="#" className='sign-up-form'>
                    <h2 className='title'>Sign up</h2>
                    <div className='input-field'>
                        <i className='fas fa-user'></i>
                        <input onChange={(e)=> setname(e.target.value)} type="text" className='username' placeholder='Username' />
                    </div>
                    <div className='input-field'>
                    <i className="fas fa-envelope"></i>
                        <input onChange={(e)=> setemail(e.target.value)} type="text" className='email' placeholder='Email' />
                    </div>
                    <div className='input-field'>
                        <i className='fas fa-lock'></i>
                        <input onChange={(e)=> setpassword(e.target.value)} type="password" className='password' placeholder='Password' />
                    </div>
                    <input type="button" className='btn solid' value='Register' onClick={registerSubmit} />
                    <p className="social-text">Or sign up with Social platforms</p>
                     <div className="social-media">
                        <a href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </form>
            </div>

        </div>
        <div className='toggle-button-login'>
                <button className={mode ? 'loginn mode':'loginn'} onClick={change} >Sign In</button>
        </div>
        <div className='toggle-button-register'>
                <button className={mode? 'register':'register mode'} onClick={change}>Sign Up</button>
        </div>

    </div>
    </>
  );
};

export default Login;
