import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getData} from '../ApiData/api';
import Cart from '../components/Cart';
import { ADD_PRODUCTS } from '../services/productSlice';
import Loading from '../assets/Loading.gif';

const Home = () => {
    const url="products";
    const products=useSelector(state=>state.product.products)
    const dispatch= useDispatch();
    const getProducts= async(url)=>{
        const data= await getData(url);
        dispatch(ADD_PRODUCTS(data));
    }

    useEffect(()=>{
        getProducts(url);
    },[])
  return (
    <div className='container'>
        {
            products.length>10?
                <div className="row my-3">
                    {
                        products?.map(item=>(<Cart key={item.id} item={item}/>))
                    }
                </div>
            :
            (<div className="mt-5 pt-5 text-center">
                <div className="mt-5">
                    <img src={Loading} alt={Loading} style={{height:"150px"}}/>
                </div>
            </div>)
        }
    </div>
  )
}

export default Home;