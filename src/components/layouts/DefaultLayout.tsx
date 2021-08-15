import Header from "components/header/Header";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Header />
      <main className="flex">{children}</main>
    </div>
  );
};

export default DefaultLayout;
