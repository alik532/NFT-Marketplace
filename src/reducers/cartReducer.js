import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ref, get, child } from "firebase/database";
import { database } from "../firebase-config";

const initialState = {
    status: "idle",
    cart: null,
    error: null,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addAssetToCart: (state, action) => {
            state.cart[action.payload.id] = action.payload
        }
    },
    extraReducers(builder) {
        builder 
            .addCase(fetchUserCart.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUserCart.fulfilled, (state, action) => {
                state.status = "successful"
                state.cart = action.payload
            })
            .addCase(fetchUserCart.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.error.message
            })

    }
})

export const fetchUserCart = createAsyncThunk('cart/fetchCart',  async (id) => {
    return get(child(ref(database), `users/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log('returning user data')
          console.log(snapshot.val().cart)
          return snapshot.val().cart
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
})

export const { getUsersCartData, addAssetToCart } = cartSlice.actions
export const selectCart = (state) => state.cart.cart
export const selectCartStatus = (state) => state.cart.status
export const selectCartError = (state) => state.cart.error

export default cartSlice.reducer
