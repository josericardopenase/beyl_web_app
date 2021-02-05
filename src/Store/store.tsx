import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import reducer from './reducer'
import api from  './middleware/api'
import error from  './middleware/error'
import logger from  './middleware/logger'


export const store = configureStore({
    reducer,
    middleware: [api, error, ...getDefaultMiddleware()]
})