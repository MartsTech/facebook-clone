import IsNotAuth from "modules/auth/IsNotAuth";
import Login from "modules/user/Login";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";

const LoginPage = () => {
  return (
    <IsNotAuth>
      <Login />
    </IsNotAuth>
  );
};

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
