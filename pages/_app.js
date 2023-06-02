import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div>
      <Component {...pageProps} />
    </div>
  </ThemeProvider>
);

export default MyApp;
