import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>付祖贤-收藏周刊</title>
        <meta
          name="Description"
          content="付祖贤的收藏周刊（next.js & Tailwind CSS）"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
