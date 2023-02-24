import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    status: 'idle',
    collections: [],
    error: null,
}

export const fetchCollections = createAsyncThunk('collections/fetchCollections', async () => {
    const options = {
        method: 'GET',
        url: 'https://opensea13.p.rapidapi.com/collections',
        params: {offset: '0', limit: '30'},
        headers: {
            'X-RapidAPI-Key': '6e02f7ad70msh20f68a0ff65e3dfp1739e7jsnadef5bc0992e',
            'X-RapidAPI-Host': 'opensea13.p.rapidapi.com',
            'Access-Control-Allow-Origin': "*",
        }
    };
    const response = await axios.request(options)
    console.log(response)
    return response.data
})

export const collectionsSlice = createSlice({
    name: "collections",
    initialState, 
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCollections.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCollections.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.collections = action.payload.collections
            })
            .addCase(fetchCollections.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const selectAllCollections = (state) => state.collections.collections
export const selectCollectionsError = (state) => state.collections.error
export const selectCollectionsStatus = (state) => state.collections.status

export default collectionsSlice.reducer