import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getData } from '../ApiData/api';
import { ADD_CATEGORIES, ADD_DETAIL, ADD_TO_CART } from '../services/cartSlice';
import { FaStar,FaRegHeart, FaHeart } from 'react-icons/fa';
import {BsFillCartPlusFill} from 'react-icons/bs';
import { ADD_TO_FAV, REMOVE_FAV_CART } from '../services/productSlice';
import Loading from '../assets/Loading.gif';

const DetailPage = () => {
  const {id}=useParams();
  const [loading,setLoading]= useState(true);
  const [cartId,setCartId]= useState(id);
  const [isFav,setIsFav]=useState(false);
  const dispatch= useDispatch();
  const cart= useSelector(state=>state.cart.detail);
  const categories= useSelector(state=>state.cart.categories);
  const products= useSelector(state=>state.product.products);
  const favProducts= useSelector(state=>state.product.fav);
  const url=`products/${cartId}`;
  const type=`products/category/${cart.category}`;
  const getDetailCart= async(url,type)=>{
    const data= await getData(url);
    const data2= await getData(type);
    dispatch(ADD_DETAIL(data));
    dispatch(ADD_CATEGORIES(data2));
    // setLoading(false);
  }
  useEffect(()=>{
    getDetailCart(url,type);
    if(favProducts.find(c=>c.id===cart.id)){
      setIsFav(true);
    }else{
      setIsFav(false);
    }

    setTimeout(()=>{
      setLoading(false);
    },5000)
  },[cart]);

  const addToFav=()=>{
    setIsFav(!isFav);
    if(isFav){
      dispatch(REMOVE_FAV_CART(cart));
    }else{
      dispatch(ADD_TO_FAV(cart));
    }
  }

  return (
    <>
      {
        loading?
        (<div className="mt-5 pt-5 text-center">
          <div className="mt-5">
            <img src={Loading} alt={Loading} style={{height:"150px"}}/>
          </div>
        </div>)
        : 
        (<div className='container'>
          <div className="row py-5">
            <div className="col-12 col-md-3">
              <div className="text-center mb-4 mb-md-0">
                <img src={cart?.image} alt="" className='' style={{height:'150px'}}/>
              </div>
            </div>
            <div className="col-12 col-md-9">
              <div className="">
                <h4>Title : {cart?.title?.substring(0,20)} ...</h4>
                <h5>Type : {cart?.category}</h5>
                <div className="d-flex gap-2">
                  <div className='d-flex gap-1 mt-1'>
                          <FaStar className='text-warning'/>
                          <FaStar className='text-warning'/>
                          <FaStar className='text-warning'/>
                  </div>
                  <p className='mb-2'>( {cart?.rating?.rate} )</p>
                </div>
                <p className='fs-4'>$ {cart?.price}</p>
              </div>
            </div>
            <div className="mt-3">
                <h5>Description -</h5>
                <p className='fs-6'>{cart?.description}</p>
                <div className="d-flex gap-2">
                  <button className='btn btn-primary px-3 py-2' onClick={()=>dispatch(ADD_TO_CART(cart))}>
                    <BsFillCartPlusFill size={20}/>
                  </button>
                  <button className='btn border border-secondary px-3 py-2' onClick={addToFav}>
                        {
                          isFav?<FaHeart className='text-secondary'/>
                          : <FaRegHeart className='text-secondary'/>
                        }
                  </button>
                </div>
            </div>
          </div>
          <div className=" row mx-auto mb-5 gap-4 justify-content-center justify-content-md-start">
            <h5 className='text-muted'>You may also like</h5>
            {
              categories?.filter(c=>c.id!==cart.id).map(c=> <div key={c.id} className="col-5 col-md-3 col-lg-2 shadow-sm border px-2 py-4">
                <div className='w-100 text-center'>
                    <img src={c.image} alt=""  className='d-image'/>
                </div>
              </div>)
            }
          </div>
        </div>)
      }
    </>
  )
}

export default DetailPage;