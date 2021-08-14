import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-50 bg-white flex items-center
      p-2 lg:px-5 shadow-md"
    >
      <HeaderSearch />
      <HeaderNav />
      <HeaderOptions />
    </header>
  );
};

export default Header;
