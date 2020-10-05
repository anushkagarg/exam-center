import Header from './Header'
import { connect } from 'react-redux'

import { setUserProfile } from '../../store/user/actions'
import { IApplicationState } from '../../store/types'

const mapStateToProps = (state: IApplicationState) => ({
    isLoggedIn: state.auth.isLoggedIn,
    userName: state.auth.username,
    me: state.user.me,
})

const mapDispatchToProps = {
    setUserProfile,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
