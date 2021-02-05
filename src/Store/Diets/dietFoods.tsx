import { createSlice } from '@reduxjs/toolkit'

const dietFoods = createSlice({
    name: 'food',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {}
})

export const name =  dietFoods.name;
export default dietFoods.reducer;