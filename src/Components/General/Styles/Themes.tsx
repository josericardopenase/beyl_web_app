export interface ITheme{
    primary: string,
    secondary: string,
    textPrimary: string,
    textSecondary: string,
    primaryTransparent: string,
    tertiary: string,
};


const beylColor = '#FFC600';

const darkTheme : ITheme = {
    primary: '#1E2025',
    secondary: '#272B2F',
    textPrimary: "white",
    textSecondary: '#BBBBBB',
    primaryTransparent: 'rgb(39, 43, 47, 0.7)',
    tertiary: '#22262A'
};

const lightTheme : ITheme = {
    primary: '#f5f5f5',
    secondary: 'white',
    textPrimary: "black",
    textSecondary: '#808080',
    primaryTransparent: '#f5f5f5',
    tertiary: '#e9e9e9'
};

export default {lightTheme, darkTheme, beylColor};