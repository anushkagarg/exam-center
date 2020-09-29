import React, { FC } from 'react'
import { useFormikContext } from 'formik'
import { TextField as Input, TextFieldProps } from '@material-ui/core'

interface FormContext {
    [key: string]: string
}

const TextField: FC<TextFieldProps> = (props) => {
    let { name } = props
    name = String(name)

    const { values, errors, touched, status, handleBlur, handleChange } = useFormikContext<FormContext>()
    return (
        <Input
            value={values[name]}
            error={touched[name] && (!!status['root'] || !!status[name] || !!errors[name])}
            helperText={touched[name] ? status[name] || errors[name] : ''}
            onChange={handleChange}
            onBlur={handleBlur}
            {...props}
        />
    )
}

export default TextField
