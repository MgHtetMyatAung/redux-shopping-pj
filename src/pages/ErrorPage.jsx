import React from 'react';
import { useNavigate } from 'react-router-dom';
import error from '../assets/error.gif';

const ErrorPage = () => {
    const navigate= useNavigate();
  return (
    <div className='container'>
        <div className='text-center mt-5 pt-5'>
            <img src={error} alt="" style={{height:"150px"}}/>
            <h4 className='text-danger'>Page is not found !</h4>
            <button className='btn btn-primary mt-3' onClick={()=>navigate('/')}>Go Shopping</button>
        </div>
    </div>
  )
}

export default ErrorPage;