import { IUserProfile } from '../store/user/types'

export const getUserName = (user: IUserProfile) => {
    if (user.userType === 'O') {
        return user.name
    }
    return user.firstName
}
