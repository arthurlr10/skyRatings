import { RootStoreProvider } from "@mobx";
import "@styles/global.css";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <div>
            <Head>
                <link
                    rel="Website Icon"
                    href="/icons/favicon.ico"
                    type="image/x-icon"
                />
            </Head>
            <Head>
                <title>SkyRatings</title>
            </Head>
            <RootStoreProvider>
                <Component {...pageProps} />
            </RootStoreProvider>
        </div>

    );
}

export default MyApp;
