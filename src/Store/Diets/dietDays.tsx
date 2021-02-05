import { createSlice } from '@reduxjs/toolkit'

const dietDays = createSlice({
    name: 'day',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {}
})

export const name =  dietDays.name;
export default dietDays.reducer;
