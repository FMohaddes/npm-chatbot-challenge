/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme   : {
    fontFamily : {
      sans      : [ "Inter" ] ,
      mono      : [ "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" ] ,
    } ,
    extend     : {
      gridTemplateColumns : {
        14 : "repeat(14, minmax(0, 1fr))"
      } ,
      colors              : {
        "disableText"    : "#596281" ,
        "borderColor"    : "#42495F" ,
        "borderColor200" : "#67749D" ,
        "inputColor"     : "#272E43" ,
        // "boxColor"         : "#272E43" ,
        "primary100"   : "#55628B" ,
        "primary200"   : "#40475B" ,
        "primary300"   : "#24293C" ,
        "primary600"   : "#181B2E" ,
        "secondary100" : "#FF6227" ,
        "secondary200" : "#DC5E2E" ,
        "gray100"      : "#F7F7F7" ,
        "gray150"      : "#D4D2D2" ,
        "gray200"      : "#939393" ,
        "gray250"      : "#707070" ,
        "gray300"      : "#515151" ,
        "gray400"      : "#414141" ,
        "successLight" : "#E6FBE5" ,
        "success"      : "#16FFBA" ,
        "warning"      : "#FFDD47" ,
        "chart"        : "#E314CE" ,
        "danger"       : "#FF1623" ,
        "infoLight"    : "#ECF4FF" ,
        "info"         : "#14BAE3" ,
      } ,
      backgroundColor     : {
        "mainGlassGradient"        : `rgba(47, 53, 71, 0.40)` ,
        "opacityPrimaryBackground" : `rgba(82, 91, 116, 0.08)` ,
        "boxGlassGradient"         : `rgba(41, 50, 69, 0.5)` ,
        "boxHover"                 : `rgba(61, 70, 98, 0.5)` ,
      } ,
      backgroundImage     : {
        "gradientRadialBackgroundMenu"    : ` radial-gradient(50% 139.81% at 50% -39.81%, rgba(47, 55, 78, 0.50) 0%, rgba(72, 82, 113, 0.00) 100%)` ,
        "gradientRadialBackgroundPackage" : `linear-gradient(176deg, #9757DF 15.98%, rgba(154, 84, 234, 0.73) 27.89%, rgba(153, 75, 241, 0.42) 39.53%, rgba(167, 88, 255, 0.22) 51.44%, rgba(183, 111, 255, 0.08) 60.64%, rgba(151, 87, 223, 0.00) 67.95%)` ,
        "gradientRadialBackgroundBlueY"   : `linear-gradient(1deg, rgba(55, 63, 93, 0.87) 17.62%, rgba(60, 69, 103, 0.00) 99.04%)` ,
        "gradientBackgroundHeaderGlow"    : `linear-gradient(to right, rgba(32, 58, 126, 0.0001), rgba(11, 152, 197, 0.0001))` ,
        
      } ,
      boxShadow           : {
        "boxShadow"        : `0px 0px 55px 0px rgba(70, 80, 113, 0.20)` ,
        "boxShadow2"       : `0px 20px 40px 0px rgba(35, 33, 33, 0.15)` ,
        "boldButtonShadow" : ` 0px 20px 40px 0px rgba(35, 33, 33, 0.15)` ,
        "inputShadow"      : ` 0px 0px 55.43892px 0px rgba(70, 80, 113, 0.20)` ,
      } ,
      textShadow          : {
        "boldTextShadow" : "0px 40px 80px rgba(0, 0, 0, 0.25)" ,
      } ,
      backdropFilter      : {
        "inputBlurFilter" : "blur(20.15960693359375px)" ,
      } ,
      
    } ,
  },
  plugins: [],
}
