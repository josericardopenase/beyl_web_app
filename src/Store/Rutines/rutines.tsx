import {combineReducers} from 'redux'
import rutineDay, {name as rutineDayName} from './rutineDays'
import rutineExcersise, {name as rutineExcersiseName} from './rutineExcersise'
import rutineGroup, {name as rutineGroupName} from './rutineGroups'
import rutine, {name as rutineName} from './rutine'

export default combineReducers({
    [rutineName] : rutine,
    [rutineGroupName] : rutineGroup,
    [rutineExcersiseName] : rutineExcersise,
    [rutineDayName] : rutineDay,
})