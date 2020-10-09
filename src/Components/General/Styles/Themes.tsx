interface Theme{
    primary: String,
    secondary: String,
    textPrimary: String,
    textSecondary: String,
}



export const darkTheme : Theme = {
    primary: '#1E2025',
    secondary: '#272B2F',
    textPrimary: "white",
    textSecondary: '#BBBBBB',
}

export const lightTheme : Theme = {
    primary: 'white',
    secondary: '#F5F5F5',
    textPrimary: "black",
    textSecondary: '#808080',
}