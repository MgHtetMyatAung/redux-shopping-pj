import React from 'react';
import { useNavigate } from 'react-router-dom';
import success from '../assets/success.gif';

const SuccessPage = () => {
    const navigate= useNavigate();
  return (
    <div className='container'>
        <div className="text-center mt-5 pt-5">
            <img src={success} alt="" style={{height:"200px"}}/>
            <h4 className='text-success'>Your purchase is success !</h4>
            <button className='btn btn-primary mt-3' onClick={()=>navigate('/')}>Go Shopping</button>
        </div>
    </div>
  )
}

export default SuccessPage;