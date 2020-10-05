import { IUserState, UserActionTypes, types } from './types'

const initialState: IUserState = {
    me: undefined,
}

const userReducer = (state = initialState, action: UserActionTypes): IUserState => {
    switch (action.type) {
        case types.SET_USER_PROFILE:
            console.log(action.user)
            return {
                ...state,
                me: action.user,
            }

        default:
            return state
    }
}

export default userReducer
