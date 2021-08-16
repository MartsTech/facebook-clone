import Image from "next/image";
import { Post } from "types/post";
import FeedPostsItemFooter from "./FeedPostsItemFooter";

interface FeedPostsItemProps {
  post: Post;
}

const FeedPostsItem: React.FC<FeedPostsItemProps> = ({ post }) => {
  const { image, name, timestamp, message, postImage } = post;

  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt="avatar"
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="bg-white grid place-items-center">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            loading="lazy"
            src={postImage}
            className="object-cover h-56 md:h-96 "
            alt="post"
          />
        </div>
      )}
      <FeedPostsItemFooter />
    </div>
  );
};

export default FeedPostsItem;
