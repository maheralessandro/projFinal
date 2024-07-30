
import {createSlice} from "@reduxjs/toolkit";


const initialState ={

    items:[] ,
    cart :[]
}


const cartSlice = createSlice({
    name:"cart",
    initialState ,
    reducers:{
        addToCart:(state,action)=>{
            let exist = state.cart.findIndex((item)=> item._id === action.payload._id);

            if(exist >= 0 ){
                state.cart[exist].count += 1 ;
                state.cart[exist].quantity -= 1;
            }else{
                state.cart.push(action.payload)
            }
        
        },
        increase:(state,action)=>{
            state.cart.map((item)=>{
                if(item._id === action.payload._id ){
                    item.count+=1
                    item.quantity -=1
                }else {
                    return item
                }
            })
        },
        decreese:(state,action)=>{
            state.cart.map((item)=>{
                if(item._id === action.payload._id ){
                    item.count -=1
                }else{
                    return item
                }
            })
        }

    }

})

export const {addToCart, increase , decreese} = cartSlice.actions ;

export default cartSlice.reducer ;