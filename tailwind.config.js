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
        "updown":"updown 5s linear infinite alternate",
        "updownlg":"updownlg 5s linear infinite alternate"
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
        },
        updown:{
          "0%":{transform:"translateY(0%)"},
          "25%":{transform:"translateY(-10%)"},
          "50%":{transform:"translateY(0%)"},
          "100%":{transform:"translateY(30%) scale(1.1)"}
        },
        updownlg:{
          "0%":{transform:"translateY(0%)"},
          "25%":{transform:"translateY(-10%)"},
          "50%":{transform:"translate(10%, 0%)"},
          "100%":{transform:"translate(20% , 10%) "}
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

