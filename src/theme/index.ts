import { createMuiTheme } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
    typography: {
        h5: {
            fontSize: '1.25rem',
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 'bold',
        },
        button: {
            textTransform: 'none',
        },
    },
    palette: {
        primary: {
            main: '#1ba94c',
        },
        secondary: {
            main: grey[400],
        },
    },
    props: {
        MuiTextField: {
            size: 'small',
            variant: 'outlined',
        },
        MuiPaper: {
            square: true,
        },
        MuiChip: {
            size: 'small',
        },
        MuiMenu: {
            getContentAnchorEl: null,
            anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
        },
    },
    overrides: {
        MuiPaper: {
            root: {
                padding: 25,
            },
        },
        MuiTextField: {
            root: {
                marginBottom: 15,
            },
        },
        MuiButton: {
            containedPrimary: {
                color: 'white',
            },
        },

        MuiInputAdornment: {
            root: {
                height: '2.5em',
                width: '3em',
                maxHeight: '2.5em',
                backgroundColor: '#f3f3f3',
            },
        },

        MuiOutlinedInput: {
            adornedStart: {
                paddingLeft: 0,
            },
        },

        MuiSvgIcon: {
            root: {
                margin: 'auto',
            },
        },
        MuiAppBar: {
            root: {
                padding: 0,
            },
            colorPrimary: {
                backgroundColor: '#39424e',
                color: 'white',
            },
        },

        MuiMenu: {
            paper: {
                padding: '0 !important',
            },
        },

        MuiChip: {
            root: {
                marginRight: 8,
                marginBottom: 8,
            },
        },
    },
})

export default theme
