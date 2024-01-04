/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens:{
      sm:"478px",
      md:"770px",
      lg:"1000px"
    },
    extend: {
      colors:{
        bdyClr: "rgb(238, 234, 228)",
      },
      fontFamily :{
        roman : "roman",
        media : "media",
      } 
    },
  },
  plugins: [],
}

