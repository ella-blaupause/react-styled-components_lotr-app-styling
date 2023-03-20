import { useEffect, useState } from "react";
import { GlobalStyle } from "../styles";

export default function App({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Component {...pageProps} />
    </>
  );
}
