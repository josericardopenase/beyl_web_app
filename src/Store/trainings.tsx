
import {combineReducers} from 'redux'
import rutines from './Rutines/rutines'
import diets from './Diets/diets'

export default combineReducers({
    "diet" : diets,
    "rutine" : rutines,
})