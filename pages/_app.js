import '@/styles/globals.css'
import '@/styles/normalize.css'
import 'antd/dist/antd.css'
import Header from '@/common/header/header'
import Footer from '@/common/footer/footer'
import store from '@/store/index'
import { Provider } from 'react-redux'
// import styles from "@/styles/Home.module.css";

export function Layout({ children }) {
  return (
    <Provider store={store}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Provider>
  )
}
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
