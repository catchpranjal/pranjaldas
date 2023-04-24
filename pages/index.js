import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Pranjal Das</title>
        <meta
          name="Pranjal Das"
          content="Software Developer in Guwahati, Assam"
        />
        <meta
          name="Web Developer"
          content="Fullstack software developer based in Guwahati,Assam, India"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </Layout>
  );
}
