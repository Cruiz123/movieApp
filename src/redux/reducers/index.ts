import { combineReducers } from 'redux'

import favorite from './favorite'
import movies from './movies'

const reducers = combineReducers({
    favorite,
    movies,
})

export default reducers
