import React, { useState } from 'react';
import {BsFillCartFill} from 'react-icons/bs';
import {BiHeart,BiMenu,BiX} from 'react-icons/bi';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [toggle,setToggle]= useState(false);
  const navigate= useNavigate();
  const cartsList= useSelector(state=>state.cart.carts);
  const favLists= useSelector(state=>state.product.fav);
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm sticky-top top-0 d-print-none">
        <div className="container">
          <a className="navbar-brand fw-semibold" href="#" onClick={()=>navigate('/')}>MMS Shop</a>
          <button onClick={()=>setToggle(!toggle)} className='navbar-toggler btn border-0' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {
              toggle? <BiX size={25}/>:<BiMenu size={25}/>
            }
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item my-2 my-lg-0">
                <NavLink to={'/addtocartpage'}>
                    <button className='btn btn-sm btn-secondary d-flex align-items-center gap-2'><BsFillCartFill/> {cartsList.length}</button>
                </NavLink>
              </li>
              <li className="nav-item mb-3 mb-lg-0">
                <NavLink to={'/favpage'}>
                    <button className='btn btn-sm btn-secondary d-flex align-items-center gap-2'><BiHeart/> {favLists.length}</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar;