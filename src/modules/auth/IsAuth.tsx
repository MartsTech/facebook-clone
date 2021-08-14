import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const IsAuth: React.FC = ({ children }) => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && !loading) {
      router.replace("/login");
    }
  }, [session, loading, router]);

  if (session) {
    return <>{children}</>;
  }

  return null;
};

export default IsAuth;
