import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout/layout";
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { useStore } from '../stores/index'


function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.state)
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <Layout>
          <Head>
            <title>fuzuxian-收藏周刊</title>
            <meta name="Description" content="fuzuxian的收藏周刊（next.js & Tailwind CSS）" />
            <meta name="Keywords" content="zuxian,fuzuxian,付祖贤,祖贤,NextJs" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
