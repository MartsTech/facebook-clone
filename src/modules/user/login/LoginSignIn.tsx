import { useStore } from "stores/store";

const LoginSignIn = () => {
  const { signIn } = useStore().userStore;

  return (
    <h1
      className="p-5 bg-blue-500 rounded-full text-white
      text-center cursor-pointer"
      onClick={signIn}
    >
      Login with Facebook
    </h1>
  );
};

export default LoginSignIn;
