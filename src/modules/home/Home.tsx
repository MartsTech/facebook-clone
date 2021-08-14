import Feed from "components/feed/Feed";
import Sidebar from "components/sidebar/Sidebar";
import Widgets from "components/widgets/Widgets";

const Home = () => {
  return (
    <>
      <Sidebar />
      <Feed />
      <Widgets />
    </>
  );
};

export default Home;
