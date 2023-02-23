import { createReducer } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    status: 'idle',
    collections: [],
    error: null,
}

export const fetchCollections = createAsyncThunk('collections/fetchCollections', async () => {

})