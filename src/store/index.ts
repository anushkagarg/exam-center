import { createStore, combineReducers } from 'redux'
import authReducer from './auth/reducer'

const reducer = combineReducers({
    auth: authReducer,
})

const store = createStore(reducer)

export default store
