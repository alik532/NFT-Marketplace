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
    params: {offset: '0', limit: '300'},
    headers: {
        'X-RapidAPI-Key': '6e02f7ad70msh20f68a0ff65e3dfp1739e7jsnadef5bc0992e',
        'X-RapidAPI-Host': 'opensea13.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data
    }).catch(function (error) {
        console.error(error);
    });
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
                console.log(action.payload)
                state.collections = action.payload
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