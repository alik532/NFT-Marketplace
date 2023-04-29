import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../reducers/currentUserReducer";

const store = configureStore({
    reducer: {
        user: currentUserReducer,
    }
})

export default store;