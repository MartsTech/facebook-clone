import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const IsNotAuth: React.FC = ({ children }) => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace("/");
    }
  }, [session, router]);

  if (!session && !loading) {
    return <>{children}</>;
  }

  return null;
};

export default IsNotAuth;
