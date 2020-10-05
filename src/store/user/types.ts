export const types = {
    SET_USER_PROFILE: 'SET_USER_PROFILE',
}

export interface IUserState {
    me?: IUserProfile
}

interface IBasicUserProfile {
    username: string
    email: string
}

export interface IOrganizationProfile extends IBasicUserProfile {
    name: string
    userType: 'O'
}

export interface IStaffProfile extends IBasicUserProfile {
    firstName: string
    lastName: string
    organization: string
    userType: 'S'
}

export interface IStudentProfile extends IStaffProfile {}

export type IUserProfile = IOrganizationProfile | IStudentProfile | IStaffProfile

export interface ISetUserProfileAction {
    type: typeof types.SET_USER_PROFILE
    user: IUserProfile
}

export type UserActionTypes = ISetUserProfileAction
