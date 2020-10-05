import { createStore, combineReducers, Action } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import authReducer from './auth/reducer'
import { IApplicationState } from './types'
import userReducer from './user/reducer'

const appReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
})

const rootReducer = (state: IApplicationState | undefined, action: Action) => {
    if (action.type === 'LOGOUT') {
        state = undefined
    }

    return appReducer(state, action)
}

const store = createStore(rootReducer, composeWithDevTools())

export default store
