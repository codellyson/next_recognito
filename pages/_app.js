import Layout from "../layout/Layout";

import "../styles/main.scss";
import "nprogress/nprogress.css";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
