import DefaultLayout from "components/layouts/DefaultLayout";
import Providers from "components/providers/Providers";
import { AppProps } from "next/app";
import React from "react";
import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Providers>
  );
};

export default App;
