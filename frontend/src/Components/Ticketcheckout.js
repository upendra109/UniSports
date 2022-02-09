import React from 'react';
import './TicketCheckout.css'
import TotalPrice from './TotalPrice';
import CheckoutTicket from './CheckoutTicket'
import {useSelector} from 'react-redux'


const Checkout = () => {
    const {tbasket} = useSelector((state) => state.tbasket)
  return (
 <div>
        <div className="checkout">
            <div className="checkout_left">
                <img className='checkout_ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout ad" />
                <div className='title'>Preview Your Tickets</div>
                <div className="productss">
                {tbasket.map((basket_item) => (
                <div>
                <CheckoutTicket date={basket_item.Date} price = {basket_item.price} rating={basket_item.SeatNumber} left_image = {basket_item.left_image} right_image={basket_item.right_image} id={basket_item.id}  />
                </div>
                ))}
                </div>
            </div>
            <div className="checkout_right">
                <TotalPrice />
            </div>
        </div>
    </div>
  );
};

export default Checkout;
