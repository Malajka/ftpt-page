import { createGlobalStyle } from "styled-components"

const MainStyles = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css?family=Baloo+Da+2:400,700&display=swap&subset=latin-ext'); */
     html {
        font-size:62.5%; /*happy rems 1rem = 10px */
        box-sizing:border-box;
    }

    *, *::before, *::after {
        box-sizing:inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body{
        margin:0;
        font-family: 'Raleway';
        text-rendering: optimizeLegibility;

        }

    button{
        padding:0;
        cursor:pointer;
        font-family: 'Raleway';

    }

    ul{
        padding:0;
        margin:0;
    }

    `

export default MainStyles;
