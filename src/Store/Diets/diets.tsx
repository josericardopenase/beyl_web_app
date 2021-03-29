
import {combineReducers} from 'redux'
import dietDay, {name as dietDayName} from './dietDays'
import dietFood, {name as dietFoodName} from './dietFoods'
import dietGroup, {name as dietGroupName} from './dietGroups'
import diets, {name as dietName} from './diet'
import food, {name as foodName} from './food'

export default combineReducers({
    [dietGroupName] : dietGroup,
    [dietFoodName] : dietFood,
    [dietDayName] : dietDay,
    [dietName] : diets,
    [foodName] : food

})