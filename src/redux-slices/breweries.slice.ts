import IBreweriesPayload from '@interfaces/IBreweriesPayload'
import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@store/store'
import axios from 'axios'

type InitialStateType = {
    breweries: []
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: InitialStateType = {
    breweries: [],
    status: 'idle',
    error: null,
}

export const breweriesSlice = createSlice({
    name: 'breweries',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchBreweries.pending, (state, _action) => {
                state.status = 'loading'
            })
            .addCase(fetchBreweries.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.breweries = action.payload
            })
            .addCase(fetchBreweries.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message as string
            })
    },
})

export default breweriesSlice.reducer

export const getBreweries = (state: RootState) => state.breweries.breweries

export const fetchBreweries = createAsyncThunk(
    'breweries/fetchBreweries:load',
    async (payload: IBreweriesPayload) => {
        const response = await axios.get(
            `https://api.openbrewerydb.org/breweries?by_city=${payload.city}&by_name=${payload.name}&per_page=${payload.perPage}&by_type=${payload.type}&sort=type,name:${payload.sort}`
        )
        return response.data
    }
)
