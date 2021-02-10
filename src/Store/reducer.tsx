import {combineReducers} from 'redux'
import articles, {name as articlesName} from './articles'
import notifications, {name as notificationsName} from './notifications'
import athletes, {name as athletesName} from './athleltes'
import weightHistory, {name as weightHistoryName} from './weightHistory'
import generalHistory, {name as generalHistoryName} from './generalHistory'
import trainerCode, {name as trainerCodeName} from './trainerCode'
import authentication, {name as AuthName} from './authentication'
import trainings from './trainings'

export default combineReducers({
    [articlesName] : articles,
    [notificationsName] : notifications,
    [athletesName] : athletes,
    [weightHistoryName] : weightHistory,
    [generalHistoryName] : generalHistory,
    [trainerCodeName] : trainerCode,
    [AuthName] : authentication,
    'training' : trainings,

})
