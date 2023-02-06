import React, { useEffect, useState } from 'react';
import {BiPlus, BiMinus} from 'react-icons/bi';
import {BsFillTrashFill} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CART_QTY, REMOVE_CART } from '../services/cartSlice';

const PriceListCart = ({item,plusTotal,minusTotal}) => {
    const dispatch= useDispatch();
    const changeCarts= useSelector(state=>state.cart.changeCarts);
    const data= changeCarts.filter(cart=>cart.id===item.id);
    const [qty,setQty]= useState(data[0].quantity);

    const addQty=()=>{
        setQty(qty+1);
        plusTotal(item.price);
        dispatch(ADD_CART_QTY({...item,price:item.price*(data[0].quantity+1),quantity:qty+1}))
    }
    const minusQty=()=>{
        if(qty>1){
            setQty(prev=>prev-1);
            minusTotal(item.price);
            dispatch(ADD_CART_QTY({...item,price:item.price*(data[0].quantity-1),quantity:qty-1}))

        }
    }

    const removeCart=()=>{
        minusTotal(item.price*qty);
        dispatch(REMOVE_CART(item));
    }

  return (
    <div className='row shadow-sm mt-3 py-3 px-2 border rounded priceCart'>
        <div className="col-12 col-lg-4 text-start">
            <div className="w-100 h-100 text-center">
                <img src={item.image} alt="" className='mx-auto mb-3 mb-md-0' style={{height:'100px'}}/>
            </div>
        </div>
        <div className="col-12 col-lg-5 text-start">
            <div className="w-100 h-100">
                <h5 className='mt-1'>{item.title.substring(0,20)} ...</h5>
                <p className='mb-2'>Type - {item.category}</p>
                <div className="">
                    <span>Rating - ( {item.rating.rate} )</span>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <button className='btn btn-danger heart btn-sm' onClick={removeCart}>
                        <BsFillTrashFill/>
                    </button>
                </div>
            </div>
        </div>
        <div className="col-12 col-lg-3 text-start">
            <div className="">
                <p className='text-muted mb-1'>Price</p>
                <p className='fs-5 mb-2'>$ {data[0]?.price?.toFixed(2)}</p>
                <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary" onClick={minusQty}>
                        <BiMinus/>
                    </button>
                    <button className="btn border-secondary" style={{width:'60px'}}>{data[0]?.quantity}</button>
                    <button type="button" className="btn btn-secondary" onClick={addQty}>
                        <BiPlus/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PriceListCart;