import React, { Component } from 'react'
import { Grid, Paper, Typography, Link as TypoLink } from '@material-ui/core'
import { Link } from 'react-router-dom'

import LoginForm from './LoginForm'

class Login extends Component {
    render() {
        return (
            <Grid container justify="center">
                <Grid item sm={4} id="login-form">
                    <Paper>
                        <Typography variant="h6" className="form-header">
                            Login Here
                        </Typography>
                        <LoginForm />
                        <Typography variant="body2" className="form-footer">
                            New user?{' '}
                            <TypoLink component={Link} to="/register">
                                Register Here
                            </TypoLink>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default Login
