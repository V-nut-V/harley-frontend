import Head from "next/head";
import Hero from "../components/Home/Hero";
import Layout from "../components/Layout";
import client from "../lib/apolloClient";
import { navQuery, indexPageQuery, allWorksQuery } from "../lib/queries";
import Works from "../components/Works";

export default function Index({ navData, pageData, worksData }) {
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
        <Works worksData={worksData} />
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

  const {
    data: {
      works: { data: worksData },
    },
  } = await client.query({
    query: allWorksQuery,
  });

  return {
    props: {
      navData,
      pageData,
      worksData,
    },
    revalidate: 10,
  };
}
