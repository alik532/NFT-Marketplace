import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    status: 'idle',
    assets: [],
    error: null,
}

export const fetchAssets = createAsyncThunk('assets/fetchAssets', async (slug) => {

    const options = {
    method: 'GET',
    url: 'https://opensea13.p.rapidapi.com/assets',
    params: {
        collection_slug: slug,
        order_direction: 'desc',
        limit: '20',
        include_orders: 'false'
    },
    headers: {
        'X-RapidAPI-Key': '6e02f7ad70msh20f68a0ff65e3dfp1739e7jsnadef5bc0992e',
        'X-RapidAPI-Host': 'opensea13.p.rapidapi.com'
    }
    };

    return axios.request(options).then(function (response) {
        return response.data
    }).catch(function (error) {
        console.error(error);
    });
})


export const assetsSlice = createSlice({
    name: "assets",
    initialState, 
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAssets.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchAssets.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.assets = action.payload.assets
            })
            .addCase(fetchAssets.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})


export const selectAllAssets = (state) => state.assets.assets
export const selectAssetsError = (state) => state.assets.error
export const selectAssetsStatus = (state) => state.assets.status

export default assetsSlice.reducer