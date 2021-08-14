import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

const HeaderSearch = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/images/logo.png"
        width={40}
        height={40}
        layout="fixed"
        alt="logo"
      />
      <div
        className="flex items-center ml-2 bg-gray-100 p-2
        rounded-full"
      >
        <SearchIcon className="h-6 text-gray-600" />
        <input
          type="text"
          placeholder="Search Facebook"
          className="hidden md:inline-flex items-center ml-2 bg-transparent outline-none
          placeholder-gray-500 flex-shrink"
        />
      </div>
    </div>
  );
};

export default HeaderSearch;
