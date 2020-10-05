import { IAuthState } from './auth/types'
import { IUserState } from './user/types'

export interface IApplicationState {
    auth: IAuthState
    user: IUserState
}
