import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import About from "../../components/About/About";

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
        <meta
          name="Web Designer"
          content="Web Designer Guwahati, Assam, India"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </Layout>
  );
}
