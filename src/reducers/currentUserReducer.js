import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ref, get, child } from "firebase/database";
import { database } from "../firebase-config";

const initialState = {
    status: "idle",
    user: null,
    error: null,
}

export const currentUserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addAssetToCart: (state, action) => {
            state.user.cart[action.payload.id] = action.payload
        }
    },
    extraReducers(builder) {
        builder 
            .addCase(fetchCurrenUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCurrenUser.fulfilled, (state, action) => {
                state.status = "successful"
                state.user = action.payload
            })
            .addCase(fetchCurrenUser.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.error.message
            })

    }
})

export const fetchCurrenUser = createAsyncThunk('currentUser/fetchCurrentUser',  async (id) => {
    return get(child(ref(database), `users/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log('returning user data')
          console.log(snapshot.val())
          return snapshot.val()
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
})

export const { addAssetToCart } = currentUserSlice.actions
export const selectCurrentUser = (state) => state.user.user
export const selectCartStatus = (state) => state.user.status
export const selectCartError = (state) => state.user.error

export default currentUserSlice.reducer
