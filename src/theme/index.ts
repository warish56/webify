
export const pallete = {
    blue: {
        primary: '#2d5cfe',
        light: '#ebefff'
    },
    gray: {
        dark: '#292a2c',
        primary: '#818183',
        light: '#f6f7f9'
    }
}

export const typography = {

    h1: `
        font-family: 'Roboto', sans-serif;
        font-size: 34px;
        font-weight: 700;
    `,

    h2: `
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        font-weight: 500;
    `,

    h3: `
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 500;
    `,

    h4: `
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: 500;
    `,

    h5: `
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
        font-weight: 500;
    `,

    h6: `
        font-family: 'Roboto', sans-serif;
        font-size: 10px;
        font-weight: 500;
    `,

    body: `
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: 400;
    `,

    btn_medium: `
        font-family: 'DM Sans', sans-serif;
        font-size: 15px;
        font-weight: 700;
    `,

    btn_small: `
        font-family: 'DM Sans', sans-serif;
        font-size: 13px;
        font-weight: 700;
    `,
}

export const theme = {
    pallete,
    typography
}

export type ThemeType = typeof theme;