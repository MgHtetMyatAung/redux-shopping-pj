import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Routes as Router,Route} from "react-router-dom";
import DetailPage from './pages/DetailPage';
import FavPage from "./pages/FavPage";
import AddToCartPage from './pages/AddToCartPage';
import SuccessPage from './pages/SuccessPage';
import ErrorPage from './pages/ErrorPage';
import InvoicePage from './pages/InvoicePage';

const App = () => {
  return (
    <>
      <Navbar/>
      <Router>
        <Route path='/' element={<Home/>}/>
        <Route path='/detailpage/:id' element={<DetailPage/>}/>
        <Route path='/favpage' element={<FavPage/>}/>
        <Route path='/addtocartpage' element={<AddToCartPage/>}/>
        <Route path='/successpage' element={<SuccessPage/>}/>
        <Route path='/invoicepage' element={<InvoicePage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Router>
    </>
  )
}

export default App;