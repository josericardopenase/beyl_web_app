
import { createSlice } from '@reduxjs/toolkit'
import { callBegan, callFailed } from '../apiActions';
import reorder from '../Utils/reorder';

const rutineGroups = createSlice({
    name: 'group',
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




export const getGroupsOfDay = (id : number ) => callBegan({
    url : '/rutine_group/?day=' + id,
    onSuccess : 'group/setGroups',
    onError : callFailed.type,
    onBegin : 'group/groupRequest'
})

export const patchRutineGroup = (todo : any ) => callBegan({
    url : '/rutine_group/' + todo.id + "/",
    onSuccess : 'group/modifyGroup',
    method : 'patch',
    data : todo,
    onError : callFailed.type,
})

export const postRutineGroup = (group : any ) => callBegan({
    url : '/rutine_group/',
    onSuccess : 'group/addGroup',
    method : 'post',
    data : group,
    onError : callFailed.type,
})

export const deleteRutineGroup = (id : number ) => callBegan({
    url : '/rutine_group/' + id + "/",
    onSuccess : 'group/removeGroup',
    payload: {id : id},
    method : 'delete',
    onError : callFailed.type,
})

export const reorderGroup = (id : number, order : number ) => callBegan({
    url : '/rutine_group/' + id + "/",
    onBegin : 'group/reorderGroup',
    method : 'patch',
    data : {id : id, order : order},
    payload : {id : id, order : order},
    onError : callFailed.type,
})

export const name =  rutineGroups.name;
export default rutineGroups.reducer;