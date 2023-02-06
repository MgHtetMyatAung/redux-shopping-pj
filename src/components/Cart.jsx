import React, { useEffect, useState } from 'react';
import {FaRegHeart,FaHeart,FaStar} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD_TO_CART } from '../services/cartSlice';
import { ADD_TO_FAV, REMOVE_FAV_CART } from '../services/productSlice';

const Cart = ({item}) => {
  const dispatch= useDispatch();
  const favProducts= useSelector(state=>state.product.fav);
  const [isFav,setIsFav]=useState(false);

  useEffect(()=>{
    if(favProducts.find(cart=>cart.id===item.id)){
      setIsFav(true);
    }else{
      setIsFav(false);
    }
  },[])

  const addToFav=()=>{
    setIsFav(!isFav);
    if(isFav){
      dispatch(REMOVE_FAV_CART(item));
    }else{
      dispatch(ADD_TO_FAV(item));
    }
  }
  return (
    <div className='col-12 col-md-6 col-lg-4 mb-3 cart-animate'>
        <div className='card relative shadow-sm'>
            <img src={item.image} alt="" className='mx-auto my-3' style={{height:"120px"}}/>
            <div className=' card-body'>
                <p className=' card-title fs-5 m-0'>{item.title.substring(0,15)} ...</p>
                <p className='text-primary fs-4 m-0'>$ {item.price}</p>
                <div className=' card-text d-flex align-items-center gap-2'>
                    <div className='d-flex align-items-center gap-1'>
                      <FaStar className='text-warning'/>
                      <FaStar className='text-warning'/>
                      <FaStar className='text-warning'/>
                    </div>
                    ( {item.rating.rate} )
                </div>
            </div>
            <button className='btn absolute heart border-secondary btn-sm' onClick={addToFav}>
              {
                isFav?<FaHeart className='text-secondary'/>
                : <FaRegHeart className='text-secondary'/>
              }
            </button>
            <div className='card-footer d-flex align-items-center justify-content-between py-3'>
              <button className='btn btn-primary' onClick={()=>dispatch(ADD_TO_CART(item))}>Add to cart</button>
              <Link to={`/detailpage/${item.id}`}>
                <button className='btn btn-secondary'>Detail</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Cart;