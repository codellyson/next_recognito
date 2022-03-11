import React from "react";
import Layout from "../layout/Layout";

import "../styles/main.scss";
import "nprogress/nprogress.css";
import "node-snackbar/dist/snackbar.min.css";
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/ca252c14be.js";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
