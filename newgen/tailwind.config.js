module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                "3x": "2000px"
            },
            zIndex: {
                '0': -2,
                 '10':-1,
                
                
            }, fontSize: {
                
                '6xl': '4rem',
                
            }
        },
    },
    variants: {
        extend: {},
    }
    
}
