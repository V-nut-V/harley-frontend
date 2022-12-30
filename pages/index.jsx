import Head from "next/head";
import Link from "next/link";
import Hero from "../components/Home/Hero";
import Layout from "../components/Layout";
import client from "../lib/apolloClient";
import { navQuery, indexPageQuery } from "../lib/queries";

export default function Index({ navData, pageData }) {
  return (
    <>
      <Head>
        <title>Harley Lin</title>
        <meta name="description" content="Harley Lin's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navData={navData}>
        <Hero pageData={pageData} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const {
    data: {
      indexPage: {
        data: { attributes: navData },
      },
    },
  } = await client.query({
    query: navQuery,
  });

  const {
    data: {
      indexPage: {
        data: { attributes: pageData },
      },
    },
  } = await client.query({
    query: indexPageQuery,
  });



  return {
    props: {
      navData,
      pageData,
    },
    revalidate: 10,
  };
}
