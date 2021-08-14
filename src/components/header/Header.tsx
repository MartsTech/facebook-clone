import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderOptions from "./HeaderOptions";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-50 bg-white flex items-center
      p-2 lg:px-5 shadow-md"
    >
      <div className="flex items-center">
        <HeaderLogo />
        <HeaderSearch />
      </div>
      <HeaderNav />
      <HeaderOptions />
    </header>
  );
};

export default Header;
