import { css } from "@emotion/react";

export const GlobalStyles = css`
    * {
        margin: 0;
        padding: 0;
        z-index: 1;
    }

    html,
    body,
    #__next {
        display: flex;
        flex-direction: column;
        font-family: "Poppins", sans-serif;
        min-height: 100%;
        width: 100%;
    }

    button {
        font-family: "Poppins", sans-serif;
    }
`;
