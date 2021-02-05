
import {combineReducers} from 'redux'
import dietDay, {name as dietDayName} from './dietDays'
import dietFood, {name as dietFoodName} from './dietFoods'
import dietGroup, {name as dietGroupName} from './dietGroups'

export default combineReducers({
    [dietGroupName] : dietGroup,
    [dietFoodName] : dietFood,
    [dietDayName] : dietDay
})