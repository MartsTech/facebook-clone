import Image from "next/image";
import LoginDisclaimer from "./LoginDisclaimer";
import LoginSignIn from "./LoginSignIn";

const Login = () => {
  return (
    <div className="grid place-items-center">
      <div className="mt-24">
        <Image
          src="/images/login_image.png"
          height={400}
          width={400}
          objectFit="contain"
          alt="login"
        />
        <LoginSignIn />
      </div>
      <LoginDisclaimer />
    </div>
  );
};

export default Login;
