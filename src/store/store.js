import { configureStore } from "@reduxjs/toolkit";
import CollectionsReducer from "../reducers/CollectionsReducer";

const store = configureStore({
    reducer: {
        collections: CollectionsReducer,
    }
})

export default store;