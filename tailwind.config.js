/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Be Vietnam Pro'],
      },
      colors: {
        bodyTextColor: "#242D52",
        textOrange: "#F3603C",
        footerBg: "#1D1E25",
        linkColor: "#FCF6F5",
        linkHover: "#F98F75",
        whiteLinkHOver: "#F9B09D",
      },

      boxShadow: {
        linkShadow: '0px 15px 15px -10px #FF9F8E',
      }
    },
  },
  plugins: [],
}
