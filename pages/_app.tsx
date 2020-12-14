import "../styles/globals.css";

import Layout from "../components/Layout";
//import ErrorBoundary from "../components/ErrorBoundary";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
//import { FavsProvider } from "../utils/favsContext";
//import { AppProps } from "next/dist/next-server/lib/router/router";

function MyApp({ Component, pageProps }) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#f38e82;",
      },
    },
    overrides: {
      MuiIconButton: {
        label: { alignSelf: "start" },
      },
    },
  });

  return (
   {/*  <ErrorBoundary> */}
      <ThemeProvider theme={theme}>
        {/* <FavsProvider> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </FavsProvider> */}
      </ThemeProvider>
   {/*  </ErrorBoundary> */}
  );
}

export default MyApp;
