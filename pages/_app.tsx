import { RootStoreProvider } from "@mobx";
import "@styles/global.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <RootStoreProvider>
            <Component {...pageProps} />
        </RootStoreProvider>
    );
}

export default MyApp;
