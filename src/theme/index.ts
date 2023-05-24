'use client'

import { createTheme } from '@mui/material/styles';

const designTokens = {
  colors: {
    purple1: '#560099',
    purple2: '#5600db',
    pink: '#ff0084',
    almostWhite: '#f2f2f2',
  }
}

export const theme = createTheme({
  palette: {
    primary: {
        main: '#22083C',
        light: '#22083C',
        dark: '#22083C',
        contrastText: 'white',
    },
    secondary: {
        main: designTokens.colors.pink,
        light: '#FF008A',
        dark: '#FF008A',
        contrastText: 'white',
    },
  },
});
