
import { createSlice } from '@reduxjs/toolkit'
import { callBegan, callFailed } from '../apiActions';
import reorder from '../Utils/reorder';

const rutineGroups = createSlice({
    name: 'DietGroup',
    initialState: {
        list: [],
        loading: true,
        lastFetch: null
    },
    reducers: {

        setGroups : (state : any, action : any) => {
            state.loading = false;
            state.list = action.payload
        },
        groupRequest : (state : any, action : any) => {
            state.loading = true;
        },
        modifyGroup : (state : any, action : any) => {
            const index = state.list.findIndex((group : any) => action.payload.id === group.id);
            state.list[index] = action.payload;
            //state.list = state.list.sort((a : any ,b : any) => a.order - b.order)
        },
        addGroup: (state : any, action : any) => {
            state.list.push(action.payload)
        },
        removeGroup : (state : any, action : any) => {

            state.list.splice(state.list.findIndex((group : any) => action.payload.id === group.id), 1) 

        }, 
        reorderGroup: (state : any, action : any) => {

            state.list = reorder(state, action)
        }
    }
})




export const getDietGroupsOfDay = (id : number ) => callBegan({
    url : '/diet_group/?day=' + id ,
    onSuccess : 'DietGroup/setGroups',
    onError : callFailed.type,
    onBegin : 'group/groupRequest'
})

export const patchDietGroup = (todo : any ) => callBegan({
    url : '/diet_group/' + todo.id + "/",
    onSuccess : 'DietGroup/modifyGroup',
    method : 'patch',
    data : todo,
    onError : callFailed.type,
})

export const postDietGroup = (group : any ) => callBegan({
    url : '/diet_group/',
    onSuccess : 'DietGroup/addGroup',
    method : 'post',
    data : group,
    onError : callFailed.type,
})

export const deleteDietGroup = (id : number ) => callBegan({
    url : '/diet_group/' + id + "/",
    onSuccess : 'DietGroup/removeGroup',
    payload: {id : id},
    method : 'delete',
    onError : callFailed.type,
})

export const reorderDietGroup = (id : number, order : number ) => callBegan({
    url : '/diet_group/' + id + "/",
    onBegin : 'DietGroup/reorderGroup',
    method : 'patch',
    data : {id : id, order : order},
    payload : {id : id, order : order},
    onError : callFailed.type,
})

export const name =  rutineGroups.name;
export default rutineGroups.reducer;
