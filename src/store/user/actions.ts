import { ISetUserProfileAction, IUserProfile, types } from './types'

export const setUserProfile = (user: IUserProfile): ISetUserProfileAction => ({
    type: types.SET_USER_PROFILE,
    user,
})
