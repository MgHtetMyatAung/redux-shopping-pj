import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavCart from '../components/FavCart';
import wishlist from '../assets/wishlist.gif';
import { useNavigate } from 'react-router-dom';

const FavPage = () => {
  const products= useSelector(state=>state.product.fav);
  const navigate= useNavigate();
  const dispatch= useDispatch();
  return (
    <div className='container pt-5'>
      {
        products.length>0? 
          <div className="row">
              {
                products.map(item=>(<FavCart key={item.id} item={item}/>))
              }
          </div>
        :
        <div className="mt-5 pt-5 text-center">
          <div className="mt-5 mb-3">
            <img src={wishlist} alt={wishlist} style={{height:"80px"}}/>
          </div>
          <h3 className='text-muted mb-3'>Your wishlist is empty</h3>
          <button className='btn btn-primary' onClick={()=> navigate('/')}>Go Shopping</button>
        </div>
      }
    </div>
  )
}

export default FavPage;