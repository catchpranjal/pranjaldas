import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import Works from "../../components/Works/Works";

export default function WorksPage() {
  return (
    <Layout>
      <Head>
        <title>Pranjal Das</title>
        <meta
          name="Pranjal Das"
          content="Software Developer in Guwahati, Assam, India"
        />
        <meta
          name="App Developer"
          content="Software Developer in Guwahati, Assam, India"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Works />
    </Layout>
  );
}
