import Feed from "components/feed/Feed";
import DefaultLayout from "components/layouts/DefaultLayout";
import Sidebar from "components/sidebar/Sidebar";
import Widgets from "components/widgets/Widgets";

const Home = () => {
  return (
    <DefaultLayout>
      <Sidebar />
      <Feed />
      <Widgets />
    </DefaultLayout>
  );
};

export default Home;
