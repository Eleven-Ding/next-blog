import "../styles/globals.css";
import "../styles/normalize.css";
import "antd/dist/antd.css";
import Header from "../common/header/header";
import store from "../store/index";
import { Provider } from "react-redux";

export function Layout({ children }) {
  return (
    <Provider store={store}>
      <Header />
      <main>{children}</main>
    </Provider>
  );
}
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
