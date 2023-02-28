import { configureStore } from "@reduxjs/toolkit";
import AssetsReducer from "../reducers/AssetsReducer";

const store = configureStore({
    reducer: {
        assets: AssetsReducer,
    }
})

export default store;