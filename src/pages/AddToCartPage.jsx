import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PriceListCart from '../components/PriceListCart';
import { REMOVE_ALL_CART } from '../services/cartSlice';
import shopping from '../assets/shopping.gif';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddToCartPage = () => {
  const [total,setTotal]=useState(0);
  const navigate= useNavigate();
  const cartLists=useSelector(state=>state.cart.carts);
  const changeCarts= useSelector(state=> state.cart.changeCarts);
  const dispatch= useDispatch();
  useEffect(()=>{
    setTotal(changeCarts.reduce((pv,cv)=>pv+cv.price,0));
  },[]);

  const plusTotal=(price)=>{
    setTotal(total+price);
  }

  const minusTotal=(price)=>{
    setTotal(total-price);
  }

  const toShowInvoice=()=>{
    navigate('/invoicepage');
  }

  const removeAllCarts=()=>{
    Swal.fire({
      title: 'Are you sure to delete all carts?',
      text: "You won't be able to restore this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        setTotal(0);
        dispatch(REMOVE_ALL_CART());
      }
    })
  }

  return (
    <div className='container'>
      {
        cartLists.length>0? 
          <div className="row my-5 justify-content-center justify-content-lg-start">
            <div className="col-11 col-lg-9">
              {
                cartLists.map(item=>(<PriceListCart key={item.id} item={item} plusTotal={plusTotal} minusTotal={minusTotal}/>))
              }
            </div>
            <div className="col-11 col-lg-3">
              <div className="w-100 mt-3 ps-3 shadow p-3 text-end">
                <p>Total Price</p>
                <hr />
                <p className='fs-3'>$ {total.toFixed(2)}</p>
                <button className='btn btn-danger me-2' onClick={removeAllCarts}>Remove All</button>
                <button className='btn btn-secondary' onClick={toShowInvoice}>Invoice</button>
              </div>
            </div>
          </div>
        : 
        <div className="mt-5 pt-5 text-center">
          <div className="mt-5">
            <img src={shopping} alt="" style={{height:"100px"}}/>
          </div>
          <h3 className='text-muted mb-3'>Your carts is empty</h3>
          <button className='btn btn-primary' onClick={()=> navigate('/')}>Go Shopping</button>
        </div>
      }
    </div>
  )
}

export default AddToCartPage;