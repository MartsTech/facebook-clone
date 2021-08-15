import {
  BellIcon,
  ChatIcon, ChevronDownIcon, ViewGridIcon
} from "@heroicons/react/solid";

const HeaderOptions = () => {
  return (
    <>
      <ViewGridIcon className="header__option" />
      <ChatIcon className="header__option" />
      <BellIcon className="header__option" />
      <ChevronDownIcon className="header__option" />
    </>
  );
};

export default HeaderOptions;
