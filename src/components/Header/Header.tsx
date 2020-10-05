import React, { Component } from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { IUserProfile } from '../../store/user/types'
import { getUserName } from '../../utils/user'
import { getUser } from '../../api/user'

interface Props {
    isLoggedIn: boolean
    me?: IUserProfile
    userName?: string
    setUserProfile: (user: IUserProfile) => void
}

class Header extends Component<Props> {
    unAuthenticatedView = () => {
        return (
            <Button color="inherit" component={Link} to="/login">
                Login
            </Button>
        )
    }

    authenticatedView = () => {
        const { me, userName } = this.props
        console.log(me)
        return (
            <>
                <Button color="inherit" component={Link} to="/login">
                    Login
                </Button>
                <Typography variant="body1" color="inherit">
                    {me ? getUserName(me) : userName}
                </Typography>
            </>
        )
    }

    async componentDidUpdate() {
        const { isLoggedIn, me, setUserProfile } = this.props
        if (isLoggedIn && !me) {
            const user = await getUser()
            console.log(user)
            setUserProfile(user)
        }
    }

    render() {
        const { isLoggedIn } = this.props
        return (
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        Exam Center
                    </Typography>
                    <div style={{ flex: 1 }}></div>
                    {isLoggedIn ? this.authenticatedView() : this.unAuthenticatedView()}
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header
