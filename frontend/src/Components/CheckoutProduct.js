import React from 'react';
import './CheckoutProduct.css'
import { remove_basket } from '../Actions/BasketAction';

import {useDispatch} from 'react-redux'


const CheckoutProduct = ({name,price,rating,image,id}) => {


  const dispatch = useDispatch()

  const remove_product = () => {

      dispatch(remove_basket(id))
  }

  return (
    <div className='product_container'>
    <div className="product_info">
    <p>{name}</p>
    <p className="price">
        <small>$</small>
        <strong>{price}</strong>
    </p>
    <p className="rating">  
    {Array(rating).fill().map(() => (
            <p>⭐</p>
        ))}
    </p>
    </div>
    <img src={image} alt="product_image" />
    <button onClick={remove_product}>Remove From Basket</button>
</div>
  );
};

export default CheckoutProduct;
