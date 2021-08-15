import FeedInputAvatar from "./FeedInputAvatar";
import FeedInputField from "./FeedInputField";
import FeedInputOptions from "./FeedInputOptions";

const FeedInput = () => {
  return (
    <div
      className="bg-white p-2 rounded-2xl shadow-md text-gray-500
      font-medium mt-6"
    >
      <div className="flex items-center space-x-4 p-4">
        <FeedInputAvatar />
        <FeedInputField />
      </div>
      <FeedInputOptions />
    </div>
  );
};

export default FeedInput;
