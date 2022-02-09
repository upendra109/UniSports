import React from 'react';
import './Products.css'
import { add_basket } from '../Actions/BasketAction';
import {useDispatch} from 'react-redux'

const Products = ({name,price,rating,image,id}) => {

  const dispatch = useDispatch()

  const add_product = () => {
      dispatch(add_basket(id,price,name,rating,image))
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
    <button onClick={add_product}>Add to Basket</button>
</div>
  );
};

export default Products;
