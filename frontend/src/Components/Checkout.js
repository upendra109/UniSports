import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css'
import TotalPrice from './TotalPrice';
import {useSelector} from 'react-redux'

const Checkout = () => {
    const {basket} = useSelector((state) => state.basket)
  return (
 <div>
        <div className="checkout">
            <div className="checkout_left">
                <img className='checkout_ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout ad" />
                <div className='title'>Here is your Shopping Basket</div>
                <div className="products">
                {basket.map((basket_item) => (
                <div>
                <CheckoutProduct  name={basket_item.name} price = {basket_item.price} rating={basket_item.rating} image = {basket_item.image} id={basket_item.id}  />
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
