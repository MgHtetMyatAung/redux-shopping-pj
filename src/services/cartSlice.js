import { createSlice } from "@reduxjs/toolkit";

export const cartSlice= createSlice({
    name:"cart",
    initialState:{
        carts:[],
        detail:{},
        categories:[],
        changeCarts:[]
    },
    reducers:{
        ADD_TO_CART:(state,action)=>{
            const item= action.payload;
            state.carts.find(cart=>cart.id===item.id)? state.carts=state.carts : state.carts.push({...action.payload,quantity:1});
            state.changeCarts.find(cart=>cart.id===item.id)? state.changeCarts= state.changeCarts: state.changeCarts.push({...action.payload,quantity:1});
        },
        REMOVE_CART:(state,action)=>{
            state.carts= state.carts.filter(cart=>cart.id!==action.payload.id);
            state.changeCarts= state.changeCarts.filter(cart=>cart.id!==action.payload.id);
        },
        REMOVE_ALL_CART:(state)=>{
            state.carts=[];
            state.changeCarts=[];
        },
        ADD_DETAIL:(state,action)=>{
            state.detail= action.payload;
        },
        ADD_CATEGORIES:(state,action)=>{
            state.categories= action.payload;
        },
        ADD_CART_QTY:(state,action)=>{
            state.changeCarts = state.changeCarts.map(cart=>cart.id===action.payload.id?{...action.payload}:cart);
            console.log(action.payload);
        },
        REMOVE_CART_QTY:(state,action)=>{
           state.changeCarts =state.changeCarts.map(cart=>cart.id===action.payload.id?{...action.payload}:cart)
        },
    }
})

export const {ADD_TO_CART,REMOVE_CART,REMOVE_ALL_CART,ADD_DETAIL,ADD_CATEGORIES,ADD_CART_QTY,REMOVE_CART_QTY}= cartSlice.actions;
export default cartSlice.reducer;