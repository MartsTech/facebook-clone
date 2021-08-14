import { defaultSEO } from "config/seo";
import { Provider as AuthProvider } from "next-auth/client";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider session={pageProps.session}>
      <DefaultSeo {...defaultSEO} />
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default App;
