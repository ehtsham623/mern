/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"];
export const theme = {
  extend: {
    colors: {
      //primary colors
      mainColor: "#3b82f6",
      //text colors
      textPrimaryColor: "#4f525c",
      textPrimaryLightColor: "#FFFFFF",
      textPrimaryDarkColor: "#000000",
      textMainColor: "#3b82f6",
      hintTextColor: "#C2C2D8",
      //Bg color
      bgColor: "#f9fbfc",
      bgLightColor: "#FFFFFF",
      mainLightBgColor: "#3b82f6",
      mainDarkBgColor: "#1d4ed8",
      //other
      dividerColor: "#E9EDF7",
      shadowColor: "#E9E9F2",
      borderColor: "#E9E9F2",
      focusBorderColor: "#3b82f6",
      ratingColor: "#FFB907",
      //secondary colors
      successColor: "#00C300",
      errorColor: "#EB0076",
      warningColor: "#FFB907",
    },
  },
};
export const plugins = [];
