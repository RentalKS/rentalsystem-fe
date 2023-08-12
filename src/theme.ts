import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4a4e69',
            light: '#7d8199',
            dark: '#23263c',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#856188',
            light: '#b98da9',
            dark: '#543d60',
            contrastText: '#ffffff',
        },
        error: {
            main: '#d62828',
            light: '#ff5f5f',
            dark: '#9c0000',
            contrastText: '#ffffff',
        },
        warning: {
            main: '#fcbf49',
            light: '#ffed7a',
            dark: '#c98c00',
            contrastText: '#000000',
        },
        info: {
            main: '#219ebc',
            light: '#6ec0e5',
            dark: '#006a8e',
            contrastText: '#ffffff',
        },
        success: {
            main: '#588157',
            light: '#8ba38e',
            dark: '#25502d',
            contrastText: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
 
    },
});

export default theme;