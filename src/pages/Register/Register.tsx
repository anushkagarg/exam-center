import React, { Component } from 'react'
import { Grid, Paper, Typography, Link as TypoLink } from '@material-ui/core'
import { Link } from 'react-router-dom'

import RegisterForm from './RegisterForm'

class Register extends Component {
    render() {
        return (
            <Grid container justify="center">
                <Grid item sm={4} id="login-form">
                    <Paper>
                        <Typography variant="h6" className="form-header">
                            Register Here
                        </Typography>
                        <RegisterForm />
                        <Typography variant="body2" className="form-footer">
                            Already have an account?{' '}
                            <TypoLink component={Link} to="/login">
                                Login Here
                            </TypoLink>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default Register
