import api from './index'

const urls = {
    login: 'login/',
    createOrganization: 'create-organization',
}

interface ILoginRequestBody {
    username: string
    password: string
}

interface ICreateOrganizationRequestBody extends ILoginRequestBody {
    email: string
}

export const loginUserApi = async (body: ILoginRequestBody) => {
    const res = await api().post(urls.login, body)
    return res.data
}

export const createOrganizationApi = async (body: ICreateOrganizationRequestBody) => {
    const res = await api().post(urls.createOrganization, body)
    return res.data
}
