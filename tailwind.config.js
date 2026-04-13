tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {

            },
            fontFamily: {
                display: ['Syne', 'sans-serif'],
                body: ['Outfit', 'sans-serif'],
            },
            animation: {
                'marquee': 'marquee 28s linear infinite',
                'fade-up': 'fadeUp 0.7s ease forwards',
                'float': 'float 4s ease-in-out infinite',

            },
            keyframes: {
                marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
                fadeUp: { '0%': { opacity: 0, transform: 'translateY(30px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },

            }
        }
    }
}