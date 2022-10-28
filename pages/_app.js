import Layout from '../layouts/layout'
import '../styles/globals.css'
import store from '../store/productStore';
import { Provider } from 'react-redux';
Provider
function MyApp({ Component, pageProps }) {

  return <Layout>
          <Provider store={store}>
            <Component {...pageProps}/>

          </Provider>
        </Layout>
}

export default  MyApp
