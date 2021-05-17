import Head from "next/head";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <meta
          name="description"
          content="Facebook clone created with Next.JS and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
