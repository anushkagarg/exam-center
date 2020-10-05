import React, { Component } from 'react'
import { Grid, Button } from '@material-ui/core'
import { withFormik, FormikProps } from 'formik'
import * as yup from 'yup'

import { TextField } from '../../components/formik'
import { createStatusFromError } from '../../utils/forms'
import { createOrganizationApi } from '../../api/auth'

interface IValues {
    username: string
    email: string
    password: string
    confirmPassword: string
}

interface IProps {}

const formConfig = withFormik<IProps, IValues>({
    mapPropsToValues: () => ({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }),

    validationSchema: yup.object().shape<IValues>({
        username: yup.string().required().label('User Name'),
        email: yup.string().email().required().label('Email'),
        password: yup.string().required().label('Password'),
        confirmPassword: yup
            .string()
            .required()
            .oneOf([yup.ref('password')], 'Password and Confirm password should match')
            .label('Confirm Password'),
    }),

    mapPropsToStatus: () => ({}),

    handleSubmit: async (values: IValues, formikBag) => {
        const { setStatus } = formikBag
        try {
            await createOrganizationApi(values)
        } catch (err) {
            setStatus(createStatusFromError(err))
        }
    },
})

class RegisterForm extends Component<IProps & FormikProps<IValues>> {
    handleBlur = (e: React.FocusEvent<any>): void => {
        const { setStatus, status, handleBlur } = this.props
        e.persist()
        const { name } = e.target

        setStatus({
            ...status,
            root: '',
            [name]: '',
        })
        handleBlur(e)
    }

    render() {
        const { handleSubmit, handleReset, isValid } = this.props
        return (
            <div>
                <form onSubmit={handleSubmit} onReset={handleReset}>
                    <Grid container direction="column">
                        <TextField label="Username" name="username" onBlur={this.handleBlur} />
                        <TextField label="Email" name="email" onBlur={this.handleBlur} />
                        <TextField label="Password" type="password" name="password" onBlur={this.handleBlur} />
                        <TextField label="Confirm Password" name="confirmPassword" onBlur={this.handleBlur} />
                        <Grid item container direction="row-reverse" className="form-actions">
                            <Button color="primary" variant="contained" type="submit" disabled={!isValid}>
                                Register
                            </Button>
                            <Button color="primary" variant="outlined" type="reset">
                                Reset
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}

export default formConfig(RegisterForm)
