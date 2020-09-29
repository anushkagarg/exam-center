import React, { Component } from 'react'
import { Grid, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { withFormik, FormikProps } from 'formik'
import * as yup from 'yup'

import { TextField } from '../formik'
import { createStatusFromError } from '../../utils/forms'
import { logIn } from '../../store/auth/actions'
import { loginUserApi } from '../../api/auth'

interface IValues {
    username: string
    password: string
}

interface IProps {
    logIn: (token: string) => void
}

const formConfig = withFormik<IProps, IValues>({
    mapPropsToValues: () => ({
        username: '',
        password: '',
    }),

    validationSchema: yup.object().shape<IValues>({
        username: yup.string().required().label('User Name'),
        password: yup.string().required().label('Password'),
    }),

    mapPropsToStatus: () => ({}),

    handleSubmit: async (values: IValues, formikBag) => {
        const { setStatus } = formikBag
        const { logIn } = formikBag.props
        try {
            const res = await loginUserApi(values)
            logIn(res.token)
        } catch (err) {
            setStatus(createStatusFromError(err))
        }
    },
})

class LoginForm extends Component<IProps & FormikProps<IValues>> {
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
        const { handleSubmit, isValid } = this.props
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <Grid container>
                        <TextField label="Username" name="username" onBlur={this.handleBlur} />
                        <TextField label="Password" type="password" name="password" onBlur={this.handleBlur} />
                    </Grid>
                    <Grid container>
                        <Button color="primary" variant="contained" type="submit" disabled={!isValid}>
                            Login
                        </Button>
                    </Grid>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    logIn,
}

export default connect(null, mapDispatchToProps)(formConfig(LoginForm))
