import React from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { Provider } from 'react-redux'

import LoginForm from './components/forms/Login'
import theme from './theme'
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <LoginForm />
            </ThemeProvider>
        </Provider>
    )
}

export default App
