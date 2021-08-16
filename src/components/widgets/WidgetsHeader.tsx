import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";

const WidgetsHeader = () => {
  return (
    <div className="flex justify-between items-center text-gray-500 mb-5">
      <h2 className="text-xl">Contacts</h2>
      <div className="flex space-x-2">
        <VideoCameraIcon className="h-6" />
        <SearchIcon className="h-6" />
        <DotsHorizontalIcon className="h-6" />
      </div>
    </div>
  );
};

export default WidgetsHeader;
