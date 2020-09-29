import { IAuthState, AuthActionTypes, LOGIN, LOGOUT } from './types'

const initialState: IAuthState = {
    isLoggedIn: false,
}

const authReducer = (state = initialState, action: AuthActionTypes): IAuthState => {
    switch (action.type) {
        case LOGIN:
            return action.payload
        case LOGOUT:
            return initialState
        default:
            return state
    }
}

export default authReducer
