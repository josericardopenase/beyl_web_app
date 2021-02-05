import {createAction, createReducer, createSlice} from '@reduxjs/toolkit'


const dietGroups = createSlice({
    name: 'group',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        addDietGroup : (state : any, action : any) => { 
            state.list.push(action.payload)
            state.list = state.list.sort((a : any,b : any) => a.order - b.order)
        },
        removeDietGroup : (state, action) => {
             console.log(action.payload)
             state.list.splice(state.list.findIndex((DietGroup : any )=> action.payload.id === DietGroup.id), 1) 
        },
        patchDietGroup : (state : any, action : any) => {
            const index = state.list.findIndex((x : any) => action.payload.id === x.id);
            state.list[index] = action.payload;
            state.list = state.list.sort((a : any,b : any) => a.order - b.order)
        },
        DietGroupReceived : (state, action) => {
            state.loading = false;
            state.list = action.payload;
        },
        DietGroupRequest : (state, action) => {
            state.loading = true;
        }
    }
})

export const name =  dietGroups.name;
export const {addDietGroup, removeDietGroup, patchDietGroup} = dietGroups.actions;
export default dietGroups.reducer;
