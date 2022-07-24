import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Head>
          <title>zuxian-收藏周刊</title>
          <meta
            name="Description"
            content="zuxian的收藏周刊（next.js & Tailwind CSS）"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
