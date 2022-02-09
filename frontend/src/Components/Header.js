import React, {useState} from 'react';
import './Header.css'
import {Link} from 'react-router-dom'

import { logout } from '../Actions/AuthAction';
import {useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

const Header = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {isAuth} = useSelector((state) => state.auth)
    const {basket} = useSelector((state) => state.basket)
    const {tbasket} = useSelector((state) => state.tbasket)

    const [val,setval] = useState(true)

    const logoutSubmit = (e) => {
        e.preventDefault()
        dispatch(logout())
        history.push('/')
    }

  return (
      
    <div className='header'>
        <div className="header_container">
        <div className='left'>
        <Link to='/'  style={{  color: 'inherit', textDecoration: 'inherit' }}><div>UniSports</div></Link>
            
        </div>
        
            <div className="panel">
                <Link to='/' onClick={() => setval(true)}  style={{  color: 'inherit', textDecoration: 'inherit' }}><span>Products</span></Link>
                <Link to='/tickets' onClick={() => setval(false)}  style={{  color: 'inherit', textDecoration: 'inherit' }}><span>Tickets</span></Link>
                <Link to='/news'  style={{  color: 'inherit', textDecoration: 'inherit' }}><span>News</span></Link>
            </div>

        <div className='auth'>

            {
                isAuth ? 
                <Link  style={{  color: 'inherit', textDecoration: 'inherit' }} to={{pathname:'/auth',state:{value:true}}}>
                <span className='logout'onClick={logoutSubmit}  >Logout</span>
                </Link> :   <div>
                <Link  style={{  color: 'inherit', textDecoration: 'inherit' }} to={{pathname:'/auth',state:{value:true}}}>
                <span className='login'>Login</span>
                </Link>
                <Link style={{  color: 'inherit', textDecoration: 'inherit' }} to={{pathname:'/auth',state:{value:false}}}>
                <button className='registerr'>Register</button>
                </Link>
                </div>


            }
        </div>

        <div className="basket">

            {val ? <div>
                <Link to='/checkout' style={{  color: 'inherit', textDecoration: 'inherit' }}>
            <i  className="fas fa-shopping-cart"></i>
               </Link>
            <span>{basket.length}</span>
            </div>: 
                <div>
                <Link to='/ticketCheckout' style={{  color: 'inherit', textDecoration: 'inherit' }}>
            <i className="fas fa-ticket-alt"></i>
               </Link>
            <span>{tbasket.length}</span>
            </div> }

        </div>

        </div>
    </div>
  );
};

export default Header;
