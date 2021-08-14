import { FlagIcon, PlayIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import HeaderNavIcon from "./HeaderNavIcon";

const HeaderNav = () => {
  return (
    <div className="flex justify-center flex-grow">
      <div className="flex space-x-6 md:space-x-2">
        <HeaderNavIcon Icon={HomeIcon} active />
        <HeaderNavIcon Icon={FlagIcon} />
        <HeaderNavIcon Icon={PlayIcon} />
        <HeaderNavIcon Icon={ShoppingCartIcon} />
        <HeaderNavIcon Icon={UserGroupIcon} />
      </div>
    </div>
  );
};

export default HeaderNav;
