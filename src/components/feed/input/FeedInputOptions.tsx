import { EmojiHappyIcon } from "@heroicons/react/outline";
import { VideoCameraIcon } from "@heroicons/react/solid";
import FeedInputImagePicker from "./FeedInputImagePicker";

const FeedInputOptions = () => {
  return (
    <div className="flex justify-evenly p-3 border-t">
      <div className="feed__inputOption">
        <VideoCameraIcon className="h-7 text-red-500" />
        <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
      </div>
      <FeedInputImagePicker />
      <div className="feed__inputOption">
        <EmojiHappyIcon className="h-7 text-yellow-300" />
        <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
      </div>
    </div>
  );
};

export default FeedInputOptions;
