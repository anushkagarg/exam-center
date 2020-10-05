import api from './index'

const urls = {
    getProfile: (username: string) => `accounts/${username}`,
}

export const getUser = async (username = 'me') => {
    const res = await api().get(urls.getProfile(username))
    return res.data
}
