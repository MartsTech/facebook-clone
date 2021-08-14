import Providers from "components/providers/Providers";
import { AppProps } from "next/app";
import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
};

export default App;
