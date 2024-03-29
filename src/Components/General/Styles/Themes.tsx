export interface ITheme{
    primary: string,
    secondary: string,
    textPrimary: string,
    textSecondary: string,
    primaryTransparent: string,
    tertiary: string,
};


const beylColor = '#FFC600';
const transparencyBeylColor = "rgba(255, 198, 0, 0.43)"

const darkTheme : ITheme = {
    primary: '#1E2025',
    secondary: '#272B2F',
    textPrimary: "white",
    textSecondary: '#BBBBBB',
    primaryTransparent: 'rgb(39, 43, 47, 0.7)',
    tertiary: '#59575F',
};

const lightTheme : ITheme = {
    primary: '#f5f5f5',
    secondary: 'white',
    textPrimary: "#1E2025",
    textSecondary: '#808080',
    primaryTransparent: '#f5f5f5',
    tertiary: '#d1d1d1',
};

export default {lightTheme, darkTheme, beylColor, transparencyBeylColor};