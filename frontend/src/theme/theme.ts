import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#557570', 
      contrastText: '#ffffff', 
    },
    secondary: {
      main: '#d6dcd8', 
    },
    background: {
      default: '#d6dcd8', 
      paper: '#ffffff',   
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;