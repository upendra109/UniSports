import React, {useEffect} from 'react';
import Products from './Products';
import './Home.css'
import {useSelector,useDispatch} from 'react-redux'
import {getProducts} from '../Actions/ProductAction'


const Home = () => {

  const dispatch = useDispatch()
  const {products} = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  return (
    <div className='home_container'>
              {products.map((product) => (
                
                <div>
                <Products  name={product.name} price = {product.price} rating={product.rating} image = {product.product_image} key={product._id} id={product._id}  />
                </div>
              ))}
    </div>
  );
};

export default Home;
