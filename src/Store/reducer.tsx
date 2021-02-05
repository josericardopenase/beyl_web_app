import {combineReducers} from 'redux'
import articles, {name as articlesName} from './articles'
import notifications, {name as notificationsName} from './notifications'
import athletes, {name as athletesName} from './athleltes'
import trainings from './trainings'

export default combineReducers({
    [articlesName] : articles,
    [notificationsName] : notifications,
    [athletesName] : athletes,
    'training' : trainings
})
