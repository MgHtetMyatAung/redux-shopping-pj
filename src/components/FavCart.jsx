import React from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_FAV_CART } from '../services/productSlice';
import {BsX,BsFillCartPlusFill} from 'react-icons/bs';
import { ADD_TO_CART } from '../services/cartSlice';


const FavCart = ({item}) => {
    const dispatch= useDispatch();
  return (
    <div className='col-12 col-md-6 col-lg-3 mb-3'>
        <div className='card relative shadow-sm'>
            <img src={item.image} alt="" className='mx-auto my-3' style={{height:"100px"}}/>
            <div className=' card-body'>
                <p className=' card-title fs-5'>{item.title.substring(0,20)} ...</p>
                <p className='text-primary fs-5 m-0'>$ {item.price}</p>
            </div>
            <button onClick={()=>dispatch(REMOVE_FAV_CART(item))} className='btn btn-sm heart'>
              <BsX size={25}/>
            </button>
            <div className='card-footer'>
              <button className='btn btn-primary d-inline-block btn-sm' onClick={()=>dispatch(ADD_TO_CART(item))}>
                <BsFillCartPlusFill size={20}/>
              </button>
            </div>
        </div>
    </div>
  )
}

export default FavCart;