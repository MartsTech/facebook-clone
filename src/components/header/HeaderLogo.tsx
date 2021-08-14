import Image from "next/image";
import { useRouter } from "next/router";

const HeaderLogo = () => {
  const router = useRouter();

  return (
    <Image
      src="/images/logo.png"
      width={40}
      height={40}
      layout="fixed"
      alt="logo"
      onClick={() => router.push("/")}
    />
  );
};

export default HeaderLogo;
