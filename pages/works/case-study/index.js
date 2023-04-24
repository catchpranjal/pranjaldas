import Head from "next/head";
import Layout from "../../../components/Layout/Layout";
import CaseStudy from "../../../components/CaseStudy/CaseStudy";

export default function CaseStudyPage() {
  return (
    <Layout>
      <Head>
        <title>Pranjal Das</title>
        <meta name="Pranjal Das" content="Software Developer in Guwahati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CaseStudy />
    </Layout>
  );
}
