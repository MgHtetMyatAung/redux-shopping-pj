import { createSlice } from "@reduxjs/toolkit";


export const productSlice= createSlice({
    name:'product',
    initialState:{
        products:[],
        fav:[]
    },
    reducers:{
        ADD_PRODUCTS:(state,action)=>{
            state.products=action.payload;
        },
        ADD_TO_FAV:(state,action)=>{
            const data=action.payload;
            state.fav.find(item=>item.id===data.id)?state.fav = state.fav : state.fav.push(action.payload);
        },
        REMOVE_FAV_CART:(state,action)=>{
            state.fav= state.fav.filter(item=>item.id!==action.payload.id);
        },
    }
})

export const {ADD_PRODUCTS,ADD_TO_FAV,REMOVE_FAV_CART}= productSlice.actions;
export default productSlice.reducer;