import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { GlobalStyles } from "styles/Global";
import "styles/global.css";

const theme = {
    color: {
        white: "#fff",
        copper: "#AE652E",
        copperOverlay: "rgba(174, 101, 46, 0.25);",
        nescafe: "#ECD6A4",
        pink: "#DEB19F",
        darkGreen: "#2A2106",
        darkGray: "#1D1D1D",
    },
    fonts: {
        lobster: `"Lobster"`,
    },
};

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Global styles={GlobalStyles} />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
export default MyApp;
