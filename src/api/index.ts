import axios, { AxiosInstance } from 'axios'
import store from '../store'

const api = (): AxiosInstance => {
    const {
        auth: { isLoggedIn, token },
    } = store.getState()

    if (isLoggedIn) {
        return axios.create({
            baseURL: 'http://localhost:8000/api/',
            headers: {
                Authorization: `JWT ${token}`,
            },
        })
    }
    return axios.create({
        baseURL: 'http://localhost:8000/api/',
    })
}

export default api
