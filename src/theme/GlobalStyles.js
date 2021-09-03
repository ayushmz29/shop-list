import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    button {
        margin: 0.5em auto;
        padding: 1em;
        min-width: 25%;
        color: whitesmoke;
        font-size: 1rem;
        background-color: #2093d6;
        border-radius: 10px;
        border: transparent 0.5px solid;
        cursor: pointer;
    }
    button:hover {
        background-color: whitesmoke;
        color: #2093d6;
        border: #2093d6 0.5px solid;
    }
`;
