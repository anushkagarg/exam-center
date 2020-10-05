import React from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import theme from './theme'
import store from './store'
import Routes from './pages/Routes'
import { Header } from './components'

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <CssBaseline />
                    <Header />
                    <Routes />
                </Router>
            </ThemeProvider>
        </Provider>
    )
}

export default App
