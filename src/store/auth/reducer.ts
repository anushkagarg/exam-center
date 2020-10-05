import { IAuthState, AuthActionTypes, LOGIN } from './types'

const initialState: IAuthState = {
    isLoggedIn: false,
}

const authReducer = (state = initialState, action: AuthActionTypes): IAuthState => {
    switch (action.type) {
        case LOGIN:
            return action.payload
        default:
            return state
    }
}

export default authReducer
