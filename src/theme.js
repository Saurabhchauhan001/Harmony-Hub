// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', // Green theme for health-related app
    },
    secondary: {
      main: '#ff5722',
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
});

export default theme;
