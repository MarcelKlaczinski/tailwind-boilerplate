module.exports = {
  purge: ['./dist/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f4d1e5",
          200: "#e9a2cb",
          300: "#de74b0",
          400: "#d34596",
          500: "#c8177c",
          600: "#a01263",
          700: "#780e4a",
          800: "#500932",
          900: "#280519"
        },
        secondary: {
          100: "#eacfed",
          200: "#d69fdb",
          300: "#c16eca",
          400: "#ad3eb8",
          500: "#980ea6",
          600: "#7a0b85",
          700: "#5b0864",
          800: "#3d0642",
          900: "#1e0321"
        },
      },
      backgroundImage: theme => ({
        'background': "url('/assets/imgs/background.png')",
      })
    },

    extend: {
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          100: "#f4d1e5",
          200: "#e9a2cb",
          300: "#de74b0",
          400: "#d34596",
          500: "#c8177c",
          600: "#a01263",
          700: "#780e4a",
          800: "#500932",
          900: "#280519"
        },
        secondary: {
          100: "#eacfed",
          200: "#d69fdb",
          300: "#c16eca",
          400: "#ad3eb8",
          500: "#980ea6",
          600: "#7a0b85",
          700: "#5b0864",
          800: "#3d0642",
          900: "#1e0321"
        },
      },
    }
  },
  variants: {},
  plugins: [],
}
