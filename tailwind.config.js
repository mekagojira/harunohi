/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                polar: {
                    ['900']: '#2E3440',
                    ['800']: '#3B4252',
                    ['700']: '#434C5E',
                    ['600']: '#4C566A',
                },
                'snow-storm': {
                    ['100']: '#ECEFF4',
                    ['200']: '#E5E9F0',
                    ['300']: '#D8DEE9',
                },
            },
        },
        fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
    },
    plugins: [],
}
