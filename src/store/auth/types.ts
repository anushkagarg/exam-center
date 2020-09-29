export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export interface IAuthState {
    isLoggedIn: boolean
    username?: string
    token?: string
    tokenExpires?: Date
}

export interface ILogInAction {
    type: typeof LOGIN
    payload: IAuthState
}

export interface ILogOutAction {
    type: typeof LOGOUT
}

export type AuthActionTypes = ILogInAction | ILogOutAction
