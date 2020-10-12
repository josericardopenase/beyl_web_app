export interface ITheme{
    primary: string,
    secondary: string,
    textPrimary: string,
    textSecondary: string,
};


const beylColor = '#FFC600';

const darkTheme : ITheme = {
    primary: '#1E2025',
    secondary: '#272B2F',
    textPrimary: "white",
    textSecondary: '#BBBBBB',
};

const lightTheme : ITheme = {
    primary: '#f5f5f5',
    secondary: 'white',
    textPrimary: "black",
    textSecondary: '#808080',

};

export default {lightTheme, darkTheme, beylColor};