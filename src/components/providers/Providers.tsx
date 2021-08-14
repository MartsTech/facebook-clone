import { defaultSEO } from "config/seo";
import { DefaultSeo } from "next-seo";

const Providers: React.FC = ({ children }) => {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      {children}
    </>
  );
};

export default Providers;
