import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

const FeedPostsItemFooter = () => {
  return (
    <div
      className="flex justify-between items-center rounded-b-2xl
      bg-white shadow-md text-gray-400 border-t"
    >
      <div className="feed__inputOption rounded-none rounded-bl-2xl">
        <ThumbUpIcon className="h-4" />
        <p className="text-xs sm:text-base">Like</p>
      </div>
      <div className="feed__inputOption rounded-none">
        <ChatAltIcon className="h-4" />
        <p className="text-xs sm:text-base">Comment</p>
      </div>
      <div className="feed__inputOption rounded-none rounded-br-2xl">
        <ShareIcon className="h-4" />
        <p className="text-xs sm:text-base">Share</p>
      </div>
    </div>
  );
};

export default FeedPostsItemFooter;
