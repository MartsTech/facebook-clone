import IsAuth from "modules/auth/IsAuth";
import Home from "modules/home/Home";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";

const HomePage = () => {
  return (
    <IsAuth>
      <Home />
    </IsAuth>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
