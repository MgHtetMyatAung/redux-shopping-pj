import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { REMOVE_ALL_CART } from '../services/cartSlice';
import PriceList from '../assets/PriceList.gif';

const InvoicePage = () => {
    const carts= useSelector(state=>state.cart.changeCarts);
    const amount= carts.reduce((pv,cv)=>pv+cv.price,0);
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const toPurchase=()=>{
        dispatch(REMOVE_ALL_CART());
        navigate('/successpage');
    }
  return (
    <div className='container'>
        {
            carts.length > 0? 
            <div className="row mt-5 justify-content-center">
                <div className="col-12 col-lg-8">
                    <h4 className='text-center'>MMS Online Shoping</h4>
                    <h6 className='text-center text-muted mt-3 mb-4'>Thanks for shopping with us !</h6>
                    <div>
                        <table className="table border table-striped-columns">
                            <thead className="table-dark">
                                <tr>
                                    <th>No</th>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    carts.map((cart,index)=>(
                                        <tr key={cart.id}>
                                            <td>{index+1}</td>
                                            <td>{cart.title.substring(0,10)} ...</td>
                                            <td>{cart.quantity}</td>
                                            <td>{cart.price}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={3} className="text-center">Total Amount</td>
                                    <td>{amount.toFixed(2)} $</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="text-end d-print-none">
                        <button className='btn btn-secondary me-3' onClick={()=>window.print()}>Print Invoice</button>
                        <button className='btn btn-primary' onClick={toPurchase}>Purchase</button>
                    </div>
                </div>
            </div> :
            <div className="text-center mt-5 pt-5">
                <img src={PriceList} alt="" style={{height:"200px"}}/>
                <h4 className='text-muted mt-3'>Your invoice is empty !</h4>
                <button className='btn btn-primary mt-3'>Go Shopping</button>
            </div>
        }
    </div>
  )
}

export default InvoicePage;