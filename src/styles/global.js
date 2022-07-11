import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        font-style: normal;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul, ol {
        list-style: none;
    }

    #root {
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        overflow: hidden;
    }


    :root {
        //COLORS

        --icon-header-color: #A1A5B7;
        --icon-header-secondary-color: #E1E3E8;

        --text-color: #000000;
        --subtext-color: #7F8297;

        --text-menu-color: #9495A8;
        --subtext-menu-color: #494B74;
        --subtext-hover-menu-color: #2B2B41;

        --active-color: #2A68AB;
        --active-hover-color: #20334E;
        --submit-color: #084FB9;

        --bg-menu-color: #1E1E2D;
        --bg-logo-color: #111119;
        --bg-primary-color: #F3F5F7;
        --bg-secondary-color: #FFFFFF;

        //FILTERS COLORS TO SVG

        --subtext-menu-filter: invert(26%) sepia(13%) saturate(1905%) hue-rotate(199deg) brightness(97%) contrast(80%);

        --subtext-hover-menu-filter: invert(16%) sepia(19%) saturate(868%) hue-rotate(201deg) brightness(93%) contrast(95%);

        --active-filter: invert(34%) sepia(81%) saturate(525%) hue-rotate(170deg) brightness(91%) contrast(88%);

        --active-hover-filter: invert(16%) sepia(11%) saturate(2819%) hue-rotate(176deg) brightness(99%) contrast(90%);

        --submit-filter: invert(17%) sepia(43%) saturate(6231%) hue-rotate(211deg) brightness(96%) contrast(94%);
    }
`;

export default GlobalStyle;
