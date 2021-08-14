import { signIn } from "next-auth/client";
import Image from "next/image";

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
        <h1
          className="p-5 bg-blue-500 rounded-full text-white
        text-center cursor-pointer"
          onClick={() => signIn()}
        >
          Login with Facebook
        </h1>
      </div>

      <div
        className="text-base bg-blue-500 text-white
          py-4 px-12 absolute bottom-0 w-full"
      >
        <strong>Disclaimer:</strong> This is not the official Facebook. It is a
        redesign, built purely for educational purpose.
      </div>
    </div>
  );
};

export default Login;
