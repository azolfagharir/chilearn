/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors:{
        myFavorite:'#60cc04',
        myColorText:"#3cbbf7",
        myParagraph:'#828282',
        inputBg:"#f7f7f7",
    },
  },
};
export const plugins = [];