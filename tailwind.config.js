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
      animation: {
        "spins":"spin 10s linear infinite",
        'spinslow': 'spinM 8s linear infinite alternate',
        "movex":"movex 12s linear infinite",
      },
      keyframes: {
        spinM: {
          '25%': { transform: 'translateY(-10%) rotate(20deg)' },
          '75%': { transform: 'translateY(15%) rotate(20deg)' },
        },
        movex:{
          "0%":{transform:"translateX(0%)"},
          "50%":{transform:"translateX(-50%)"},
          "100%":{transform:"translateX(-100%)"}
        }
      },
      colors:{
        bdyClr: "rgb(238, 234, 228)",
        priOra: "#ea4828",
      },
      fontFamily :{
        roman : "roman",
        media : "media",
      } 
    },
  },
  plugins: [],
}

