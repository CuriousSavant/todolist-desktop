import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#6ec6ff',
      main: '#2196f3',
      dark: '#0069c0',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
    },
    secondary: {
      light: '#ff79b0',
      main: '#f50057',
      dark: '#ab003c',
      500: '#f50057',
      600: '#e91e63',
      700: '#d81b60',
      800: '#c2185b',
      900: '#880e4f',
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
});

export default theme;