import {
  ChevronDownIcon,
  BellIcon,
  ChatIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

const HeaderOptions = () => {
  return (
    <div className="flex items-center sm:space-x-2 justify-end">
      {/*Profile Pic */}
      <p className="whitespace-nowrap font-semibold pr-3">Martin Velkov</p>
      <ViewGridIcon className="header__option" />
      <ChatIcon className="header__option" />
      <BellIcon className="header__option" />
      <ChevronDownIcon className="header__option" />
    </div>
  );
};

export default HeaderOptions;
