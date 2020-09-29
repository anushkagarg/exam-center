import api from './index'

const urls = {
    login: 'login/',
}

interface ILoginRequestBody {
    username: string
    password: string
}

export const loginUserApi = async (body: ILoginRequestBody) => {
    const res = await api().post(urls.login, body)
    return res.data
}
