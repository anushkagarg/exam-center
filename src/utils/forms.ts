import { AxiosError } from 'axios'

interface Errors {
    [key: string]: string
}

interface Data {
    [key: string]: string[]
}

export const createStatusFromError = (error: AxiosError): Errors => {
    const data = error.response?.data as Data
    const formErrors: Errors = {}
    Object.entries(data).forEach(([field, errors]) => {
        if (field === 'nonFieldErrors') {
            formErrors['root'] = errors[0]
        } else {
            formErrors[field] = errors[0]
        }
    })
    return formErrors
}
